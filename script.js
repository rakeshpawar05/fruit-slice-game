var playing = false;
var live = 3;
var score = 0;

$(function () {

$("#start").click(function () { 
    
    if (playing == true) {
        location.reload();
    } else {
        playing = true;
        $("#start").html("Reset");

        $(".lives").css("z-index", 1);
        $("#live").html(live);

        
    }
    
});

});