const express=require("express")
const {dtModel}=require("../models/dt.model")
const dtRouter=express.Router()

dtRouter.get("/",async(req,res)=>{
    let query = req.query
    try{
      const dt=await dtModel.find(query)
      res.send(dt)
    }
    catch (err) {
        res.json({ message: 'Failed to retrieve dt data', error: err.message });
      }
})

dtRouter.get("/:Id", async (req, res) => {
    const ID = req.params.Id 
    try {
        const dt =  await dtModel.find({ _id: ID })
        res.send(dt)
    } catch(err) {
        res.send({ "msg": "cannot get all the data", "error": err.message })
    }
})
 

dtRouter.post('/',async(req,res)=>{
    try{
       const dt=new dtModel(req.body)
       await dt.save()
       res.send({"msg":"dt has created successfully"})
    }
    catch(err){
        res.send({ "msg": "cannot register dt", "error": err.message })
    }
})

dtRouter.delete("/:id",async(req,res)=>{
    const ID = req.params.id
    //res.send(ID)
    try {
        await dtModel.findByIdAndDelete({ _id: ID })
        res.send({ "msg": "dt has been deleted" })
    } catch(err) {
        res.send({ "msg": "cannot delete", "error": err.message })
    }
})

dtRouter.patch("/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
       await dtModel.findByIdAndUpdate({_id:ID},payload)
       res.send({ "msg": "dt has been updated" })
    }
    catch(err) {
        res.send({ "msg": "cannot modify", "error": err.message })
    }
})

module.exports={
    dtRouter
}

