<?php
	//注册代码

	$mobile=isset($_POST["mobile"])?$_POST["mobile"]:"";
	$pwd = isset($_POST["pwd"])?$_POST["pwd"]: "";

	// var_dump($mobile);
 	// var_dump($pwd);

	//主机名
	$servername = "localhost";
	//用户名""
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

	$sql = "select username from login";
    
    $result = $conn->query($sql);
    $res = $result->fetch_all(MYSQLI_ASSOC);
   
   
   $res = array_column($res,"username");//获取数组

   if(in_array($mobile, $res)){
   		echo 'true';
   }else{
   		$sql = 'insert into login (id,username,password) values (id,"'.$mobile.'",'.$pwd.')';
   		$res_psw = $conn->query($sql);

   		echo 'false';
   		
   }
    $result->close();
    $conn->close();

?>