<?php
    $px = isset($_GET['px'])?$_GET['px'] : "null";
    $currentpage = isset($_POST['currentpage'])?$_POST['currentpage']:1;
    
    //var_dump($px);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'projectku';
    $conn = new mysqli($servername, $username, $password, $dbname);
    // header ( "Content-Type: textml; charset=UTF-8" );

    mysqli_query($conn,"set names UTF8");
    $conn->set_charset('utf-8');

    if($px=="null"){
        $sql='select * from liebiao ';        
    }else if($px =="px"){
        $sql='select * from liebiao ORDER BY xianjia desc';        
    }

    $result=$conn->query($sql);
    $res=$result->fetch_all(MYSQLI_ASSOC);

    $total = count($res);
    $res = array_slice($res,($currentpage-1)*9,9);
    $obj = array(
        'res'=>$res,
        'total'=>$total
    );


    echo json_encode($res,JSON_UNESCAPED_UNICODE);
        
    $result->close();
    $conn->close();


?>