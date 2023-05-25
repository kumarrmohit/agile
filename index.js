const express=require("express")
const {connection}=require("./db")
const {dtRouter}=require("./route/dt.route")
const port=3000||process.env.port
const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("HOME PAGE")
})

app.use("/dtData",dtRouter)

app.listen(port,async()=>{
    try{
        await connection
        console.log("connected to Db")
    }catch (err){
        console.log("cannot connected to Db")
        console.log(err)
    }
    console.log(`server running at port ${port}`)
})
