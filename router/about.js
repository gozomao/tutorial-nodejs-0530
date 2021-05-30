const express = require("express")

//透過express產生router物件
const router = express.Router();
//about/...const.
router.get("/",(req,res)=>{
  res.send("This is /about router.");
});

//about/a
router.get("/a",(req,res)=>{
    res.send("我是/a路徑!!!!");
});
///about/bbbb
router.get("/bbbb",(req,res)=>{
    res.send("我是/bbbb路徑!!!!");
});
////about/cde
router.get("/cde",(req,res)=>{
    res.send("我是/cde路徑!!!!");
});

module.exports = router;