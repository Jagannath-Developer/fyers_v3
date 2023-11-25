const express=require('express');
const app=express();
const PORT=8000;
const {getProfile}=require('./fyers');

app.get("/",(req,res)=>{
    res.send("Welcome to Fyers V3 services")
})
app.get("/order",(req,res)=>{
    res.send("Oder completed")
})

app.get("/getprofile",async(req,res)=>{
    const data= await getProfile();
    console.log(data);
    res.send(data);
})

app.listen(PORT,()=>{
    console.log(`Server connect at port ${PORT} http://localhost:8000/`)
})
