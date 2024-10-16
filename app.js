// entry file -backend work in server (so we need a server )
// const express =require('express');
import express from 'express';
import { userRoutes } from './routes/user-routes.js';

// if you want to use import export instead of require then make change in package.json "type":"module",
const app =express();
console.log("heloo")
// app.get('/', (req, res) => {
    //     res.send('Hello World!')
    //   })
app.use('/',userRoutes);

app.use((req,res,next)=>
    {res.json({message:'Invalid URL'});
})
// app is now my function to use express's functionality
const server= app.listen(1234,(err)=>{
    if(err){
        console.log("server crash",err);
    }
    else{
        console.log("server up and running",server.address().port);
    }
})


