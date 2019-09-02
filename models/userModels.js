const mongoose=require("mongoose");

//定义文档结构约束
const Schema=mongoose.Schema
const userSchema=new Schema({
  name:{
    type:String,
    require:true
  },
  pwd:{
    type:String
  },
  age:Number,
  gender:String
})

const useModule = mongoose.model("users",userSchema)
//向外面暴露useModule
module.exports = useModule