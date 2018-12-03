$(function () {
    $(".leaderCon-font").addClass("delete");
    $(".leaderCon-ho").click(function () {
        $(".leaderCon-font").addClass("delete");
        $(this).find("a").last().removeClass("delete");
    })
})
document.body.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    if (scrollTop >= 360 && scrollTop < 1000) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[0].classList.remove("delete");
    } else if (scrollTop >= 1000 && scrollTop < 1800) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[1].classList.remove("delete");
    } else if (scrollTop >= 1800 && scrollTop < 2420) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[2].classList.remove("delete");
    } else if (scrollTop >= 2420 && scrollTop < 3170) {
        $(".leaderCon-font").addClass("delete");
        document.getElementsByClassName("leaderCon-font")[3].classList.remove("delete");
    }
}