$(document).ready(function(){
'use strict';
$("#mini-blanco").click(function(){
    $("#big-image").fadeOut(400,function(){
        ($("#big-image").attr("src", "img/Blanco.png"));

    }).fadeIn(400);
    
});
$("#mini-cafe").click(function(){
    $("#big-image").fadeOut(400,function(){
        ($("#big-image").attr("src", "img/Café.png"));

    }).fadeIn(400);
    
});
$("#mini-gris").click(function(){
    $("#big-image").fadeOut(400,function(){
        ($("#big-image").attr("src", "img/Gris.png"));

    }).fadeIn(400);
    
});
$("#mini-negro").click(function(){
    $("#big-image").fadeOut(400,function(){
        ($("#big-image").attr("src", "img/Negro.png"));

    }).fadeIn(400);
    
});



});