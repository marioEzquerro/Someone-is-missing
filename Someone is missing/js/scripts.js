/*!
* Start Bootstrap - Grayscale v6.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/

// Soluciones posibles, teniendo en cuenta varias posibilidades
const solucion1 = ["emily-bronte", "emily bronte", "emily-brontë", "emily brontë"];
const solucion3 = ["persuasion", "persuasión"];
const solucion4 = "41";

function checkRespuesta(nPregunta) {
    // id del input
    let respuesta = $("#inpRespuesta").val();

    switch (nPregunta) {
        case 1:
            if (solucion1.includes(respuesta.toLowerCase())) 
                window.location.href = "reto2.html";
            else 
                respuestaIncorrecta();
        break;

        case 3:
            if (solucion3.includes(respuesta.toLowerCase())) 
                window.location.href = "reto4.html";
            else 
                respuestaIncorrecta(); 
        break;
        
        case 4:
            if (solucion4 == respuesta)
                window.location.href = "reto5.html";
            else 
                respuestaIncorrecta();    
        break;
    }
    
}

function respuestaIncorrecta() {
    $("#span").text("Respuesta incorrecta");
    $("#inpRespuesta").val("");
    
    $("#span").css("animation", "none"); // eliminar animation 
    document.querySelector("#span").offsetWidth; // trigger reflow
    $("#span").css("animation", "popup 1s ease-out"); // añadir animation otra vez

}

(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict



