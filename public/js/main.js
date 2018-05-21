$(document).ready(function(){
    var docencia = $("#docencia");
    var submenu = $("#submenu");

    docencia.mouseover(function(){
        submenu.addClass("open");
    });

    docencia.mouseleave(function(){
        submenu.mouseover(function(){
            return
        });
        submenu.removeClass("open");
    });
    
    submenu.mouseleave(function(){
        submenu.removeClass("open");
    });
})