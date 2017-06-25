var express = require('express')
var path = require('path')
var multer = require('multer')
var cors = require('cors')
var bodyparser = require('body-parser')

var app = express()
var PORT = process.env.PORT || 3001
var upload = multer({dest: 'uploads/'})

// View engine //
app.set('view engine', 'html')
app.engine('html', function(path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
})

// Middleware //
app.use(express.static(path.join(__dirname, '../client')))
app.use(bodyparser.json())
app.use(cors())

// Route //
app.post('/upload', upload.single('file'), function(req,res,next){
    var foo = req.file.size
    return res.json({foo})
})


// Connect to port //
app.listen(PORT, function() {
	console.log('http://localhost:' + PORT)
})