var center=document.getElementsByClassName("center")[0];
var ul=center.getElementsByTagName("ul")[0];
var str=document.cookie;
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
	ul.appendChild(li);
	var span1=document.createElement("span");
	span1.innerHTML=obj.id;
	li.appendChild(span1);
	var span2=document.createElement("span");
	span2.innerHTML=obj.content;
	span2.style.width="480px";
	li.appendChild(span2);	
	var span3=document.createElement("span");
	span3.innerHTML="q4r5";
	span3.style.paddingRight="28px";
	li.appendChild(span3);
	var span4=document.createElement("span");
	span4.innerHTML="￥434";
	span4.style.paddingRight="20px";
	li.appendChild(span4);
	var span5=document.createElement("span");
	span5.innerHTML=obj.price;
	span5.style.paddingRight="30px";
	li.appendChild(span5);
	var input6=document.createElement("input");
	input6.value=obj.num;
	input6.style.width="30px";
	
	//input6.o=o;
	input6.style.height="20px";
	input6.style.paddingRight="8px";
	li.appendChild(input6);
	var span7=document.createElement("span");
	span7.innerHTML=input6.value*obj.price;
	span7.style.width="30px";
	span7.style.height="20px";
	span7.style.paddingRight="40px";
	span7.style.textAlign="center";
	li.appendChild(span7);
	var span8=document.createElement("span");
	span8.innerHTML="<a href='index.html'>转入收藏夹"+"</a>";
	span8.style.width="30px";
	span8.style.height="20px";
	span8.style.paddingRight="20px";
	li.appendChild(span8);
	var btn9=document.createElement("input");
	btn9.value="删除";
	btn9.type="button";
	li.appendChild(btn9);
		btn9.onclick=function(){
			price=this.previousSibling.previousSibling.innerHTML;
			//console.log(price);
			sum =sum-price;
			h4.innerHTML = "总价为："+sum+"元";
			var goods=this.parentNode.o;
			setCookie("gw"+goods.id,JSON.stringify(obj),-1);
			ul.removeChild(this.parentNode);
			
		}

		input6.onblur=function(){
			var goods= this.parentNode.o;
			this.nextSibling.innerHTML = Number(this.value)*goods.price;
			var price1=this.nextSibling.innerHTML;
			//console.log(price1);
//			var n = Number(price1)-goods.price;
//			sum=sum+n
//			h4.innerHTML = "总价为："+sum;
			fn1();
		}
	
	brr.push(span7);
	}
	
	
}
var sum=0

for(var i=0;i<m;i++){
	var tmp=brr[i].innerHTML;
	sum+=Number(tmp);
}
//console.log(sum);

h4.innerHTML = "总价为："+sum+"元";

function fn1(){
	var sum1=0;
	for(var i=0 ;i<m;i++){
		var tmp1=brr[i].innerHTML;
		//console.log(tmp1);
		sum1+=Number(tmp1);
	}
	
	h4.innerHTML = "总价为："+sum1+"元";
	
}
in3.onclick=function(){
	//console.log("l"+","+l);
	//console.log(arr);
	for( var i=0; i<l; i++ ){
		var col = arr[i].split("=");
		
		if( /^gw\d+$/.test(col[0]) ){
			var obj = JSON.parse(decodeURIComponent(col[1]));
			setCookie("gw"+obj.id,"",-1);
			//console.log(obj.id)
			var delUl = this.parentNode.previousSibling.previousSibling.previousSibling.previousSibling
			center.remove(delUl);
		}

	}
	
}


























































