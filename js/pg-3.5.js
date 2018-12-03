/**
 * Created by lenovo on 2018/8/29.
 */
$(function(){
    $(".day-list").find("li").mouseenter(function(){
        $(".day-list").find("li").removeClass("day-active");
        $(".day-list").find("li").find("div").removeClass("trian-active");
        $(".day-list").find("li").find("a").css("color","#084b6e");
        $(this).addClass("day-active");
        $(this).find("a").css("color","#fff");
        $(this).find("div").addClass("trian-active");
        var index=$(this).index();
        $(".dayplan").stop().fadeOut(500);
        $($(".dayplan")[index]).stop().fadeIn(500);
    })
    $(".playvideo").click(function(){
        $(".video-cover").show();
    })
    $(".video-close").click(function(){
        $(".video-cover").hide();
    })
})