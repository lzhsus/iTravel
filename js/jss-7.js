/**
 * Created by xuerui on 2018/9/2.
 */

$(function () {
    //视频显示
    $("#section2-cn-on").click(function () {
        $(".section2-hd").show();
    });
    //视频隐藏
    $("#section2-hd-header-off").click(function () {
        $(".section2-hd").hide();
    });
    //点击切换  早餐 房型
    $(".section3-seperate-s>ul").find("li").click(function () {
        $(this).children().first().toggle();
        if ($(this).attr("id") != "section3-checked") {
            $(this).attr("id", "section3-checked");
        } else {
            $(this).attr("id", "");
        }
    })
    //可优惠劵，床型，支付类型下拉菜单显示隐藏
    $(".tanslate1").click(function (event) {
        $(".tanslate1").not($(this)).next().hide();
        $(this).next().toggle();
        // event.stopPropagation();
    });
    //优惠劵下拉菜单列表选中1
    $(".section3-seperate-list1").find("li").mouseover(function () {
        $(".section3-seperate-list1").find("li").removeClass("section3-active1");
        $(this).addClass("section3-active1");
        // event.stopPropagation();
    });
    //床型下拉菜单列表选中2
    $(".section3-seperate-list2").find("li").mouseover(function () {
        $(".section3-seperate-list2").find("li").removeClass("section3-active2");
        $(this).addClass("section3-active2");
        // event.stopPropagation();
    });
    //支付类型下拉菜单列表选中3
    $(".section3-seperate-list3").find("li").mouseover(function () {
        $(".section3-seperate-list3").find("li").removeClass("section3-active3");
        $(this).addClass("section3-active3");
        // event.stopPropagation();
    });



    // $(document).click(function () {
    //     $(".section3-seperate-list1").find("li").hide();
    //     $(".section3-seperate-list2").find("li").hide();
    //     $(".section3-seperate-list3").find("li").removeClass("section3-active3");


    // });



    //选项卡房型列表切换
    // $(".section3-title>a").click(function () {
    //     $(".section3-title").find("a").removeClass("tr-activer");
    //     $(this).addClass("tr-activer");
    // });
    // 三角切换1
    $(".tanslate1").click(function (event) {
        if ($(this).find("div").hasClass("up")) {
            $(this).find("div").removeClass("up");
            $(this).find("div").addClass("down");
        } else if ($(this).find("div").hasClass("down")) {
            $(this).find("div").removeClass("down");
            $(this).find("div").addClass("up");

        }
        event.stopPropagation();

    });

    $(document).click(function () {
        $(".tanslate1").find("div").removeClass("up");
        $(".tanslate1").find("div").addClass("down");
        $(".tanslate1").next().hide();


    });



    //展开全部房型
    $("#section3-list-content-right-on").click(function () {
        if ($(this).find("div")[0].style.transform == "rotate(270deg)") {
            $(this).find("span").text("展开全部房型");
            $(this).find("div")[0].style.transform = "rotate(90deg)";
            $(".section3-list-content-right-list6").hide();
            $(".section3-list-content-right-list7").hide();
            console.log($(this).find("div")[0].style.transform);
        } else {
            $(".section3-list-content-right-list6").show();
            $(".section3-list-content-right-list7").show();
            $(this).find("span").text("收起");
            $(this).find("div")[0].style.transform = "rotate(270deg)";
        }
    });

    //点击查看图片详情
    $(".section3-list-content-cn-p").click(function () {
        $(".section3-list-content-block").show();
    });
    //点击关闭查图片详情
    $(".section3-list-content-block3").click(function () {
        $(".section3-list-content-block").hide();
    });
    //显示房型
    $(".section3-list-content-block2-list").find("li").click(function () {
        $(".section3-list-content-block1").find("img").css("display", "none");
        var index = $(this).index();
        $($(".section3-list-content-block1").find("img")[index]).show();

        console.log($(this).parent().parent().prev().children())

    })
    //切换选项
    $(".section3-seperate-list2").find("li").click(function () {
        var con = $(this).html();
        $(".section3-seperate-l2").find("span").html(con);
        $(".section3-seperate-list2").hide();
        $(".section3-seperate-l2").find("div").addClass("down");
    })
    $(".section3-seperate-list3").find("li").click(function () {
        var con = $(this).html();
        $(".section3-seperate-l3").find("span").html(con);
        $(".section3-seperate-list2").hide();
        $(".section3-seperate-l3").find("div").addClass("down");
    })

    //小图鼠标移入出现文字
    $(".smallpic-hover").find("li").hover(
        function () {
            // console.log(1);
            $(this).find("img").addClass("smallpic-active");
            $(this).find("div").show();
        },
        function () {
            $(this).find("img").removeClass("smallpic-active");
            $(this).find("div").hide();
        }
    )



    // $(".section3-list-content-block2-list>li:eq(0)").hover(function () {
    //     $(".section3-list-content-block4").stop().show("normal");
    //     $(".block2-list-img1").css("border", "3px solid #1ab2db");
    //     $(this).css("cursor", "pointer");
    // }, function () {
    //     $(".section3-list-content-block4").stop().hide("normal");
    // })

    // $(".section3-list-content-block2-list>li:eq(1)").hover(function () {
    //     $(".section3-list-content-block5").stop().show("normal");
    //     $(".block2-list-img2").css("border", "3px solid #1ab2db");
    //     $(this).css("cursor", "pointer");
    // }, function () {
    //     $(".section3-list-content-block5").stop().hide("normal");
    // })

    // $(".section3-list-content-block2-list>li:eq(2)").hover(function () {
    //     $(".section3-list-content-block6").stop().show("normal");
    //     $(".block2-list-img3").css("border", "3px solid #1ab2db");
    //     $(this).css("cursor", "pointer");
    // }, function () {
    //     $(".section3-list-content-block6").stop().hide("normal");
    // })







})