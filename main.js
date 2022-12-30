/* ------ BORRAR ESTO ---- 
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
 

