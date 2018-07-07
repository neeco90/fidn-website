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
}/* 

function toggleSubmenuMobile(){
    var docencia = $("#docenciaMobile");
    var submenu = $(".submenuMobile");

    if(!submenu.hasClass("open")){
        submenu.addClass("open");
    } else{
        submenu.removeClass("open");
    }
} */

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

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function notEmpty(input){
    return $(input).val() != '';
}

function validateForm(event){
    var inputs = $('.input[required]').toArray();

    inputs.forEach(input => {

        //Chequeo por cada campo y muestro o no clase error
        if($(input).val() != ''){

            //Chequeo si el email tiene formato correcto
            if($(input).attr("id") == "email"){
                var email = $("#email").val();

                if (validateEmail(email)) {
                    $(input).removeClass('error');
                } else {
                    $(input).addClass('error');
                }
            } else{
                $(input).removeClass('error');
            }
            
        } else{
            $(input).addClass('error');
        }
    });
    
    //Chequeo si hay algun campo con error    
    var checkNotEmpty = inputs.every(notEmpty);
    var notErrors = $(".input.error");

    //Si no hay ningun error
    if(notErrors.length == 0){
        //-----------------ENVIAR FORMULARIO-----------------//
        $('#errorMsg').hide();
        $('#formatErrorMsg').hide();
        $(".input").val("").removeClass("error");
        
        openModal();

    } else if(!checkNotEmpty){ //Si hay algun campo vacio
        $('#errorMsg').show();
        $('#formatErrorMsg').hide();
    } else{ //Si hay error en formato
        $('#errorMsg').hide();
        $('#formatErrorMsg').show();
    }

    event.stopPropagation();
}

$(document).ready(function(){
    //Docencia
    $(".navbar__menu #docencia").mouseover(function(){
        $(".navbar__menu #docencia .submenu").addClass("open");
    });

    $(".navbar__menu #docencia").mouseleave(function(){
        $(".navbar__menu #docencia .submenu").mouseover(function(){
            return
        });
        $(".navbar__menu #docencia .submenu").removeClass("open");
    });
    
    $(".navbar__menu #docencia .submenu").mouseleave(function(){
        $(".navbar__menu #docencia .submenu").removeClass("open");
    });

    //quienes somos
    $(".navbar__menu #weare").mouseover(function(){
        $(".navbar__menu #weare .submenu").addClass("open");
    });

    $(".navbar__menu #weare").mouseleave(function(){
        $(".navbar__menu #weare .submenu").mouseover(function(){
            return
        });
        $(".navbar__menu #weare .submenu").removeClass("open");
    });
    
    $(".navbar__menu #weare .submenu").mouseleave(function(){
        $(".navbar__menu #weare .submenu").removeClass("open");
    });

    //investigacion
    $(".navbar__menu #invest").mouseover(function(){
        $(".navbar__menu #invest .submenu").addClass("open");
    });

    $(".navbar__menu #invest").mouseleave(function(){
        $(".navbar__menu #invest .submenu").mouseover(function(){
            return
        });
        $(".navbar__menu #invest .submenu").removeClass("open");
    });
    
    $(".navbar__menu #invest .submenu").mouseleave(function(){
        $(".navbar__menu #invest .submenu").removeClass("open");
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