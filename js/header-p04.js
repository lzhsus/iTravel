/**
 * Created by lenovo on 2018/8/27.
 */
$(function(){
    $(".header-phone").hover(
        function(){
            $(".phone-hover").stop().show(500);
        },
        function(){
            $(".phone-hover").stop().hide(500);
        }
    )
    $(".header-wechat").hover(
        function(){
            $(".wechat-hover").stop().show(500);
        },
        function(){
            $(".wechat-hover").stop().hide(500);
        }
    )
    $(".header-tit").find("li").mouseover(function(){
        $(".header-tit").find("li").removeClass("header-active");
        $(this).addClass("header-active");
    })
})