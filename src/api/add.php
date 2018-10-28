<?php 
	$dataid = isset($_POST['dataid'])?$_POST['dataid'] : "";
    $qty = isset($_POST['qty'])?$_POST['qty'] : "";
    $uname = isset($_POST['uname'])?$_POST['uname'] : "";
    //var_dump($uname);
    //var_dump($px);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'projectku';
    $conn = new mysqli($servername, $username, $password, $dbname);
    // header ( "Content-Type: textml; charset=UTF-8" );
    mysqli_query($conn,"set names UTF8");
    $conn->set_charset('utf-8');

    $sql = "select * from add where id='".$dataid."' and qty = '".$qty."'";
    $result=$conn->query($sql);
    //$result=$result->fetch_all(MYSQLI_ASSOC);
    //var_dump($result);
    if($result){
        //更新
        $sql_up = 'update add set qty = "'.$qty.'" where dataid = "'.$dataid.'" and uname= "'.$uname.'"';
        $result_up = $conn->query($sql_up);
        //var_dump($result_up);
    }else{
        //添加
        $sql_add = 'insert into addg(dataid,username,qty) values("'.$dataid.'","'.$username.'","'.$qty.'") ';
        $result_add = $conn->query($sql_add);
        //var_dump($result_add);
        if ($result_add) {
            echo 'true';
        }else{
            echo 'false';
        }
    }
    //$res=$result->fetch_all(MYSQLI_ASSOC);
    //var_dump($res);
    //echo json_encode($res,JSON_UNESCAPED_UNICODE);

 ?>