

var ul = document.querySelector("#divGoodsList ul");
var username;

p=new Promise(function(resolve,reject){
        var  xhr = new XMLHttpRequest();
        //console.log(xhr);
        var status =[200,304];
        xhr.onload = function(){
            if(status.indexOf(xhr.status)!=-1){

                var data =JSON.parse(xhr.responseText);
               
                // console.log(mydata);
                resolve(data);
                  
            }
        }
        xhr.open("get","../api/liebiao.php",true);
        xhr.send(null);

        });

	p.then(
            function(data){
                // 渲染页面
                function middleRomance(data){
                    var str = "";
                    str+=data.map(function(item){  
						var {id,img,xianjia,yuanjia,names,xiiaoliang,pingjia} = item;
                     	return `<li data-id="${item.id}" style="border-color: rgb(255, 255, 255);">
							    <a class="pica">
							    	<img src="${item.img}">
							    </a>
							    <div class="price-info">

								    <strong>￥${item.xianjia}</strong>
								    <span class="market-price">价格：
								    <del>${item.yuanjia}</del></span>
								</div>
							    <p>
							        <a class="aLi" title="${item.names}">
							        <font color="red"></font>${item.names}</a>
							    </p>
							    <div class="activeTag"></div>
							    <div class="ass">
							        <span >销量 ${item.xiaoliang}</span>
							        <span>评价 ${item.pingjia}</span></div>
							    <div class="btn" style="display: none;">
							        <input type="button" class="addCar" value="加入购物车">
							        <a href="javascript:void(0);">收藏</a></div>
							</li>`
                    }).join(""); 
                    ul.innerHTML=str;
                    // console.log("xuran");
                    console.log(66);
                }
                middleRomance(data);
                //console.log(middleRomance(data));


                // //hover item
                // function itemHover(){
                //     var piCa=document.querySelectorAll("ul .pica");
                //      //console.log(piCa);

                //     for(let i=0;i<piCa.length;i++){
                //         $currentPica=$(piCa[i]);
                //         // console.log($currentPica);
                //         showSon($currentPica,'current');
                //     }
                // }
                // itemHover();

                //升序降序
                 var paixu = document.querySelector("#paixu");
                // var show = "true";
                // paixu.onclick = function(){
                //     if(show){
                //         data = data.sort(function(a,b){
                //             return a.paixu-b.paixu;
                //         }); 
                //     }else{
                //         data = data.sort(function(a,b){
                //             return b.paixu-a.paixu;
                //         });
                //     }
                //     middleRomance(data);
                //     //skip();
                //     show =!show;
                // }

                paixu.onclick = function(){
                    var  xhr = new XMLHttpRequest();
                    //console.log(xhr);
                    var status =[200,304];
                    xhr.onload = function(){
                        if(status.indexOf(xhr.status)!=-1){

                            var data =JSON.parse(xhr.responseText);
                           
                            // console.log(mydata);
                            //resolve(data);
                              
                        }
                    }
                    xhr.open("get","../api/liebiao.php",true);
                    xhr.send("px");
                    
                    middleRomance(data);

                    console.log(middleRomance(data));
                }

                $(ul).on("click","li",function(){
                    if (username) {
                         location.href="xiangqingye.html?username="
                        
               
                    }else{
                        location.href = "xiangqingye.html?dataid="+$(this).attr("data-id");
                    } 
                })
                   








                

    })







