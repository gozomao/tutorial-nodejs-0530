console.log("hihi");
const express = require("express");
const app = express();
//新增1
const books = require("./router/books");
const about = require("./router/about");


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