var a1=document.getElementById("a1");
var ul1=document.getElementsByClassName("ul1")[0];
var lis=ul1.children;
var l=lis.length;
var n=0;
var liebiao=document.querySelector(".liebiao");
var divs=liebiao.getElementsByTagName("div");
var ul1=liebiao.getElementsByClassName("ul1")[0];
a1.onmouseover=function(){
	liebiao.style.display="block";
	a1.style.background="red";
}
for(var i=0;i<l;i++){
	var li=lis[i];
	li.index=i;
	li.onmousemove=function(){
		for(var i=0;i<l;i++){
		var n=this.index;
			lis[i].style.background="#f8f8f8";
			divs[i].style.display="none";
		}
		lis[n].style.background="#fff";
		divs[n].style.display="block";
	}
	divs[i].onmouseout=function(){
		for(var i=0;i<l;i++){
			lis[i].style.background="#f8f8f8";
			divs[i].style.display="none";
		}
		liebiao.style.display="none";
	}
}






























