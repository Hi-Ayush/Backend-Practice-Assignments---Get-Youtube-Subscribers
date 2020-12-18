
const express = require('express');

const app = express()
const Subscriber = require('./models/subscribers');

// Your code goes here

app.use(express.json());

app.get("/subscribers",(req,res)=>{
    Subscriber.find().then(subscribers=>res.send(subscribers));
});

app.get("/subscribers/names",(req,res)=>{
    Subscriber.find().select({name:1,subscribedChannel:1}).then(data=>res.send(data));
});

app.get("/subscribers/:id",(req,res)=>{
    const id=req.params.id;
    Subscriber.findById(id).then(data=>res.send(data)).catch(err=>res.status(400).send({message:err.message}))
});

 


















module.exports = app;
