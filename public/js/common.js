/**
 * Created by web on 2018/11/9.
 */
function createXhr(){
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXobject("Microsoft.XMLHttp");
	}
	return xhr;
}
function $(id){
	return document.getElementById(id);
}