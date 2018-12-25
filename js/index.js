$(function() {
	// 侧边
    $(".focus").mousemove(function () {
        $(".n1").show();
    }).mouseout(function () {
        $(".n1").hide();
    })
    $(".phone").mousemove(function () {
        $(".n2").show();
    }).mouseout(function () {
        $(".n2").hide();
    })

	//手风琴动画效果

    var _index7=0;
    $(".flash4 ul li").mouseover(function(){
        _index7=$(this).index();
        $(this).stop().stop().animate({width:538},500).siblings("li").stop().animate({width:106},500);
        $(".imgCen").eq(_index7).css("display","block").siblings(".imgCen").css("display","none");
        $("p.bt_2").eq(_index7).css("display","block").siblings("p.bt_2").css("display","none");
        $(".imgTop img").eq(_index7).addClass("tm").siblings(".imgTop img").removeClass("tm");
    });
    $(".flash4 ul li").mouseout(function(){
        $(".imgCen").css("display","none");
        $("p.bt_2").css("display","none");
    });
    

    


    $(".d2").mouseenter(function () {
        $(".d2").removeClass("d2").addClass("c2"),
        $(".d3").removeClass("d3").addClass("c3")
    });


    $("#d3").mouseleave(function () {
        $("#d2").removeClass("c2").addClass("d2"),
        $("#d3").removeClass("c3").addClass("d3")
    });




    // 中间小图
    var lis=document.querySelectorAll("#flashshopping ul li");
    var ul=document.querySelector("#flashshopping ul");
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            var bg=this.className;
            ul.style.cssText="background: url("+bg+")";
        }
    }



});

