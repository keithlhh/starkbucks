/**
 * Created by Administrator on 2018/11/14.
 */
var my_right=document.getElementsByClassName("my_right")[0];
my_right.style.height=window.innerHeight+"px";
var my_left_div=document.getElementById("my_left_div");
var my_right_ul=document.getElementsByClassName("my_right_ul")[0];
//drink_left动态加载
window.onload=function(){
	ajax({
		url:"http://localhost:3000/drink",
		type:"get",
		dataType:"json"
	}).then(res=>{
		var html="";
		for(var i of res){
			for(var key in i){
				var name=i.name; //左边的name
				var name_family= i.name_family; //咖啡类型
				//console.log(name_family)
			}
			html+=`<div class="text-dark mt-2"><a class="my_under_line text-muted" href="#" data-family="${name_family}">${name}</a></div>`;
		}
		my_left_div.innerHTML=html;
	});

//右侧图片动态加载
	my_left_div.onclick=function(e){
		var btn= e.target;

		//右侧标题与左侧name同步
		document.getElementById("my_title").innerHTML=btn.innerHTML
		e.preventDefault();
		if(e.target.nodeName=="A"){
			//console.log($("#my_title").html());
			//找到左侧菜单的类型
			var family=btn.getAttribute("data-family");
			//console.log(family);
			ajax({
				url:"http://localhost:3000/drink/pics",
				type:"get",
				data:"family="+family,
				dataType:"json"
			}).then(res=>{
				console.log(res);
				var html="";
				for(var i of res){
					for(var key in i){
						var src=i.src,title=i.title;
						var did= i.did;
					}
				//console.log(src,title);
				html+=`<li class="w-25 text-center float-left mt-5"><a class="my_under_line" href="http://localhost:3000/detail_coffe.html?family=${family}&did=${did}"><img class="rounded-circle my_img_150" src="${src}" alt=""><strong class="mt-3 d-block text-muted">${title}</strong></a></li>`;
				}
			my_right_ul.innerHTML=html;
			//console.log(e.target.className)
			//添加下划线样式
			})
		}
	}
}

//首页第一加载
/*
ajax({
	url:"http://localhost:3000/drink/pics",
	type:"get",
	data:"family="+family,
	dataType:"json"
}).then(res=> {
	console.log(res);
var html = "";
for (var i of
res
)
{
	for (var key in i) {
		var src = i.src, title = i.title;
		var did = i.did;
	}
	//console.log(src,title);
	html +=`<
	li
class
	= "w-25 text-center float-left mt-5" > < a
class
	= "my_under_line"
	href = "http://localhost:3000/detail_coffe.html?family=${family}&did=${did}" > < img
class
	= "rounded-circle my_img_150"
	src = "${src}"
	alt = "" > < strong
class
	= "mt-3 d-block text-muted" >${title} < /strong></
	a > < / li >`;
}
my_right_ul.innerHTML = html;
})
*/

//details返回时的内容
var param=location.search.slice(1);
if(param){
	var family=param.split("=")[1];
	ajax({
		url:"http://localhost:3000/drink/pics",
		type:"get",
		data:"family="+family,
		dataType:"json"
	}).then(res=>{
		$("my_title").innerHTML=res[0].family;
	var html="";
	for(var i of res){
		for(var key in i){
			var src=i.src,title=i.title;
			var did= i.did;
		}
		//console.log(src,title);
		html+=`<li class="w-25 text-center float-left mt-5"><a class="my_under_line" href="http://localhost:3000/detail_coffe.html?family=${family}&did=${did}"><img class="rounded-circle my_img_150" src="${src}" alt=""><strong class="mt-3 d-block text-muted">${title}</strong></a></li>`;
	}
	my_right_ul.innerHTML=html;
	//console.log(e.target.className)
	//添加下划线样式
	})
}



