const express=require("express")
const app=express()
const router=express.Router()

router.use((req,res,next)=>
{
    console.log("Inside Router MiddleWare")
    next()
})

router.get("/home",(req,res,next)=>
{
    console.log("Inside Home")
    next()
},(req,res)=>
{
    console.log("Home Page Loaded");
})


router.get("/contact",(req,res,next)=>
{
    console.log("Inside contacts")
    next()
},(req,res)=>
{
    console.log("Contact Page Loaded");
})


app.use(router)

app.get("/home",(req,res)=>
{
    res.send("Hello Guys")
})

app.listen(10000,function ()
{
    console.log("Server Up")
})