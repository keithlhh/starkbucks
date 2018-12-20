/**
 * Created by Administrator on 2018/11/16.
 */
//拆分url地址得到查询字符串的值
var querySear=location.search.slice(1);
var arr=querySear.split("&");
//猜你喜欢的ul
var my_like=document.getElementsByClassName("my_ul_lp")[0];
//用obj对象接收得到的值
var obj={};
for(var i of arr){
	var arr1=i.split("=");
	obj[arr1[0]]=arr1[1];
}

// $(window).load(function(){
// 	console.log($(".my_ul_lp"))
// })
//ajax获取family类型的数据库表 ,did为编号

$.ajax({
	url:"http://localhost:3000/detail",
	type:"get",
	data:`family=${obj.family}&did=${obj.did}`,
	dataType:"json"
}).then(res=>{
	console.log(res);
//获取第0个元素，用于左侧标题更改
	var family=res[0].family;
	document.getElementById("my_left_family").innerHTML="<"+family;
//点左侧返回上一级
	document.getElementById("my_left_family").onclick=function(e){
		e.preventDefault();
		location.href=`http://localhost:3000/detail.html?family=${obj.family}`;
	}
//获取右侧中图对象 aim
	var aim=res[obj.did-1];
	//中图更换路径
	document.getElementsByClassName("my_middle_img")[0].src=aim.src;
//右侧大图url
	$("#div-lg").css("background-image",`url(${aim.src})`);
	var detail=document.getElementsByClassName("div-details")[0];
	detail.children[0].innerHTML=aim.family;
	detail.children[1].innerHTML=aim.title;
	detail.children[2].innerHTML=aim.detail;
//猜你喜欢部分的内容
	var html="";
	for(var i of res){
		for(var key in i){
			var title= i.title,src= i.src,family=i.family,did=i.did;
		}
	html+=`<li><a href="#" class="my_under_line text-muted"><img src="${src}" data-did=${did} alt=""/><div>${title}</div></a></li>`;
	}
	my_like.innerHTML=html;
})

// 点小图部分显示中图部分
my_like.addEventListener("click",function(e){
	var btn=e.target;
	e.preventDefault();
	if(btn.nodeName=="IMG"){
		var did=btn.getAttribute("data-did")
		//ajax更换中图周围的所有内容
		$.ajax({
			url:"http://localhost:3000/detail",
			type:"get",
			data:`family=${obj.family}&did=${did}`,
			dataType:"json"
		}).then(res=>{
			//console.log(res);
		//获取右侧中图对象 aim
			var aim=res[did-1];
			document.getElementsByClassName("my_middle_img")[0].src=aim.src;
			$("#div-lg").css("background-image",`url(${aim.src})`);
			var detail=document.getElementsByClassName("div-details")[0];
			detail.children[0].innerHTML=aim.family;
			detail.children[1].innerHTML=aim.title;
			detail.children[2].innerHTML=aim.detail;
		})
	}
})

//猜你喜欢部分,左右图片更改
setTimeout(function(){
		var $ul=$("ul.my_ul_lp");
		var count=0;
		//左侧
		$("img.my_prev").click(function(){
			if(count>0){
				count--;
				console.log(count);
				$ul.css("left",-count*100);
			}
		})
		//右侧
		var img_length=$("ul.my_ul_lp").children().length;
		console.log(img_length)
		if(img_length>4){
			$("img.my_next").click(function(){
				$("img.my_prev").removeClass("disabled");
				if(count<img_length-4){
					count++;
					console.log(count);
					$ul.css("left",-count*100);
				}else
					$("img.my_next").addClass("disabled");
			})
		}
},2000)
//放大镜
$("#super-mask").mousemove(function(e){
//鼠标移入，mask显示 div-lg
	$("#div-lg").removeClass("d-none");
	$("#mask").removeClass("d-none")
	//mask根据鼠标移入位置显示
	var x=e.offsetX;
	var y=e.offsetY;
	var $x=(e.offsetX/350).toFixed(2)*100;
	var $y=(e.offsetY/350).toFixed(2)*100;
	$("#mask").css("left",function(){
		if(x>=0&&x<=62.5)
			return 0;
		else if(x>=287.5&&x<350)
			return 225;
		else
			return x-62.5;
	}).css("top",function(){
		if(y>=0&&y<62.5)
			return 0;
		else if(y>=287.5&&y<350)
			return 225;
		else
			return y-62.5;
	});
	$("#div-lg").css("background-position",`${$x}% ${$y}%`);
})
//移出时
$("#super-mask").mouseout(function(){
		$("#mask").addClass("d-none");
		$("#div-lg").addClass("d-none");
})

