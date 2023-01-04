/* ------ BORRAR ESTO ----*/ 
jQuery('document').ready(function($){  
    $('#pushbar').hide();
})
/* ------ BORRAR ESTO ---- */






/* NAV */
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0)
});

/* PUSHBAR*/
jQuery('document').ready(function($){
    var barBtn = $('#pb_down');

    barBtn.click(function(){
        
        $('#pushbar').hide();

    })
})

/* MENU NAV */
jQuery('document').ready(function($){
    var menuBtn = $('#menu'),
        menu = $('nav');

    menuBtn.click(function(){

        if( menu.hasClass('show')){
            menu.removeClass('show');
        } else {
        menu.addClass("show");
        }

    });
});
 
/* ABOUTME */
jQuery('document').ready(function($){
    $('#generalBtn').addClass('slcred');

    $('#slc_frontend').hide();
    $('#slc_backend').hide();
    $('#slc_design').hide();
})

jQuery('document').ready(function($){
    var generalBtn = $('#generalBtn'),
        frontendBtn = $('#frontendBtn'),
        backendBtn = $('#backendBtn'),
        designBtn = $('#designBtn');

    generalBtn.click(function(){
        $('#slc_general').show();

        $('#slc_frontend').hide();
        $('#slc_backend').hide();
        $('#slc_design').hide();

        $('#generalBtn').addClass('slcred');

        $('#frontendBtn').removeClass('slcred');
        $('#backendBtn').removeClass('slcred');
        $('#designBtn').removeClass('slcred');
    })
    frontendBtn.click(function(){
        $('#slc_frontend').show();

        $('#slc_general').hide();
        $('#slc_backend').hide();
        $('#slc_design').hide();

        $('#frontendBtn').addClass('slcred');

        $('#generalBtn').removeClass('slcred');
        $('#backendBtn').removeClass('slcred');
        $('#designBtn').removeClass('slcred');
    })
    backendBtn.click(function(){
        $('#slc_backend').show();

        $('#slc_general').hide();
        $('#slc_frontend').hide();
        $('#slc_design').hide();

        $('#backendBtn').addClass('slcred');

        $('#generalBtn').removeClass('slcred');
        $('#frontendBtn').removeClass('slcred');
        $('#designBtn').removeClass('slcred');
    })
    designBtn.click(function(){
        $('#slc_design').show();

        $('#slc_general').hide();
        $('#slc_frontend').hide();
        $('#slc_backend').hide();

        $('#designBtn').addClass('slcred');

        $('#generalBtn').removeClass('slcred');
        $('#frontendBtn').removeClass('slcred');
        $('#backendBtn').removeClass('slcred');
    })
})  

