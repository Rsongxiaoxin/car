$(function(){
    //下来菜单
    $("nav>.main>li:nth-child(2)").mouseenter(function(){
        $("#m1").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m1").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:nth-child(3)").mouseenter(function(){
        $("#m2").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m2").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:nth-child(4)").mouseenter(function(){
        $("#m3").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m3").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:nth-child(5)").mouseenter(function(){
        $("#m4").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m4").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:nth-child(6)").mouseenter(function(){
        $("#m5").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m5").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:nth-child(7)").mouseenter(function(){
        $("#m6").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m6").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:nth-child(8)").mouseenter(function(){
        $("#m7").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m7").removeClass("show").addClass("drop")
    })

    $("nav>.main>li:last-child").mouseenter(function(){
        $("#m8").removeClass("drop").addClass("show")
    }).mouseleave(function(){
        $("#m8").removeClass("show").addClass("drop")
    })
   
});