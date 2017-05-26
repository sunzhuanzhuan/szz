var center=document.getElementsByClassName("center")[0];
var left=center.getElementsByClassName("left")[0];
var ul=left.getElementsByTagName("ul")[0];
var ols=left.getElementsByTagName("ol");
var lis=ul.children;
var l=lis.length;
var n=0;
for(var i=0;i<l;i++ ){
	var li=lis[i];
	li.index=i;
	li.onmousemove=function(){
		var n=this.index;
		for(var j=0;j<l;j++){
			ols[j].style.display="none";
			
		}
		ols[n].style.display="block";
	}
	li.onmouseout=function(){
		var n=this.index;
		ols[n].style.display="none";
	}
}
var tp=center.getElementsByClassName("toop")[0];
var rul=tp.getElementsByTagName("ul")[0];
var rlis=rul.children;
var rli=rul.children[0];
var a=btn.value;
var flag=false;
var num=0;

btn.onclick=function(){

	if (num%2==0){
		btn.value="收起";
		rli.className="f";
	}
	if(num%2!=0){
		btn.value="更多";
		rli.className="e";
	}
	num++;
}

//xxk
var xxk=center.getElementsByClassName("xxk")[0];
var xbtns=xxk.getElementsByTagName("input");
var xdivs=xxk.getElementsByTagName("div");
var xbtnsl=xbtns.length;
var n;

for(var i=0 ;i<xbtnsl;i++){
	var xbtn=xbtns[i];
	xbtn.index=i;
	xbtn.onclick=function(){
		n = this.index;
		for(var j=0;j<xbtnsl;j++){
			xbtns[j].className="";
			xdivs[j].className="";
		}
		xbtns[n].className="ckecked1";
		xdivs[n].className="slected";
	}
}
//导入选项卡内容
function liebiao(){
ajax.get("../publicjs/db1.json",function(str){
		var db=JSON.parse(str);
		var arr=db.list;
		var l=arr.length;
		for(var i=0;i<l;i++){
			var o=arr[i];
			var li=document.createElement("li");
			div1.appendChild(li);
			li.goods=o;//给li自定义属性，方便以后拿起来用
			var img=document.createElement("img");
			li.appendChild(img);
			img.src1="../lbimg/"+o.img;
			li.style.width="240px";
			li.style.height="400px";
			li.style.float="left";
			img.style.cursor="pointer";
			var h3=document.createElement("h3");
			li.appendChild(h3);
			h3.innerHTML="<a href='xiangqing.html?id="+o.id+"'>"+o.content+"</a>";
			h3.style.fontSize="12px";
			h3.style.color="#999";
			h3.style.textAlign="center";
				h3.onclick=function(){
					var goods=this.parentNode.goods;//把属性存起来做成一个变量
					setCookie("x"+goods.id,JSON.stringify(goods),10);
					
				}
			var h4=document.createElement("h4");
			li.appendChild(h4);
			h4.innerHTML="￥"+o.price;
			h4.style.textAlign="center";
			h4.style.color="red";
			h4.style.fontSize="16px"
			var goshop=document.createElement("input");
			li.appendChild(goshop);
			goshop.value="加入购物车";
			goshop.type="button";
			goshop.style.width="80px";
			goshop.style.height="30px";
			goshop.style.textAlign="center";
			goshop.style.background="red";
			goshop.style.color="white";
			goshop.style.cursor="pointer";
			goshop.style.border="none";
			goshop.onclick=function(){
				//open("cart.html");
				var goods=this.parentNode.goods;//把属性存起来做成一个变量
				location.href="cart.html?d="+goods.id;
				//setCookie("gw"+goods.id,JSON.stringify(goods),10);
				//console.log(goods.id)
				var str=getCookie("gw"+goods.id);
				if(str==""){
					goods.num=1;
					setCookie("gw"+goods.id,JSON.stringify(goods),10);
				}else{
					var o = JSON.parse(str);
					o.num=Number(o.num)+1;
					setCookie("gw"+goods.id,JSON.stringify(o),10);
				}
				//var num=1;
				
//				if( "gw"+goods.id == "" ){
//					goods.num=1;
//				}else{
//					goods.num=Number(goods.num)+1;
//				}
				//console.log(str);
	
				
			}	
			var choucang=document.createElement("input");
			li.appendChild(choucang);
			choucang.value="收藏";
			choucang.style.width="80px";
			choucang.style.height="30px";
			choucang.style.textAlign="center";
			choucang.style.background="#e4e4e4";
			choucang.style.color="black";
			choucang.style.cursor="pointer";
			choucang.style.marginLeft="10px";
			choucang.style.border="none";
			
		}
//			var ol=document.createElement("ol");
//			div1.appendChild(ol);
//			var li=document.createElement("li");
//			ol.appendChild(li)
	})
			
			

}
liebiao();









































































