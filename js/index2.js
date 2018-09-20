// 加载完成 延时1秒播放视屏
// window.onload = function(){
//     setTimeout(function(){
//         document.getElementById("media").play();
//     },2000);
// }

//第一屏的视屏播放器控件
$(function(){
    var player = document.getElementsByClassName("play")[0],
        video = document.getElementById("media"),
        $videobox = $(".one-wrap>.video");
    $(".play").on("click", (function(){
        var count = 0;
        function play(){
            console.log(count);
            if(count % 2 == 1){
                video.pause();
                player.className = "";
                player.classList.add("play","play-bg1");
            }else{
                video.play();
                player.className="";
                player.classList.add("play", "play-bg2");
            }
            count++;
        }
        return play;
    }()));
    
    $videobox.on("mouseover", function(){
        $(player).stop().fadeIn(100);
    });
    $videobox.on("mouseout", function(){
        $(player).stop().fadeOut(500);
    });
});

//导航栏的js文件
$(function(){
    var $li = $(".top-content>li"),
      $list = $(".top-content>li>.nav-list");

    $li.on("mouseenter",function(e){
        // e.stopPropagation();
        var num = $(this).index();
        $list.eq(num).stop().slideDown(400);
        return false;
    });
    $li.on("mouseleave", function(e) {
        var num = $(this).index();
        $list.eq(num).stop().slideUp(200);
        return false;
    });
    
});