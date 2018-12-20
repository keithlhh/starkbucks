const express=require("express");
const pool=require("../pool/pool.js");
var router=express.Router();
//注册路由
router.post("/emp",(req,res)=>{
  var sql="select * from emp";
  pool.query(sql,(err,result)=>{
    res.send(result);
  })
});

router.post("/img",(req,res)=>{
  var sql="select * from img";
  pool.query(sql,(err,result)=>{
    res.send(result);
  })
});

router.get("/del",(req,res)=>{
  var $table=req.query.table;
  var $id=parseInt(req.query.id);
  if($table=="eid"){
    var sql="delete from emp where eid=?";
    pool.query(sql,[$id],(err,result)=>{
      if(err) console.log(err);
      if(result.affectedRows>0)
        res.send("1");
      else
        res.send("0");
    })
  }
  if($table=="mid"){
    var sql="delete from img where mid=?";
    pool.query(sql,[$id],(err,result)=>{
      if(err) console.log(err);
      if(result.affectedRows>0)
        res.send("1");
      else
        res.send("0");
    })
  }
});
module.exports=router;