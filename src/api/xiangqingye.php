<?php 
	$dataid = isset($_POST['dataid'])?$_POST['dataid'] : "";
    //var_dump($px);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'projectku';
    $conn = new mysqli($servername, $username, $password, $dbname);
    // header ( "Content-Type: textml; charset=UTF-8" );

    mysqli_query($conn,"set names UTF8");
    $conn->set_charset('utf-8');

    $sql = "select * from liebiao where id=".$dataid."";
    $result=$conn->query($sql);
    $res=$result->fetch_all(MYSQLI_ASSOC);
    //var_dump($res);
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

 ?>