            //页面加载完毕执行
            window.onload = function(){
                //获取所有标签对象
                var oAd =  document.getElementById("ad");
                var oImgs = document.getElementById("imgs");
                var oLeft = document.getElementById("left");
                var oRight = document.getElementById("right");
                var oAdliArr =  document.getElementsByName("adli");
                //记录图片
                var num = 1;
                oAdliArr[0].style.backgroundColor = "#7f1083";
                //启动定时器
                var timer = setInterval(run1,2500);
                function run1(){
                    num++;
                    accoord()
                }
                function accoord(){
                    //边界判断
                    if(num==5){
                        num = 1;
                    }
                    else if(num==0){
                        num = 4;
                    }
                    //切换图片
                    oImgs.src ="images/adpic/"+num+".png";
                    //重置所有圆点的颜色为灰色
                    for(var i = 0 ;i < oAdliArr.length; i++){
                        oAdliArr[i].style.backgroundColor = "gray";   
                    }
                    //将目前所选中的圆点设置为红色
                    oAdliArr[num-1].style.backgroundColor = "#7f1083";
                }
                //鼠标移入窗口停止滚动
                oAd.addEventListener("mouseover",stopFunc,false);
                function stopFunc(){
                    clearInterval(timer);
                    oLeft.style.display = "block";
                    oRight.style.display = "block";

                }
                //鼠标移出启动自动 滚动
                oAd.addEventListener("mouseout",startFunc,false);
                function startFunc(){
                    timer = setInterval(run1,2500);
                    oLeft.style.display = "none";
                    oRight.style.display = "none";
                }
                //鼠标移入左右按钮
                oLeft.addEventListener("mouseover",pageFunc,false);
                oRight.addEventListener("mouseover",pageFunc,false);
                function pageFunc(){
                    clearInterval(timer);
                    this.style.backgroundColor = "rgba(0,0,0,0.6)";
                }
                //鼠标移出左右 按钮
                oLeft.addEventListener("mouseout",noPageFunc,false);
                oRight.addEventListener("mouseout",noPageFunc,false);
                function noPageFunc(){
                    this.style.backgroundColor = "rgba(0,0,0,0.2)";
                }
                //鼠标单击左按钮切换图片
                oLeft.addEventListener("click",function(){
                    num--;
                    accoord();
                },false);
                //鼠标单击右按钮切换图片
                oRight.addEventListener("click",function(){
                    num++;
                    accoord();
                },false);
                //鼠标移动圆点切换图片
                for(var i = 0;i < oAdliArr.length;i++){
                    oAdliArr[i].index = i + 1;
                    oAdliArr[i].addEventListener("mouseover",function(){
                        clearInterval(timer);
                        num = this.index;
                        accoord();
                    },false);
                }
            }