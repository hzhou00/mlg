<?php
	//登录

	$userName = isset($_POST['userName'])?$_POST['userName']:"";	 
	$pwd = isset($_POST['pwd'])?$_POST['pwd']:"";
	//主机名
	$servername = "localhost";
	//用户名
	$username = "root";
	//密码
	$password = "";
	//数据库名
	$dbname = "projectku";


	//1.创建连接(主机名，用户名，密码，数据库名)
	$conn = new mysqli($servername,$username,$password,$dbname);
	//2.测试连接
	if($conn->connect_errno){
		die("连接失败:".$conn->connect_error);
	}
	//查询前设置编码（utf8）
	$conn->set_charset('utf8');

	$result = $conn->query('select * from login');
	$res = $result->fetch_all(MYSQLI_ASSOC);

    foreach($res as $item){
    	
    	if($item['username']==$userName ){   		
    		echo $item['password']==$pwd ?"true":"false";
    		break;
    	}
    }
    $result->close();
    $conn->close();

?>