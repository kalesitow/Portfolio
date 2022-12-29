window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0)
})

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

