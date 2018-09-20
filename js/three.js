$(function(){
    var $lis = $(".thr-photos>li"),
      $wallImg = $(".thr-photos>li>img"),
      $big = $(".thr-big-photo"),
      $box = $(".thr-photobox"),
      $phs = $(".thr-photobox>.thr-photos");
    var srcs = [],
        Time = [];
    var indate = 0,
        outdate = 0,
        enter = false,
        leave = true;
       
    var $goods = $(".shop-cart>.goods");
    $goods.on("click",function(){
        $(this).css("background-image","none").children(".price").text("");
    });
     //刷新图片路径数组
    function resrcs(){
        for (var i = 0; i < $lis.length; i++) {
          srcs[i] = $wallImg.eq(i).attr("src");
        }
    }
    resrcs();

    $big.on("click",function(){
        $big.stop().fadeOut(200);
    }); //大图点击消失
    
    //轮播图移入移出
    $phs.on("mouseenter",function(){
        // if(leave){
            var da = new Date().getTime();
            if (da - indate > 1000) {
              resrcs();
              for(let i = 0; i < Time.length; i++){
                window.clearInterval(Time[i]);
              }
              Time.length = 0;
            }
            indate = da;
            enter = true;
            leave = false;
        // }
    });

    $box.on("mouseleave", function() {
        if(enter){
            var da = new Date().getTime();
            if (da - outdate > 1000 && !($(".thr-big-photo").css("display") == "block")) {
              changeWall();
              var a = setInterval(changeWall, 3000);
              Time.push(a);
            }
            outdate = da;
            leave = true;
            enter = false;
        }
    });

    //照片墙轮播函数
    function changeWall(){
        for(var i = 0,len = $wallImg.length; i < len; i++){
            if(!(i == 4)){
                $wallImg.eq(i).fadeOut(600);
            setTimeout((function(i){
                var a = i;
                function wall() {
                    switch (a) {
                        case 0:
                            $wallImg.eq(a).attr("src", srcs[(i + 1) % len]);
                            break;
                        case 1:
                            $wallImg.eq(a).attr("src", srcs[(i + 1) % len]);
                            break;
                        case 2:
                            $wallImg.eq(a).attr("src", srcs[(i + 3) % len]);
                            break;
                        case 3:
                            $wallImg.eq(a).attr("src", srcs[(i -3) % len]);
                            break;
                        case 4:
                            break;
                        case 5:
                            $wallImg.eq(a).attr("src", srcs[(i + 3) % len]);
                            break;
                        case 6:
                            $wallImg.eq(a).attr("src", srcs[(i - 3) % len]);
                            break;
                        case 7:
                            $wallImg.eq(a).attr("src", srcs[(i - 1) % len]);
                            break;
                        case 8:
                            $wallImg.eq(a).attr("src", srcs[(i - 1) % len]);
                            break;
                    }
                    $wallImg.eq(a).fadeIn(400);
                }
                return wall;
            }(i)), 600);
            }
        }
        resrcs();
    }
    Time.push(setInterval(changeWall, 2000));
    
    //单击函数
    // function liclick2(){
    //     var index = $(this).index();
    //     $big.children("img").attr('src',("images/big" + srcs[index].substr(9,1) + ".jpg"));
    //     // console.log(srcs[index].substr(9, 1));
    //     $big.stop().fadeIn(600);
    // }
    // $lis.on("click", liclick2);  //单击li图片放大   按下时添加单击事件


    //鼠标单击放大图片
    function liclick() {
      var img = this.getElementsByTagName("img")[0];
      var src = img.getAttribute("src");
      var index = src.substr(9, 1);
      $big.children("img").attr("src", "images/big" + index + ".jpg");
      $big.stop().fadeIn(600);
    }

    //重写单击处理事件函数
    
    var lis = [];   //取出jQ对象存到数组中
    for(let i = 0; i < $lis.length; i++){
        lis[i] = $lis[i];
        //绑定单击放大图片
        // lis[i].onclick = liclick;
        //绑定拖拽
        lis[i].onmousedown = (function(){
            var x = i;
            var dragkey = 0;
            var drags = function(e) {
                    var e = e || window.event; //兼容ie浏览器  
                    // e.stopPropagation();
                    dragkey = 1;
                    this.onclick = liclick;
                    var initLeft = window.getComputedStyle(this, null)["left"],
                      initTop = window.getComputedStyle(this, null)["top"];

                    var diffX = e.clientX - this.offsetLeft; //鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离  
                    var diffY = e.clientY - this.offsetTop;

                    if (typeof this.setCapture != 'undefined') {
                        this.setCapture();
                    }

                    this.onmousemove = function (e) {
                        dragkey = 2;
                        this.onclick = null;
                        var e = e || window.event; //兼容ie浏览器
                        var left = e.clientX - diffX;
                        var top = e.clientY - diffY;

                        //移动时重新得到物体的距离，解决拖动时出现晃动的现象  
                        this.style.left = left + 'px';
                        this.style.top = top + 'px';
                        this.style.zIndex = 100;
                    };
                    //鼠标抬起判断购物车
                    document.onmouseup = function (e) { //当鼠标弹起来的时候不再移动
                        lis[x].onmousemove = null;
                        lis[x].onmouseup = null; //预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）  
                        
                        console.log(dragkey);
                        if(dragkey == 2){
                            var booX = parseInt(window.getComputedStyle(lis[x], null)["left"]),
                              booY = parseInt(window.getComputedStyle(lis[x], null)["top"]);
                            //   console.log(booX + "booXY" + booY);
                            if (730 < booX && booX  < 1200) {
                              if (-150 < booY && booY < 500) {
                                for(var i = 0,$len = $goods.length; i < $len; i++){
                                    if(($goods.eq(i).css("backgroundImage")) == "none"){
                                        var index = $lis.eq(x).children("img").eq(0).attr("src").substr(9,1);
                                        $goods.eq(i).css("background-image","url(images/cart-bg" + index + ".jpg)")
                                                .children(".price").text("￥" + window.shareinfo.price[index-1] + "万");
                                        break;
                                    }else if(i == $len-1){
                                        console.log("满了");
                                    }
                                }
                              }
                            }
                        }
                        lis[x].style.left = initLeft;
                        lis[x].style.top = initTop;
                        lis[x].style.zIndex = 10;
                        dragkey = 3;
                    };
                };
            return drags;
        }());
    }

});