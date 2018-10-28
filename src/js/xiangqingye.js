

var dataid = location.href.split("=")[1];
console.log(dataid);
var datas;


$.ajaxSettings.async = false;
$.post("../api/xiangqingye.php",{dataid:dataid}, function(res){
		
	res = $.parseJSON(res)[0];
	datas = res;
	console.log(datas);
	$("#SGoodsPrice").html(res.xianjia);
	$("#yuanjia").html(res.yuanjia);
	$("#img").attr("src",res.img);
	$("#names").html(res.names);
	
})

console.log(datas);
//点击添加到购物车
$("#buyA").on("click",function(){
	$.post("../api/add.php",{dataid:dataid,qty:$("#Amount").val(),uname:document.cookie.split("=")[1]}, function(res){
			location.href = "../html/cart.html?dataid="+dataid;
		})
	var now = new Date();
    var res = now.setDate(now.getDate()+3);
	document.cookie = "dataid="+JSON.stringify(dataid)+';expires=' + now.toUTCString();
})

//加减
// $("#jian").on("click",function(){
// 	if ($("#Amount").val()>1) {
// 		$("#Amount").val($("#Amount").val()-1);
// 	}
// })
// $("#jia").on("click",function(){
// 	$("#Amount").val(Number($("#Amount").val())+1);
// })




