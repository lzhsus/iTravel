//头部
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
    //$(".header-tit").find("li").hover(
    //    function(){
    //    $(this).addClass("header-active");
    //},
    //    function(){
    //        $(this).removeClass("header-active");
    //        //$(".header-tit").find("li").first().addClass("header-active");
    //    }
    //)
    $(".header-tit").find("li").mouseover(function(){
        $(".header-tit").find("li").removeClass("header-active");
        $(this).addClass("header-active");
    })

    $(".first-ul>li").click(function () {
        $(".first-ul>li").each(function () {
            $(this).removeClass("first-ul-action");
        });

        $(this).addClass("first-ul-action");
    });

    $(".route-ul>li").click(function () {
        $(".route-ul>li").each(function () {
            $(this).removeClass("route-ul-action");
        });

        $(this).addClass("route-ul-action");
    });

    $(".route-ul2>li").click(function () {
        $(".route-ul2>li").each(function () {
            $(this).removeClass("route-ul-action");
        });

        $(this).addClass("route-ul-action");
    });
})