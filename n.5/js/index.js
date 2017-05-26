//购物车页
h3.onmouseover=function(){
	logoul.style.display="block";
}
logoul.onmouseover=function(){
	logoul.style.display="block";
}
logoul.onmouseout=function(){
	logoul.style.display="none";
}
h3.onmouseout=function(){
	logoul.style.display="block";
}
var str=document.cookie;
//console.log(str);
var arr = str.split("; ");
var l = arr.length;
var m=0;
var brr=[];
for( var i=0; i<l; i++ ){
	var col = arr[i].split("=");
	if( /^gw\d+$/.test(col[0]) ){
		var obj = JSON.parse(decodeURIComponent(col[1]));
		// 动态创建行
		
		m++;
	var li=document.createElement("li");
	li.style.borderBottom="1px dashed #999"
	li.o = obj;
	li.style.border="1px dashed #999";
	logoul.appendChild(li);
	var span2=document.createElement("span");
	span2.innerHTML=obj.content;
	span2.style.width="400px";
	li.appendChild(span2);	
	var span5=document.createElement("span");
	span5.innerHTML="单价"+obj.price;
	span5.style.paddingRight="30px";
	li.appendChild(span5);
	var span6=document.createElement("span");
	span6.innerHTML="数量"+obj.num;
	span6.style.width="30px";
	span6.style.height="20px";
	span6.style.paddingRight="40px";
	span6.style.textAlign="center";
	li.appendChild(span6);
	var span7=document.createElement("span");
	span7.innerHTML=obj.num*obj.price;
	//console.log(span6.innerHTML);
	//console.log(obj.price);
	span7.style.width="30px";
	span7.style.height="20px";
	span7.style.paddingRight="40px";
	span7.style.textAlign="center";
	li.appendChild(span7);
	
	}
	
}
var  shuzi=document.getElementById("shuzi");
shuzi.innerHTML=m;
//登录页
var user=getCookie("us");
var psw=getCookie("ps");
//console.log(user+","+psw);
if(user==""){
	
}else{
	b.innerHTML=user;
	bw.style.display="inline-block";
	bw.value="退出";
	bw.nextSibling.nextSibling.innerHTML="";
	bw.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="";
}

bw.onclick=function(){
	bw.nextSibling.nextSibling.innerHTML="登录";
	bw.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="欢迎注册";
	bw.value="";
	bw.style.background="#f7f7f7";
	b.innerHTML="";
}
//选项卡
var a1=document.getElementById("a1");
var ul1=document.getElementsByClassName("ul1")[0];
var lis=ul1.children;
var l=lis.length;

var liebiao=document.querySelector(".liebiao");
var divs1=liebiao.getElementsByTagName("div");
var dl=divs1.length;
//console.log(dl);
var ul1=liebiao.getElementsByClassName("ul1")[0];
a1.onmouseover=function(){
	liebiao.style.display="block";
	a1.style.background="red";
}
for(var i=0;i<l;i++){
	var li=lis[i];
	li.index=i;
	li.onmouseover=function(){
		var n = this.index;
		for(var i=0;i<dl;i++){
			lis[i].style.background="#f8f8f8";
			divs1[i].style.display="none";
		}
		lis[n].style.background="#fff";
		divs1[n].style.display="block";
			divs1[n].onmouseout=function(){
			divs1[n].style.display="none";
		}
	}
}
//轮播图
var imgs=document.querySelector(".imgs");
var ul=imgs.getElementsByTagName("ul")[0];
var ol=imgs.getElementsByTagName("ol")[0];
var lis2=ol.children;
var l=lis2.length;
var n=0;
var navleft=document.getElementsByClassName("navleft")[0];
var navlul=navleft.getElementsByTagName("ul")[0];
var navright=document.getElementsByClassName("navright")[0];
var navrul=navright.getElementsByTagName("ul")[0];
for(var i=0;i<l;i++){
	var li=lis2[i];
	li.index=i;
	li.onmouseover=function(){
		n=this.index;
		tab();
	}
}
function tab(){
	for(var i=0;i<l;i++){
		lis2[i].className="";
	}
	startMove(ul ,{left:n*-765});
	lis2[n].className="f";
	startMove(navlul,{left:n*-327});
	startMove(navrul,{left:n*-327});
}
function next(){
	n++;
	if(n==l){
		n=0;
	}
	tab();
}
var timer=setInterval(next,3000);
//限时抢购
var limitB=document.getElementsByClassName("limitB")[0];
var ulx=limitB.getElementsByTagName("ul")[0];
ajax.get("../publicjs/dbg1.json",function(str){
	var obj=JSON.parse(str);
	var arr=obj.list;
	var l=arr.length;
	//console.log(arr);
	var arrTimeSpan = [];	//过期时间的集合
	for(var i=0;i<l;i++){
		var o=arr[i];
		//console.log(o);
		var li=document.createElement("li");
		li.style.width="240px";
		li.style.height="435px";
		//li.style.border="1px solid #000";
		li.style.float="left";
		li.style.marginRight="20px";
		li.style.marginLeft="20px";
		li.style.marginTop="10px";
		ulx.appendChild(li);
			
		var span = document.createElement("span");		
		span.title = o.time;	// 鼠标在span标签上悬停的时候，会有提示，o.time 表示过期时间
		span.innerHTML = dateDiff(new Date(), new Date(o.time), span);	// 显示间隔时间
		span.style.display="inline-block";
		span.style.background="#999";
		span.style.color="#fff";
		span.style.display="inline-block";
		span.style.width="240px";
		span.style.height="30px";
		span.style.fontSize="16px";
		span.style.textAlign="center";
		span.style.lineHeight="30px";
		arrTimeSpan.push(span);	
		li.appendChild(span);

		
		var img=document.createElement("img");
		img.src="../indeximg/"+o.img;
		img.style.textAlign="center";
		li.appendChild(img);
		var h4=document.createElement("h4");
		h4.innerHTML=o.content;
		h4.style.textAlign="center";
		h4.style.background="#f8f7f5";
		h4.style.height="30px";
		h4.style.lineHeight="30px";
		h4.style.fontSize="12px";
		li.appendChild(h4);
		var h4=document.createElement("h4");
		h4.innerHTML="&nbsp;&nbsp;&nbsp￥"+o.price;
		h4.style.background="#f8f7f5";
		h4.style.width="130px";
		h4.style.height="30px";
		h4.style.lineHeight="30px";
		h4.style.fontSize="20px";
		h4.style.background="#fd1d5b";
		h4.style.display="inline-block"
		li.appendChild(h4);
		var span=document.createElement("span");
		span.innerHTML="&nbsp;&nbsp抢购";
		span.style.display="inline-block";
		span.style.width="105px";
		span.style.height="30px";
		span.style.lineHeight="30px";
		span.style.fontSize="20px";
		span.style.color="red";
		span.style.textAlign="center";
		span.style.background="#fcd400";
		li.appendChild(span);
		var p=document.createElement("p");
		p.innerHTML="123人购买";
		p.style.textAlign="right";
		p.style.fontSize="12px";
		p.style.color="red";
		li.appendChild(p);
		
		
	}
	setInterval(function(){
		// arrTimeSpan 表示所有商品过期时间的span节点数组
		var l = arrTimeSpan.length;//所有商品过期时间span的长度
		for( var i=0; i<l; i++ ){//循环
			var _s = arrTimeSpan[i];//获取span节点（当前过期时间span）
			_s.innerHTML = dateDiff(new Date(), new Date(_s.title), _s);
		}
	}, 1000);
	
	
	function dateDiff(d1, d2, s){
		// 过期时间 减掉 当前时间   等于   还剩多少时间过期，单位是毫秒
		var ms = d2.getTime() - d1.getTime();
		// ms 小于或等于0时，表示已过期
		if( ms <= 0 ){
			// 已过期时，添加到购物车的按钮失效
			s.previousSibling.style.background = "gray";
			s.previousSibling.style.cursor = "no-drop"
			s.previousSibling.onclick = null;
			return "已过期";
		}else{
			// 没有过期时，格式化时间
			return Format(ms);
		}
	}
	function Format(ms){
		var obj = {
			"天" : 24*60*60*1000,
			"时" : 60*60*1000,
			"分" : 60*1000,
			"秒" : 1000
		};
		// 初始化时 tmp 等于传进来的毫秒
		var tmp = ms;
		// 表示格式化后的结果（初始化时为空）
		var str = "";
		// 对规则进行循环
		for( var i in obj ){
			var s = Math.floor(tmp / obj[i]); // for循环第一次时，s表示天
			tmp = tmp % obj[i];	// 毫秒 对 （天）规则取余，结果就是排除掉天后，剩余的毫秒
			str += s+i;	//s表示天数，i表示天
		}
		return str;
	}	
});
//特价
var tejia=document.getElementsByClassName("tejia")[0];
var as=tejia.getElementsByTagName("a");
var asl=as.length;
var divs=tejia.getElementsByTagName("div");
var divsl=divs.length;
var x;
for(var i=0;i<asl;i++){
	var a=as[i];
	a.index=i;//自定义属性
	a.onmouseover=function(){
		x=this.index;
		//alert(x);
		for(var j=0;j<divsl;j++){
			as[j].style.backgroundImage="";
			as[j].style.backgroundRepeat="";
			as[j].style.backgroundPosition="";
			divs[j].className="";
		}
		as[x].style.backgroundImage=" url(../icon/icon3.jpg)";
		as[x].style.backgroundRepeat="no-repeat";
		as[x].style.backgroundPosition="bottom"
		divs[x].className="selceted1";
	}
}
//品牌活动
//楼层效果
$(function(){
	
	
	// 求每一层的top值
	var arr = $(".nav1,.imgs,.p1,.limitB,.tejia,.pinpai,.hf,.cz,.xs,.nan,.mt,.footer").map(function(index, elem){
		return $(elem).offset().top ;
		
	});
	
	// 求屏幕可视高度
	var ch = $(window).height();
	$(window).resize(function(){
		ch = $(window).height();
	})
	
	// 滚动条改变
	$(window).scroll(function(){
		// 滚动条隐藏区域top
		var st = $(document).scrollTop();
		//document.title = st;
		//document.title = "";
		
		// 如果超过第一层，则楼层显示
		if( st > arr[1]-ch/2 ){
			$(".louti").fadeIn(400);
		}else{
			$(".louti").fadeOut(400);
		}
		
		$(".louti>ul>li").removeClass("selected");
		
		// 获取对应的下标
		arr.each(function(index, value){
			//console.log(index, value, value-ch/2);
			
			if( index+1 != arr.length ){
			
				if ( st > value-ch/2 && st < arr[index+1]-(ch/2) ){
					//console.log( index, value, value-ch/2 );
					//document.title = index;
					
					$(".louti>ul>li").eq(index).addClass("selected");
					
				}
			
			}
			
		});
		
	});
	//console.log( arr );
	
	// 点击楼层时，滚动条跳转
	$(".louti>ol>li").click(function(){
		//$(window).scrollTop(0);
		$("html,body").animate({scrollTop:0}, 2000);
	});
	
	$(".louti>ul>li").click(function(){
		//$(window).scrollTop(0);
		
		//console.log(  );
		
		$("html,body").animate({scrollTop:arr[$(this).index()]}, 2000);
	});
	
	
});
//固定菜单
//var nav1=document.getElementsByClassName("nav1")[0];
window.onscroll = function(){
	var st = document.documentElement.scrollTop||document.body.scrollTop;
	console.log(st);
	if(st>200){
	var nav1=document.getElementsByClassName("nav1")[0];
	nav1.style.position="fixed";
	nav1.style.top="0px";
	liebiao.style.display="none";
	nav1.style.width="100%";
	
	}else{
		var nav1=document.getElementsByClassName("nav1")[0];
		nav1.style.position="";
		liebiao.style.display="block";
	}
}





































