<?php
header('Access-Control-Allow-Origin')//允许外部访问	
//创建数据库
$servername="localhost";
$username="root";
$password="12345678";
$dbname="userlist";
$conn=new mysql($servername,$username,$password,$dbname);

//解决中文编码的问题
//设置编码字符
$sql="SET CHARACTER SET 'UTF8'";
$conn->query($sql);
$sql = "SET NAMES 'UTF8'";
$conn->query($sql);


















?>