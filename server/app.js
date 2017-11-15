let express = require('express')
let app = express();
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let path = require('path')
let cons = require('consolidate');
let port = 3500;




app.use(express.static(path.join(__dirname,'..','public')));

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'html');


app.use('/',function (req,res) {
  res.render('index')
})



app.listen(port,function () {
  console.log("listen port :: " + port)
})
