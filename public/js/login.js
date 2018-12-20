/**
 * Created by Administrator on 2018/11/13.
 */
var form=document.forms[0];
var btn=form.elements[form.elements.length-1];
btn.onclick=function(){
	login();
}
function login(){
	var xhr=createXhr();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4&&xhr.status==200){
			var res=xhr.responseText;
			if(res=="1"){
				motaik.style.display="block";
				my_cha.onclick=function(){
					motaik.style.display="none";
					if(getComputedStyle(motaik).display=="none")
						location.href="http://localhost:3000/index.html";
				}
			}
			if(res=="0"){
				motaik.style.display="block";
				motaik.children[0].innerHTML="登录失败";
				my_cha.onclick=function(){
					motaik.style.display="none";
				}
			}
		}
	}
	xhr.open("post","/userL/login",true);
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var uname=form.uname.value;
	var upwd=form.upwd.value;
	var formdata=`uname=${uname}&upwd=${upwd}`;
	xhr.send(formdata);
}

//模态框
var my_cha=document.getElementsByClassName("my_cha")[0];
var motaik=document.getElementsByClassName("motaik")[0];
motaik.style.left=window.innerWidth/4+"px";
my_cha.onclick=function(){

}
function moTai(){

}