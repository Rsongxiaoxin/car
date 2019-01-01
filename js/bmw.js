$(function(){
    var $ul=$(".viewport");
    var $items=$(".controls");
    var length=1420;
    var moved=0;
    $ul.css("width",length*9);
    $(".next").click(function(){
        console.log(111);
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*length
            },500,function(){
                if(moved==9){
                    $ul.css("left",0);
                    moved=0;
                }
                $items.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    $(".prev").click(function(){
        if(!$ul.is("animated")){
            if(moved==0){
                moved=3;
                $ul.css("left",-moved*length);
            }
            moved--;
            $ul.animate({
                left:-moved*length
            },500,function(){
                $items.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    });
    timer=setInterval(function () {
        if(!$ul.is(":animated")){
            moved++;
            $ul.animate({
                left:-moved*length
            },500,function(){
                if(moved==3){
                    $ul.css("left",0);
                    moved=0;
                }
                $items.children(":eq("+moved+")").addClass("active").siblings().removeClass("active");
            });
        }
    },5000);
    $items.on("click","a",function () {
        if(!$ul.is(":animated")) {
            var $a = $(this);
            var i = $a.index();
            moved = i;
            $ul.animate({
                left: -moved * length
            }, 500, function () {
                $items.children(":eq(" + moved + ")").addClass("active").siblings().removeClass("active");
            });
        }
    })

})