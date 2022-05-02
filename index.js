const express=require("express");
const jwt= require("jsonwebtoken");
const port=8000;

const app=express();
app.get("/api",(req,res)=>{
    return res.json({
        message:"hello everyone",
    })
})

app.post("/api/login",(req,res)=>{
    const user={
        id:"1",
        email:"xyz@xyz.com",
        username:"xyz",

    }
    jwt.sign({user}, "PRIVATE_KEY", function(err, token) {
        res.json({
            token:token,
        })
      });
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in running server:${err}`);
    }
    console.log(`Server is running on port${port}`);
})