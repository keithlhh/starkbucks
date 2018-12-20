/**
 * Created by Administrator on 2018/11/15.
 */
const express=require("express");
const pool=require("../pool/pool.js");
var router=express.Router();
//drink_left路由
router.get("/",(req,res)=>{
	var sql="select * from drink";
	pool.query(sql,(err,result)=>{
		if(err) console.log(err);
		res.send(result);
	})
});

router.get("/pics",(req,res)=>{
	var $coffe=req.query.family;
	var sql=`select * from ${$coffe}`;
	pool.query(sql,(err,result)=>{
		if(err) console.log(err);
		res.send(result);
	})
});

module.exports=router;