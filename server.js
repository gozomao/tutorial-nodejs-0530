console.log("hihi");
const express = require("express");
const app = express();
//新增1
const books = require("./router/books");
const about = require("./router/about");


const hbs  = require("hbs");
const path = require("path");

// 設定模板引擎
app.engine('html',hbs.__express);

// 設定模板 (template) 位置
app.set("views" , __dirname);
// app.set("views" , path.join(__dirname ,"application","views"));

// 設定靜態檔 位置
app.use(express.static(path.join(__dirname,"application")));

app.get("/hello",(req,res)=>{
   res.render("template.html");
})
app.get("/",(req,res)=>{
   res.send("Router gogogo!!!!");
});

app.get("/testqq",(req,res)=>{
    res.send("This is /testqq end-point");
});

//新增2
//只要end-point 為"/books"開頭
//統一轉送到books router裡!!!!

app.use("/books",books);
app.use("/about",about);


console.log("下雨拉拉拉");
app.listen(54000,()=>{
        console.log("Server is runnung at localhost: 54000");
});  
