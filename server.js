const mongoose=require("mongoose")
const express=require("express")
const cookieParser = require('cookie-parser')
const app=express()

const router=require("./Router")
const cookie = require("./Router/cookie")






//设置能被服务器理解的配置
app.use(cookieParser())
app.set("view engine","ejs")
app.set("views","views")

//使用路由中间件
app.use(express.static("public"))
app.use(express.urlencoded())
app.use(express.json())


//注册路由中间件
app.use("/api",router)
//cookie路由使用
app.use("/cookie", cookie)








mongoose.connect("mongodb://localhost/test3", {
    useNewUrlParser: true,
    useCreateIndex: true
  }).then(
  ()=>{

    app.listen("5500",()=>{
      console.log(`server is running on http://localhost:5500`)
    })
  },
  error=>{
    console.log("数据库连接失败",error)
  }
)