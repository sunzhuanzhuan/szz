var right=document.getElementsByClassName("right")[0];
var inpu1=right.getElementsByTagName("input")[0];
var inpu2=right.getElementsByTagName("input")[1];
var inpu3=right.getElementsByTagName("input")[2];
var inpu4=right.getElementsByTagName("input")[3];
var inpu5=right.getElementsByTagName("input")[4];
var inpu6=right.getElementsByTagName("input")[5];
var a=inpu1.value;
var b=inpu2.value;
var c=inpu3.value;
var d=inpu4.value;
var e=inpu5.value;
var flag=inpu6.checked;
var al=a.length;

inpu1.onfocus=function(){
	inpu1.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="3~30位，由汉子、字母。数字、点、减号、下划线 @ 组成";
}

inpu1.onblur=function(){
	var a =inpu1.value;
	if(a!=""){
		ajax.get("../js/db.json",function(str){
			var o=JSON.parse(str);
			var arr=o.list;
			var l=arr.length;
			 for(var i=0 ;i<l;i++){
			 	console.log(arr[i].username);
			 	//var =arr[i].username;
			 	if( a==arr[i].username ){
			 inpu1.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="用户名已经被占用";
			 inpu1.nextSibling.innerHTML= " ";
			 break;
			 	}else{
			 		inpu1.nextSibling.innerHTML="∨";
			 		inpu1.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="";
			 	}
			 	
			 }
			 
		} )
		
	}else{
		inpu1.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="用户名的长度应为3~30个字符之间（汉子占两个字符）！";
	}
	
}
inpu2.onfocus=function(){
	inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="6~16位，建议使用字母、数字、特殊字符";
}
inpu2.onblur=function(){
	var b=inpu2.value;
	var bl=b.length;
	if(bl>=5){
		inpu2.nextSibling.innerHTML="∨"
	}else{
		inpu2.nextSibling.nextSibling.nextSibling.innerHTML="密码的长度应该为6~16个字符之间";
	}
	
	
}
inpu3.onblur=function(){
	var b=inpu2.value;
	var c=inpu3.value;
	if(b==c ){
		inpu3.nextSibling.innerHTML="∨";
	}else{
		inpu3.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请保持一致";
	}
	
	
}
inpu2.onkeyup=function(){
	var b=inpu2.value;
	//console.log(b);
	var bl=b.length;
	var arr=[false,false,false];
		for(var i= 0;i<bl;i++){
			var char=b.charCodeAt(i);
			if(char>=97 && char <=122){
				arr[0]=true;
				//console.log(arr[0]);
			}
			else if(char>=65 && char <=90){
				arr[1]=true;
			}
			else if(char>=48 && char <=57){
				arr[2]=true;
			}
		}
		//console.log(arr)
		if(arr[0] && arr[1]){
			inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="";
		}
		else if(arr[1] && arr[2] ){
			inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="";
		}
		else if(arr[0] && arr[2]){
			inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="";
		}
		else if(arr[0] ){
			inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="密码过于简单";
		}
		else if(arr[1] ){
			inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="密码过于简单";
		}
		else if(arr[2]){
			inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="密码过于简单";
		}
	
}

var btn2=document.getElementById("btn2");
btn2.onclick=function(){
	var a=inpu1.value;
	var b=inpu2.value;
	var c=inpu3.value;
	var d=inpu4.value;
	var e=inpu5.value;
	if(/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(a)){
		inpu1.nextSibling.innerHTML="∨";
		
	}else{
		inpu2.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="密码的长度应该为6~16个字符之间";
		inpu3.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请输入邮件地址";
		inpu5.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请输入验证码";
	}
	if( /^[0-9A-Za-z]+$/.test(b) ){
		inpu2.nextSibling.innerHTML="∨";
	}else{
		inpu3.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请输入邮件地址";
		inpu5.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请输入验证码";
	}
	if(b==c ){
		inpu3.nextSibling.innerHTML="∨";
	}else{
		inpu3.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请保持一致";
	}
	if(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(d) ){
		inpu4.nextSibling.innerHTML="∨";
	}else{
		inpu4.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请重新输入邮箱";
	}
	if(e==inpu5.nextSibling.innerHTML ){
		
	}else{
		inpu5.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML="请重新输入验证码";
	}
	setCookie("use",a,10);
	setCookie("psw",b,10);
	setCookie("email",d,10);
	if( a!="" && b!="" && c==b && d!="" && flag==true  ){
		open("mianfeizhuce.html");
	}
	
}
//左侧登录；
var left=document.getElementsByClassName("left")[0];
var user34=left.getElementsByTagName("input")[0].value;
var psw34=left.getElementsByTagName("input")[1].value;
var user12=getCookie("use");
var psw12=getCookie("psw");
btn1.onclick=function(){
	console.log(user12);
	console.log(psw12);
	if(user34==user12 && psw34==psw12){
		setCookie("us",user34,10);
		setCookie("ps",psw34,10);
		open("index.html");
	}else{
		alert("用户名和密码不正确");
	}
}
























