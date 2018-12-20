/**
 * Created by web on 2018/11/12.
 */
var ul_accor=document.getElementsByClassName("data_ul_par")[0];
//制作手风琴效果
ul_accor.onclick=function(e){
	var lis= e.target;
	if(lis.nodeName=="SPAN"){
		var uls=ul_accor.querySelectorAll("li>ul");
		for(var ul of uls){
			ul.className="list-unstyled"
		}
		lis.nextElementSibling.className="list-unstyled open";
		var ul_span=ul_accor.querySelectorAll("span");
		for(var span of ul_span){
			span.className="";
		}
		lis.className="text-primary"
	}
}
var my_left=document.getElementsByClassName("my_left")[0];
my_left.style.height=window.innerHeight+"px";

//ajax引入
//用户列表 
window.onload=function(){
	user_list();
}
function user_list(){
	var table=document.getElementsByClassName("table")[0].innerHTML="";
	ajax({
		url:"http://localhost:3000/admin/emp",
		type:"post",
		dataType:"json"
	}).then(res=>{
		var {eid,name,password,gender,addr}=res[0];
		var table=document.getElementsByClassName("table")[0];
		var thead=table.createTHead();
		var tbody=table.createTBody();
		var tr=thead.insertRow();
		for(var key in res[0]){
			tr.insertCell().innerHTML=key;
		}
		tr.insertCell().innerHTML="操作";
		for(var i of res){
			var tr=tbody.insertRow();
			for(var key in i){
				tr.insertCell().innerHTML=i[key];
			}
			tr.insertCell().innerHTML="<button class='btn btn-danger'>X</button>"
		}
	})
}
//商品列表
function product_list(){
	var table=document.getElementsByClassName("table")[0].innerHTML="";
	ajax({
		url:"http://localhost:3000/admin/img",
		type:"post",
		dataType:"json"
	}).then(res=>{
		var {eid,name,password,gender,addr}=res[0];
		var table=document.getElementsByClassName("table")[0];
		var thead=table.createTHead();
		var tbody=table.createTBody();
		var tr=thead.insertRow();
		for(var key in res[0]){
			tr.insertCell().innerHTML=key;
		}
		tr.insertCell().innerHTML="操作";
		for(var i of res){
			var tr=tbody.insertRow();
			for(var key in i){
				tr.insertCell().innerHTML=i[key];
			}
			//创建img
			var img=new Image();
			var src=tr.children[3].innerHTML;
			img.src=src;
			img.className="my_small_pic";
			tr.children[3].innerHTML="";
			tr.children[3].appendChild(img);
			//创建button
			tr.insertCell().innerHTML="<button class='btn btn-danger'>X</button>"
		}
	})
}
var table=document.getElementsByClassName("table")[0];
//删除功能
table.onclick=function(e){
	//表格名称
	var tabName=table.getElementsByTagName("td")[0].innerHTML;
	//console.log(id);
	if(e.target.nodeName=="BUTTON"){
		var tr=e.target.parentNode.parentNode;
		//获得序列号
		var inner=tr.children[0].innerHTML;
		var result=confirm(`确认删除 ${tr.children[1].innerHTML} 吗？`);
		if(result){
		//console.log(inner);
			ajax({
				url:"http://localhost:3000/admin/del",
				type:"get",
				data:"table="+tabName+"&id="+inner
			}).then(res=>{
				if(res=="1"){
					alert("删除成功");
					if(tabName=="eid")
						user_list();
					if(tabName=="mid")
						product_list();
				}
				if(res=="0")
					alert("删除失败");
			});
		}
	}
}