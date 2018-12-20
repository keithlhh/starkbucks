/**
 * Created by Administrator on 2018/11/15.
 */
const express=require("express");
const pool=require("../pool/pool.js");
var router=express.Router();

//详情查询路由
router.get("/",(req,res)=>{
	var $family=req.query.family;
	sql=`select * from ${$family}`;
	pool.query(sql,(err,result)=>{
		if(err) console.log(err);
		res.send(result);
	})
});

module.exports=router;