var cities=[
	[{"name":'东城区',"value":101},
		{"name":'西城区',"value":102},
		{"name":'海淀区',"value":103},
		{"name":'朝阳区',"value":104}],
	[{"name":'河东区',"value":201},
		{"name":'河西区',"value":202},
		{"name":'南开区',"value":303}],
	[{"name":'石家庄市',"value":301},
		{"name":'廊坊市',"value":302},
		{"name":'保定市',"value":303},
		{"name":'唐山市',"value":304},
		{"name":'秦皇岛市',"value":304}]
];
//1.查找事件触发元素
var selProvs=document.getElementsByName("add_provs")[0];
selProvs.onchange=function(){
	var selCty=document.getElementsByName("add_cities")[0];
	console.log(selCty)
	var i = this.selectedIndex;
	if(i>0){
		var ctys=cities[i-1];
		var frag=document.createDocumentFragment();
		var opt=document.createElement("option");
		opt.innerHTML="-请选择-"
		frag.appendChild(opt);
		for(var c of ctys){
			var opt=document.createElement("option");
			opt.innerHTML=c.name;
			opt.value=c.value;
			frag.appendChild(opt);
		}
		selCty.innerHTML="";
		selCty.appendChild(frag);
		selCty.className="";
	}else{
		selCty.className="hide";
	}
}
//2.绑定事件处理函数
//3.查找修改元素
//4.修改

//获得form表单元素
var form=document.forms[0];
//input uname绑定onblur事件
//用户名注册验证
form.uname.onfocus=function(){
	$("uname_span").className="";
}
form.uname.onkeyup=function(){
	var $uname=this.value;
	if(vali($uname,/^\w{6,12}$/))
		checkUname();
	else{
		$("uname_span").className="text-danger";
		$("uname_span").innerHTML="用户名格式不正确";
	}
}
//Reg表达式验证
function vali(str,reg){
	return reg.test(str);
}
//ajax验证
function checkUname(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var res=xhr.responseText;
			if(res=="1"){
				$("uname_span").innerHTML="sorry!用户名已被占用，请更换";
				$("uname_span").className="text-primary"
			}else{
				$("uname_span").innerHTML="恭喜！用户名可以使用";
				$("uname_span").className="text-success";
			}
		}
	}
	xhr.open("post",'/user/checkUname',true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $uname=form.uname.value;
	var formdata="uname="+$uname;
	xhr.send(formdata);
}

//密码注册验证
form.upwd.onfocus=function(){
	$("upwd_span").className="";
}
//Reg表达式验证
form.upwd.onkeyup=function(){
	var $upwd=form.upwd.value;
	if(vali($upwd,/^\w{6,10}$/)){
		$("upwd_span").innerHTML="密码格式正确";
		$("upwd_span").className="text-success";
	}
	else{
		$("upwd_span").className="text-danger";
		$("upwd_span").innerHTML="密码格式不正确";
	}
}

//确认密码验证
form.upwd_conf.onfocus=function(){
	$("upwd_span_conf").className="";
}
//两次一样确认验证
form.upwd_conf.onkeyup=function(){
	var $upwd=form.upwd.value;
	var $upwd_conf=form.upwd_conf.value;
	if(vali($upwd_conf,/^\w{6,10}$/)){
		if($upwd==$upwd_conf){
			$("upwd_span_conf").innerHTML="两次密码一致";
			$("upwd_span_conf").className="text-success";
		}else{
			$("upwd_span_conf").className="text-danger";
			$("upwd_span_conf").innerHTML="两次密码不一致";
		}
	}else{
		$("upwd_span_conf").className="text-danger";
		$("upwd_span_conf").innerHTML="密码为6-10位数字或字符";
	}
}

//手机号验证
form.phone.onkeyup=function(){
	var $phone=form.phone.value;
	if(vali($phone,/^1[3-8]\d{9}$/))
		checkPhone();
	else{
		$("phone_span").innerHTML="手机号格式不正确";
		$("phone_span").className="text-danger";
	}
}
//手机号ajax验证
function checkPhone(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var res=xhr.responseText;
			if(res=="1"){
				$("phone_span").innerHTML="sorry!手机号已被占用，请更换";
				$("phone_span").className="text-primary"
			}else{
				$("phone_span").innerHTML="恭喜！手机号可以使用";
				$("phone_span").className="text-success";
			}
		}
	}
	xhr.open("post",'/user/checkPhone',true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $phone=form.phone.value;
	var formdata="phone="+$phone;
	xhr.send(formdata);
}
//邮箱验证
form.email.onkeyup=function(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var res=xhr.responseText;
			if(res=="1"){
				$("email_span").innerHTML="sorry!邮箱地址已被占用，请更换";
				$("email_span").className="text-primary"
			}else{
				$("email_span").innerHTML="恭喜！邮箱地址可以使用";
				$("email_span").className="text-success";
			}
		}
	}
	xhr.open("post",'/user/checkEmail',true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var $email=form.email.value;
	var formdata="email="+$email;
	xhr.send(formdata);
}

//提交验证
form.elements[form.length-2].onclick=function(){
	if(!vali(form.uname.value,/^\w{6,12}$/))
		form.uname.focus();
	else if(!vali(form.upwd.value,/^\w{6,10}$/))
		form.upwd.focus();
	else if(!vali(form.upwd_conf.value,/^\w{6,10}$/))
		form.upwd_conf.focus();
	else if(!vali(form.phone.value,/^1[3-8]\d{9}$/))
		form.phone.focus();
	else if(form.email.value=="")
		form.email.focus();
	else if(form.gender[0].checked||form.gender[1].checked||form.gender[2].checked){
		if(document.getElementsByName("add_provs")[0].value!="—请选择—" && document.getElementsByName("add_cities")[0].value!="-请选择-"){
			form.submit();
		}
	}
}







