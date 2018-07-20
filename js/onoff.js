$(function(){
    var flag = true;
    $("#onoroff").click(function() {
        if(flag){
        var imgname = "images/off.jpeg"
        flag = false;
        }else{
               var imgname = "images/on.jpg"
        flag = true;
        }
        $("img").attr("src",imgname);
    });
    
    /* show hide example */
    
    $("#btnhide").click(function(){
        $("#randomtext").hide();
    });
    
    $("#btnshow").click(function(){
        $("#randomtext").show();
    });

    $("#btntoggle").click(function(){
        $("#randomtext").toggle();
    });

     /*End of show hide example */
    
    $("#fadein").click(function(){
        $("#box").fadeIn();
    });
    $("#fadeout").click(function(){
        $("#box").fadeOut();
    });
    $("#fadetoggle").click(function(){
        $("#box").fadeToggle();
    });
});