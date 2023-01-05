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

/* CARDS */
jQuery('document').ready(function($){
    $('#c_1').addClass('cardred');

    $('#cards2').hide();
    $('#cards3').hide();
    $('#cards4').hide();
    $('#cards5').hide();
})

jQuery('document').ready(function($){
    var c1 = $('#c_1'),
        c2 = $('#c_2'),
        c3 = $('#c_3'),
        c4 = $('#c_4');
        c5 = $('#c_5');

    c1.click(function(){
        $('#cards').fadeIn();

        $('#cards2').hide();
        $('#cards3').hide();
        $('#cards4').hide();
        $('#cards5').hide();

        $(c1).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c2.click(function(){
        $('#cards2').fadeIn();

        $('#cards').hide();
        $('#cards3').hide();
        $('#cards4').hide();
        $('#cards5').hide();

        $(c2).addClass('cardred');

        $(c1).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c3.click(function(){
        $('#cards3').fadeIn();

        $('#cards2').hide();
        $('#cards').hide();
        $('#cards4').hide();
        $('#cards5').hide();

        $(c3).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c1).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c4.click(function(){
        $('#cards4').fadeIn();

        $('#cards2').hide();
        $('#cards3').hide();
        $('#cards').hide();
        $('#cards5').hide();

        $(c4).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c1).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c5.click(function(){
        $('#cards5').fadeIn();

        $('#cards2').hide();
        $('#cards3').hide();
        $('#cards4').hide();
        $('#cards').hide();

        $(c5).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c1).removeClass('cardred');
    })
})  

/* Contador */
let numcontainer = document.getElementById('num');
let value = 0;


numcontainer.addEventListener("click", () => {value++;numcontainer.textContent = value});
