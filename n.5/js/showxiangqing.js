var right=document.getElementsByClassName("right")[0];
var btns=right.getElementsByTagName("input");
var divs=right.getElementsByTagName("div");
var l=btns.length;
var n=0;
for(var i=0;i<l;i++){
	var btn=btns[i];
	btn.index=i;
	btn.onclick=function(){
		for(var i=0 ;i<l;i++){
			var n=this.index;
			divs[i].style.display="none";;
			btns[i].style.background="";
			btns[i].style.color="";
		}	
			divs[n].style.display="block";
			btns[n].style.background="deepskyblue";
			btns[n].style.color="white";
		
	}
}
function query(_name){	
	var str = location.href;	// 把当前页面的url取出
	var arr = str.split("?");
	if( arr.length > 1 ){
		// 表示有问号，即有数据
		// arr[1] 表示所有的参数    例如："id=4&p=2&t=3"
		var col = arr[1].split("&");
		var l = col.length;
		for( var i=0; i<l; i++ ){
			// col[i] 表示其中一个数据，例如："id=4"
			var c = col[i].split("=");
			// c 表示其中一个数据的数组，例如：["id", "4"]
			if( c[0] == _name ){
				return c[1];
			}
		}
		return "";
	}else{
		// 表示没有问号，即没有数据
		return "";
	}
}
var id=query("id");
//console.log(id);
var goods=getCookie("x"+id);
//console.log(goods);
var obj=JSON.parse(goods);
//console.log(obj)
var tcent=document.querySelector(".tcent");
var small=document.getElementById("small")
	small.src="../lbimg/"+obj.img;
	small.style.width="570px";
	small.style.height="400px";
	div1.appendChild(small);
	baseWidth="570px";
	baseHeight="400px";
	b=3;
	div1.onmousemove=function(event){
		glass.style.display="block";
		div2.style.display="block";
		big.src=small.src;
		big.style.width=parseInt(baseWidth)*b+"px";
		big.style.height=parseInt(baseHeight)*b+"px";
		event =event || window.event;
		var x=event.clientX-div1.offsetParent.offsetLeft;
		var y=event.clientY-div1.offsetParent.offsetTop;
			if(x<0){
				x=0
			}
			var mx=div1.offsetWidth-glass.offsetWidth;
			if(x>mx){
				x=mx
			}
			if(y<0){
				y=0;
			}
			var my=div1.offsetHeight-glass.offsetHeight;
			document.title=div1.offsetHeight+","+glass.offsetHeight
			if(y>my){
				y=my
			}
			glass.style.left=x+"px";
			glass.style.top=y+"px";
			big.style.left=-x*b+"px";
			big.style.top=-y*b+"px";
			
	}
	div1.onmouseout=function(){
		glass.style.display="none";
		div2.style.display="none";
		big.src="";
	}
//购物车部分；	
var rcent=document.querySelector(".rcent");	
var ols=rcent.getElementsByTagName("ol")[0];
var lis=ols.children;
var li1=lis[0];
li1.innerHTML=obj.content;
li1.style.borderBottom="1px dashed grey";
li1.style.height="50px";
li1.style.textAlign="center";
li1.style.lineHeight="50px";
li1.style.fontSize="30px"
var li2=lis[1];
li2.innerHTML="商品 编号：32343"+"<br>"+"￥"+obj.price+"市场价：￥240.00    折扣：6.9折";
li2.style.borderBottom="1px dashed grey";
li2.style.height="60px";
li2.style.fontSize="20px";
li2.style.marginTop="20px";
var li3=lis[2];
li3.innerHTML="所属品牌：kose高斯——雪肌精系列 "+"<br>"+"所属分类：面部护理——爽肤步骤——化妆水"+"<br>"+"用户评分：☆☆☆☆☆ 已有评论0条"+"<br>"+"运费说明：购物满80元免费快递 查看运费详情"+"<br>"+"消费者保障"+"<img src='../showimg/2.png'>"
li3.style.fontSize="20px";
li3.style.lineHeight="2";
var p=document.createElement("p");
p.style.background="#f5debc";
p.style.height="60px";
p.style.lineHeight="60px";
p.innerHTML="我要买:";
li3.appendChild(p);
var input1=document.createElement("input");
input1.value="-";
input1.style.width="25px";
input1.style.height="25px";
input1.type="button";
p.appendChild(input1);
var input2=document.createElement("input");
input2.style.width="30px";
input2.style.height="30px";
input2.value=1;
//给原来的对象添加一个属性；数值对应的是input2.value值
obj.num=input2.value;//给obj添加新的键值对
input2.obj=obj;
//console.log(obj.num);
p.appendChild(input2);
var input3=document.createElement("input");
input3.value="+";
input3.type="button";
input3.style.width="25px";
input3.style.height="25px";
input3.style.marginRight="20px";
p.appendChild(input3);
var gowu=document.createElement("input");
gowu.type="button";
gowu.style.width="125px";
gowu.style.height="35px";
gowu.value="添加到购物车";
gowu.onclick=function(){
	open("cart.html");
}
gowu.style.background="#ffcd51";
gowu.style.marginRight="10px";
gowu.style.borderRadius="10px";
p.appendChild(gowu);
var shoucang=document.createElement("input");
shoucang.type="button";
shoucang.style.width="125px";
shoucang.style.height="35px";
shoucang.style.borderRadius="10px";
shoucang.value="收藏";
shoucang.style.background="#1fa6cd";
p.appendChild(shoucang);
//输入框的加减发
var m=input2.value;
input1.onclick=function(){
	 m--;
	 if(m<0){
	 	m=0;
	 }
	 input2.value=m;
	 obj.num=m;
	 //console.log(obj.num)
	 setCookie("gw1"+obj.id,JSON.stringify(obj),10);
}
input3.onclick=function(){
	 m++;
	 input2.value=m;
	 obj.num=m;
	setCookie("gw1"+obj.id,JSON.stringify(obj),10)
}









































