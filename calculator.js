//jshint eversion 5
const express = require("express");
const bodyParser = require ("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

//addition
app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");
})

app.post("/",function(request,response){
  var num1= Number(request.body.n1);
  var num2= Number(request.body.n2);
  var result= num1+num2;
  response.send("The addition is" + result);
})

//bmi
app.get("/bmiCalci",function(request,response){
  response.sendFile(__dirname + "/bmiCalci.html");
})

app.post("/bmiCalci",function(request,response){
  var weight = parseFloat(request.body.w);
  var height = parseFloat(request.body.h);
  var result = weight/(height*height)
  response.send("The addition is" + result);
})

//divide

app.get("/divide",function(request,response){
  response.sendFile(__dirname + "/divide.html");
})

app.post("/divide",function(request,response){
  var num1= Number(request.body.n1);
  var num2= Number(request.body.n2);
  var result= num1/num2;
  response.send("The division is" + result);
})

//multiply

app.get("/multiply",function(request,response){
  response.sendFile(__dirname + "/multiply.html");
})

app.post("/multiply",function(request,response){
  var num1= Number(request.body.n1);
  var num2= Number(request.body.n2);
  var result= num1*num2;
  response.send("The Multiplication is" + result);
})

app.listen(9000,function(){
  console.log("Server started at 9000");
})
