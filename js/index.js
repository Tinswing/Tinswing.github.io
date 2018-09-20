$(function(){
    //初始化fullpage组件
    // 设置每页的背景颜色
    $(".container").fullpage({ //配置参数
      sectionsColor: ["#fffff", "#8ac060", "#ef674d", "#6c6c6c", "#d04759"], 
      verticalCentered: false, 
      navigation: true,
      navigationPosition:"right", 
      afterLoad: function(anchorLink, index) {
        //每页背景颜色 //处理屏幕内容默认垂直居中，改成顶部对齐 //设置导航指示器
        //回调函数
        //第二页贪吃蛇接口
        if (index == 2) {
          snake(true);
        } else {
          snake(false);
        }
        //第三页照片墙
        if(index == 3){
          $(".thr-photos").css("display","block");
          var $section3 = $(".section").eq(2);
          if (!$section3.hasClass("photo_wall")) {
            $section3.addClass("photo_wall");
          }
        }
      }, 
      keyboardScrolling: false, 
      anchors: ["page1", "page2", "page3", "page4","page5","page6"],  //设置锚点
      // paddingTop:"42px",
      
    });
      // autoScrolling:false
    
});