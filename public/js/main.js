function openSideMenu(){
    if(!$(".navbar-mobile__sidemenu").hasClass("open")){
        $(".navbar-mobile__sidemenu").addClass("open");
    } else {
        $(".navbar-mobile__sidemenu").removeClass("open");
    }
}

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

    var sticky = new Waypoint.Sticky({
        element: $('.navbar .row')[0]
    })
})