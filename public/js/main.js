$(document).ready(function(){
    var docencia = $("#docencia");
    var submenu = $("#submenu");

    docencia.on("mouseover", function(){
        if(!submenu.hasClass("open")){
            submenu.addClass("open");
        } else if(submenu.on("mouseover")){
            submenu.addClass("open");
        } else{
            submenu.removeClass("open");
        }
    });

    submenu.on("mouseenter", function(){
        submenu.addClass("open");
    });

    submenu.on("mouseout", function(){
        submenu.removeClass("open");
    });
})