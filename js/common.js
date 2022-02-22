/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    donutAnimation("#donutJava", 80);
    donutAnimation("#donutSpring", 85);
    donutAnimation("#donutDB", 70);
    donutAnimation("#donutJavascript", 55);
    donutAnimation("#donutCss", 40);
    donutAnimation("#donutLinux", 60);
    
    // donutName에 #필요
    function donutAnimation(donutName , javaDonutVal) {
        const donut = document.querySelector(donutName);
        let t4 = 0
        const donutAnimation = setInterval(() => {
            donut.dataset.percent = t4
            donut.style.background = `conic-gradient(#ffd900 0 ${t4}%, #DEDEDE ${t4}% 100% )`
            t4++ >= javaDonutVal && clearInterval(donutAnimation);
        }, 10);
    }

    function repeatDonut() {
        donutAnimation("#donutJava", 80);
        donutAnimation("#donutSpring", 85);
        donutAnimation("#donutDB", 70);
        donutAnimation("#donutJavascript", 55);
        donutAnimation("#donutCss", 40);
        donutAnimation("#donutLinux", 60);
    }

    const linkId = document.getElementById("linkLanguages");
    const linkId2 = document.getElementById("linkLanguages2");
    linkId.addEventListener('click', function(event){
        repeatDonut();
    });
    linkId2.addEventListener('click', function(event){
        repeatDonut();
    });
});
