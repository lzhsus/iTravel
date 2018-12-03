$(function(){
    function movedown(){
        var marginTop = 0 ;
        var stop =false;
        var interval = setInterval(function(){
            if(stop) return;
            $('#express').children('li').first().animate({
                    'margin-top':marginTop--},
                0,
                function(){
                    var $first =$(this);
                    if(!$first.is(':animated')){
                        if((-marginTop)>$first.height()){
                            $first.css({'margin-top':0}).appendTo($('#express'));
                            marginTop = 0;
                        }
                    }
                });
        },50);
        $('#express').mouseover(function(){
            stop = true;
        }).mouseout(function(){
            stop = false;
        });
    }
    movedown();
});
