$(function () {
    //头部轮播图
    var mySwiper = new Swiper('.swiper-container', {

        //自动滑动
        autoplay: true,

        // 分页器
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        //点击切换
        loop:true,
    });

    //头部按钮隐藏
    $(".triangle_border_down").click(function () {
        $(".hotel-hidden").toggle()
    });

    //头部左nav样式
    $(".leftNav>ul>li").click(function () {
        $(".leftNav>ul>li").each(function () {
            $(this).find(".zj").css("display","none")
            $(this).find(".fj").css("color","#fff")
            $(this).removeClass("header-form-action");
        });
        $(this).find(".fj").css("color","#1ab2db")
        $(this).find(".zj").css("display","block")
        $(this).addClass("header-form-action");
    });

    //头部右标题样式
    $(".header-form-right-title>ul>li").click(function () {
        $(".header-form-right-title>ul>li").each(function () {
            $(this).removeClass("header-smallTitle");
        });
        $(this).addClass("header-smallTitle");
    });

    $(".header-form-right-title2>ul>li").click(function () {
        $(".header-form-right-title2>ul>li").each(function () {
            $(this).removeClass("header-smallTitle2");
        });
        $(this).addClass("header-smallTitle2");
    });

    $(".header-form-right-title3>ul>li").click(function () {
        $(".header-form-right-title3>ul>li").each(function () {
            $(this).removeClass("header-smallTitle3");
        });
        $(this).addClass("header-smallTitle3");
    });

    var obj_lis = document.getElementsByClassName("hotel-hidden-li");
    for(i=0;i<obj_lis.length;i++) {
        obj_lis[i].onclick = function () {
            var val = this.innerHTML
            $(".hotel").val(val)
        }
    }

})