$(document).mousemove(function(e) {
    $("#follow").css({
      left: e.pageX,
      top: e.pageY
    });
  });


$(document).ready(function(){
    $("img").click(function(event){
        event.preventDefault();
        $(this).attr("src", "assets/images/ballerina-pirouette.png");
        // $(this).attr("src", "assets/images/ballerina-leap.png");
        // $(this).attr("src", "assets/images/ballerina-arabesque.png");
    });    
});