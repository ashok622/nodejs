//import express module
var express=require('express')
var app=express()
var port=888;
app.get('/',(req,res)=>
{
    res.send("<h1>Hello World</h1>")
})
app.get('/about',(req,res)=>{
    res.send('<h2>About page</h2>')
})
app.get('/users/:name',(req,res)=>{
    res.send('')
})
app.listen(port,()=>{
    console.log("server running")
})