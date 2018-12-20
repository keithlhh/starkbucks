const express=require("express");
const pool=require("../pool/pool.js");
var router=express.Router();
//注册路由
router.post("/regist",(req,res)=>{
	var obj = req.body;
var $uname=obj.uname,
	$upwd=obj.upwd,
	$addr=obj.add_provs+"/"+obj.add_cities
	$phone=obj.phone,
	$email=obj.email,
	$gender=obj.gender;
var sql="insert into emp values(?,?,?,?,?,?,?)";
	pool.query(sql,[null,$uname,$upwd,$gender,$addr,$phone,$email,],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0)
			res.send("<script>alert('注册成功');location.href='http://localhost:3000/index.html';location.replace('http://localhost:3000/index.html');</script>");
		else
			res.send("<script>alert('注册失败');location.href='http://localhost:3000/register.html';</script>")
	});
});

//checkUname验证
router.post("/checkUname",(req,res)=>{
	var $uname=req.body.uname;
	var sql="select * from emp where name=?";
	pool.query(sql,$uname,(err,result)=>{
		if(err) throw err;
		if(result.length>0)
			res.send("1");
		else
			res.send("0");
	});
});

//checkPhone验证
router.post("/checkPhone",(req,res)=>{
	var $phone=req.body.phone;
	var sql="select * from emp where phone=?";
	pool.query(sql,$phone,(err,result)=>{
		if(err) throw err;
	if(result.length>0)
		res.send("1");
	else
		res.send("0");
	});
});

//checkEmail验证
router.post("/checkEmail",(req,res)=>{
	var $email=req.body.email;
	var sql="select * from emp where email=?";
	pool.query(sql,$email,(err,result)=>{
		if(err) throw err;
	if(result.length>0)
		res.send("1");
	else
		res.send("0");
	});
});

module.exports=router;