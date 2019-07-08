$(document).ready(function(){
    // portfolio navs
    $("#all").on("click", function(){
        $(".html, .css, .boot, .js, .ps, .ai").show();
    });

    $("#html, #css").on("click",function(){
        $(".ps, .ai").hide();
        $(".html, .css").show();
    });

    $("#boot").on("click", function(){
        $(".ps, .html, .css, .ai").hide();
        $(".boot").show();
    });

    $("#js").on("click",function(){
        $(".ps, .html, .css, .ai").hide();
        $(".js").show();
    });

    $("#ps").on("click",function(){
        $(".html, .css, .js, .ai").hide();
        $(".ps").show();
    });

    $("#ai").on("click",function(){
        $(".html, .css, .js, .boot, .ps").hide();
        $(".ai").show();
    });

    // date
    function cDate(){
        var year  = new Date().getFullYear();
        return year;
    }
    document.getElementById("cYear").innerHTML = cDate();
});