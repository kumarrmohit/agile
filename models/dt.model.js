const mongoose=require("mongoose")

const dtschema=mongoose.Schema({
    name:String,
    description:String
})

const dtModel=mongoose.model("dtrecords",dtschema)

module.exports={
    dtModel
}