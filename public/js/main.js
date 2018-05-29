/* function checkSize(){
    //Si es vista mobile
    if ($(".ph-show").css("display") == "block" ){
    }

    //Si es vista tablet
    if ($(".mb-show").css("display") == "block" && $(".ph-show").css("display") == "none"){
    }
} */

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

    /* // run test on initial page load
    checkSize();
    
    // run test on resize of the window
    $(window).resize(checkSize);

    //Si es vista desktop
    if ($(".ph-show").css("display") == "none" && $(".mb-show").css("display") == "none"){
    } */

    var sticky = new Waypoint.Sticky({
        element: $('.navbar .row')[0]
    })
})