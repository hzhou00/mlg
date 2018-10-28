
var dataid = location.href.split("=")[1];
console.log(dataid);


$.ajaxSettings.async = false;
$.post("../api/xiangqingye.php",{dataid:dataid}, function(res){
		
	res = $.parseJSON(res)[0];
	datas = res;
	console.log(datas);
	$("#xianjia").html(res.xianjia);
	$("#yuanjia").html(res.yuanjia);
	$("#img").attr("src",res.img);
	$("#names").html(res.names);
	$("#btn_cha").attr("value",res.qty);
	$("#xiaoji").html(res.xianjia*$("#btn_cha").val());
	$("#zongjia").html(res.xianjia*$("#btn_cha").val());

	//加减
	$("#jian").on("click",function(){
		if ($("#btn_cha").val()>1) {
			$("#btn_cha").val($("#btn_cha").val()-1);
			$("#xiaoji").html(res.xianjia * $("#btn_cha").val());
			$("#zongjia").html(res.xianjia*$("#btn_cha").val());
		}		
	})

	$("#jia").on("click",function(){
		$("#btn_cha").val(Number($("#btn_cha").val())+1);
		$("#xiaoji").html(res.xianjia*$("#btn_cha").val());

		$("#zongjia").html(res.xianjia*$("#btn_cha").val());		
	})

	
	//删除
	  $("tbody").on("click","#del",function(){
	  	$("#del").parent().parent().html("");
	  	$("#zongjia").html("");
	  })

	  $("#Submit1").on("click",function(){
	  	$("tbody").html("");
	  	$("#zongjia").html("");
	  })

	


	
	
})





































// $('document').ready(()=>{


// 	var $uname;
// 	if (document.cookie) {
// 		$uname = document.cookie.split('=')[1];
// 	}
// 	if (location.href.includes('?uname=')) {
// 		console.log(location.href.split('?')[1].split('=')[1]);
//     	$uname = location.href.split('?')[1].split('=')[1];
//     	//console.log(location.href.split('?')[1].split('=')[2]);
//     	$('.customName').parent().css('background','none');
//     	$('.customName a')[0].innerHTML = $uname;
    	
//     }else{
//     }

//     $.ajaxSettings.async = false;
// 	//var dataid = location.href.split("=")[1];

// 	$.post("../api/add.php",{uname:$uname}, function(res){
// 			console.log(res);
// 		if (typeof res=='string'&&res!=''){
//     		JSON.parse(res).forEach(function(item,idx){
// 				$("#img").html(item.img);
// 				$("#xianjia").html(item.xianjia);
// 				$("#btn_cha").html(item.qty);
// 				$("#names").html(item.names);
//     		})
//     	}
		
		
		
// 	})

// })






















