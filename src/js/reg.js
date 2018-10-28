var mobile = document.querySelector("#mobile");  //手机号码
var pwd = document.querySelector("#pwd");       //第一个密码
var surePwd = document.querySelector("#surePwd");  // 确认密码
var codes = document.querySelector("#codes");  //验证码框
var verifyCode = document.querySelector("#verifyCode");//验证码
var mobileBtn = document.querySelector("#mobile_btn"); //注册按键
var mobileErr = document.querySelector("#mobile_err");   //手机号码错误提示
var pwdErr = document.querySelector("#pwd_err");   //第一次密码错误提示
var codeErr = document.querySelector("#code_err");  //验证码错误显示


//验证码
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


mobile.onblur = function(){
       var _mobile = mobile.value;
       if(!/^1[3,4,5,7,8,9]\d{9}$/.test(_mobile)){
          mobileErr.innerHTML = "请输入正确的手机号码";
           mobile.value = "";
          return false;                      
         }else{
            mobileErr.innerHTML = "";
         }
    };
 

mobileBtn.onclick = function(e){
    var _mobile = mobile.value;
    var _pwd = pwd.value; 
    var _pwdErr = pwdErr.value;
    var _codes = codes.value;
    var _verifyCode = verifyCode.value;
    var status = [200,304];
    if(_mobile !=="" && _pwd !=="" && _codes !==""){
        if (_codes == _verifyCode) {  
            e.preventDefault();
            var xhr2 = new XMLHttpRequest();

            // console.log(123);
            // console.log(xhr2);

            xhr2.onload = function(){
                 
                if(status.indexOf(xhr2.status)!=-1){   
                    

                    var res =xhr2.responseText;
                    console.log(typeof res);                 
                    
                    if(res=="true"){
                      mobileErr.innerHTML = "*已被占用";

                    }else if(res=="false"){
                        setTimeout(function(){
                            alert('注册成功，3秒后跳转到登录页');
                            location.href = 'login.html';
                        }, 3000);
                        
                    }


                    if(!/^\d{1,6}$/.test(_pwd)){
                        pwdErr.innerHTML="*密码格式不对"
                    }else{
                        pwdErr.innerHTML=""
                    }                
                    var _surePwd = surePwd.value;
                    var sureErr = document.querySelector("#sure_err");   //第二次密码不对错误提示
                    if(_surePwd!=_pwd){
                        sureErr.innerHTML="*两次输入不一致"
                    }else{
                        sureErr.innerHTML=""
                    }                                      
                }
            } 
            xhr2.open("post","../api/reg.php",true);
            xhr2.setRequestHeader('content-type','application/x-www-form-urlencoded');
            xhr2.send("mobile="+_mobile+"&pwd="+_pwd);  
            console.log(xhr2);

        } else{

            codeErr.innerHTML = "请输入正确的验证码";
            getMa();
        }

    }else{
        codeErr.innerHTML = "请输入所有信息";
    }   
 
}
