const express=require("express");
//const morgan=require("morgan");// logging middleware
const volleyball=require("volleyball");// logging middleware
const bodyParser=require("body-parser");

const auth=require("./auth/index");

const app=express();
const PORT=4000;

app.use(volleyball);
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({
        message:"Hello world"
    })
})

app.use("/auth",auth);

function notFound(req,res,next){
    res.status(404);
    const error=new Error("Not Found -"+ req.originalUrl);
    next(error);
}

function errorHandler(err,req,res,next){
    res.status(res.statusCode || 500);
    res.json({
        message:err.message,
        stack:err.stack
    })
}

app.use(notFound);
app.use(errorHandler);



app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}..`);
})
