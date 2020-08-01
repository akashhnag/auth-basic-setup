const express=require("express");

const router=express.Router();

//any route in here is pre-pended with /auth
router.get("/",(req,res)=>{
    res.json({
        message:"auth router"
    })
});

//signup route
router.post("/signup",(req,res)=>{
    console.log("request",req.body);
    res.json({
        message:"post auth router"
    })
});

module.exports=router;