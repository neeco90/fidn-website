function toggleSideMenu(){
    if(!$(".navbar-mobile__sidemenu").hasClass("open")){
        $("body").append("<div id='bkg-opacity'></div>");
        $("body").css("overflow", "hidden");
        $(".navbar-mobile__sidemenu").addClass("open");
    } else {        
        $("#bkg-opacity").remove();
        $("body").css("overflow", "auto");
        $(".navbar-mobile__sidemenu").removeClass("open");
    }
}

function toggleSubmenuMobile(){
    var docencia = $("#docenciaMobile");
    var submenu = $("#submenuMobile");

    if(!submenu.hasClass("open")){
        submenu.addClass("open");
    } else{
        submenu.removeClass("open");
    }
}

function openModal(){
    $('#bkgopacity, #modal').fadeIn();
    $('body').css('overflow', 'hidden');
}

function closeModal(){
    $('#bkgopacity, #modal').fadeOut();
    $('body').css('overflow', 'auto');
}

function showMore(){
    $('.showMore').show();
    $('#showMore').hide();
}

$(document).ready(function(){
    var docencia = $(".navbar__menu #docencia");
    var submenu = $(".navbar__menu #submenu");

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

    if(screen.width <= 450){
        var sticky = new Waypoint.Sticky({
            element: $('.navbar-mobile .row')[0]
        });
    } else{
        var sticky = new Waypoint.Sticky({
            element: $('.navbar .row')[0]
        });
    }
})