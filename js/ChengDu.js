$(function () {
    var myPlayer = videojs('video');
    videojs("video").ready(function(){
        var myPlayer = this;
        myPlayer.play();
    });

   $(".play").click(function () {
       $(".bg").css("display","none")
       videojs("video").ready(function(){
           var myPlayer = this;
           myPlayer.play();
       });
   })

    $(".play2").click(function () {
        $(".bg").css("display","none")
        videojs("video").ready(function(){
            var myPlayer = this;
            myPlayer.play();
        });
    })

    var chart;
    $(document).ready(function() {
//折线图示例
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',          //放置图表的容器
                plotBackgroundColor: null,
                plotBorderWidth: null,
                defaultSeriesType: 'line'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {//X轴数据
                categories: ['03-08', '03-09', '03-10', '03-11', '03-12', '03-13', '03-14', '03-15', '03-16', '03-17', '03-18', '03-19','03-20'],
                labels: {
                    rotation: 0, //字体倾斜
                    align: 'right',
                    style: {font: 'normal 13px 宋体'}
                }
            },
            yAxis: {//Y轴显示文字
                title: {
                    text: '都撒到'
                }
            },
            tooltip: {
                enabled: true,
                formatter: function () {
                    return '<b>' + this.x + '</b><br/>' + this.series.name + ': ' + Highcharts.numberFormat(this.y, 1);
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true//是否显示title
                }
            },
            series: [{
                name: '景点1',
                data: [750, 730, 500, 760, 400, 868, 480, 859, 440, 600, 500, 600,700]
            }, {
                name: '景点2',
                data: [1480, 1632, 878, 1500, 1489, 868, 1000, 912, 1500, 1500, 883, 1656,1500]
            }, {
                name: '景点2',
                data: [1592, 1698, 1342, 2296, 2202, 1670, 1662, 1689, 2334, 2359, 1326, 1667,1570]
            }]
        });
    })



        $(".leaderCon-font").addClass("delete");
        $(".leaderCon-ho").click(function () {
            $(".leaderCon-font").addClass("delete");
            $(this).find("a").last().removeClass("delete");
        });

        $(".leaderCon-ho")[0].onclick = function(){
            $(window).scrollTop(400)
        };
        $(".leaderCon-ho")[1].onclick = function(){
            $(window).scrollTop(1100)
        };
        $(".leaderCon-ho")[2].onclick = function(){
            $(window).scrollTop(2000)
        };
        $(".leaderCon-ho")[3].onclick = function(){
            $(window).scrollTop(4200)
        };

    //滚动监听
    document.body.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // 看console出来滚动条的位置进行修改。
        if($(window).scrollTop()>390){
            $(".leaderCon").show();
        }
        if($(window).scrollTop()<390){
            $(".leaderCon").hide();
        }
        console.log(scrollTop);
        if (scrollTop >= 400 && scrollTop < 1000) {
            $(".leaderCon-font").addClass("delete");
            document.getElementsByClassName("leaderCon-font")[0].classList.remove("delete");
        } else if (scrollTop >= 1000 && scrollTop < 1500) {
            $(".leaderCon-font").addClass("delete");
            document.getElementsByClassName("leaderCon-font")[1].classList.remove("delete");
        } else if (scrollTop >= 1500 && scrollTop < 3800) {
            $(".leaderCon-font").addClass("delete");
            document.getElementsByClassName("leaderCon-font")[2].classList.remove("delete");
        } else if (scrollTop >= 3800 && scrollTop < 5000) {
            $(".leaderCon-font").addClass("delete");
            document.getElementsByClassName("leaderCon-font")[3].classList.remove("delete");
        }
    }

    $(".guide").hover(function () {
        $(this).toggleClass("backg")
    })

});