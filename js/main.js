$(document).ready(function(){
    $("#all").on("click", function(){
        $(".html, .css, .js, .jq, .api, .ps, .ai").show();
    });

    $("#html, #css").on("click",function(){
        $(".ps").hide();
        $(".html, .css").show();
    });

    $("#ps").on("click",function(){
        $(".html, .css").hide();
        $(".ps").show();
    });
});