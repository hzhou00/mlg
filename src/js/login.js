
$userName = $("#username"); //用户框
$pwd = $("#pwd");  //密码框
$codes = $("#codes"); //验证码框
$verifyCode = $("#verifyCode"); //验证码
//$userLoginA = $("#userLogin_A"); //登录按键
$code_err = $("#code_err");//提示信息
var userLoginA = document.getElementById("userLogin_A");



//四位验证码
function getMa(){
    var str="0123456789abcdef";
    var subStr="";
    for(var i=0;i<4;i++){
        var random = parseInt(Math.random()*16);
        subStr +=str[random];
        }
    verifyCode.value= subStr;
}


//点击 生成验证码
verifyCode.onclick = function(){
    getMa();
}
//加载时生成
getMa();


//点击登录按键
//$userLoginA.on('click',function(e){
userLoginA.onclick = function(e){
    e.preventDefault();
    //获取value值
    $_userName =$userName.val();
    $_pwd =$pwd.val();
    $_codes= $codes.val();
    $_verifyCode= $verifyCode.val();

    // 清除之前的提示
    $code_err.removeClass('code_err');
    $code_err.html("");
    

    if($_userName !=="" && $_pwd !=="" && $_codes !==""){
        // console.log($_codes);
        // console.log($_verifyCode);
        if ( $_verifyCode == $_codes) {
            

            var uname = $_userName;
            var pwd = $_pwd;
            console.log($_userName,$_pwd);

            var xhr = new XMLHttpRequest();
            
            var status = [200,304];
            xhr.onload = function(){
                if(status.indexOf(xhr.status)!= -1){
                    console.log(xhr.responseText );
                    if(xhr.responseText =="true"){
                        //console.log(666);
                        //cookie                        
                        document.cookie = "uname="+$userName.val()+"; ";
                        location.href ="../html/liebiaoye.html";
                        console.log($userName.val());
                    }else{
                        $code_err.html("您输入的用户名或密码错误，请核对后重新输入！");
                        getMa();
                    }
                }
            }         
            xhr.open("post","../api/login.php",true);
            xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xhr.send("userName="+ $_userName+"&pwd="+$_pwd);     
        }else{
            // $("#code_err").addClass('code_err');
            // $code_err.addClass('code_err');
            $code_err.html("验证码有误，请重新输入");
        }        
    }
     else {
        // $("#code_err").addClass('code_err');
        // $code_err.addClass('code_err');
        $code_err.html("请填写所有信息");
    }

}














