$(document).ready(function(){
    // portfolio navs
    $("#all").on("click", function(){
        $(".html, .css, .boot, .js, .ps").show();
    });

    $("#html, #css").on("click",function(){
        $(".ps").hide();
        $(".html, .css").show();
    });

    $("#boot").on("click", function(){
        $(".ps, .html, .css").hide();
        $(".boot").show();
    });

    $("#js").on("click",function(){
        $(".ps, .html, .css").hide();
        $(".js").show();
    });

    $("#ps").on("click",function(){
        $(".html, .css").hide();
        $(".ps").show();
    });

    // date
    function cDate(){
        var year  = new Date().getFullYear();
        return year;
    }
    document.getElementById("cYear").innerHTML = cDate();
});