const express=require("express");
const pool=require("../pool/pool.js");
var router=express.Router();
//注册路由
router.post("/login",(req,res)=>{

	var $uname=req.body.uname,
			$upwd=req.body.upwd;
console.log($uname,$upwd)
	var sql="select * from emp where name=? and password=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0)
			res.send("1");
		else
			res.send("0");
	});
});



module.exports=router;