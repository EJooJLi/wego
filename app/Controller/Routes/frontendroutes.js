var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/users', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

// app.get('/test', function(request, response){
//   console.log(request.body);      // your JSON
//    response.send(request.body);    // echo the result back
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
