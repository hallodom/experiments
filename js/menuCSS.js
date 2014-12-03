// Get a reference to the logo element.

$(document).ready(function(){

    var el = document.getElementById('menu');

    var menu = document.getElementsByClassName('js-show-menu')[0];

    menu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu()
    });

    var topMenu = document.getElementsByClassName('js-show-top-menu')[0];
    var topMenuElement = document.getElementById('top-menu');

    topMenu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showTopMenu();
    });


    document.body.addEventListener('click', function(e){
        if (!e.target.classList.contains('menu')) {
            closeMenu()
        }
    })

    function toggleMenu() {
        if (el.classList.contains('animate-bounce-in-left')) {
            el.classList.remove('animate-bounce-in-left')
        }
        else {
            el.classList.add('animate-bounce-in-left')
        }
    }

    function closeMenu() {
        $('#top-menu').addClass('reverse')
    }

    function showTopMenu() {
        
        if (topMenuElement.classList.contains('animate-bounce-in-top')) {
            topMenuElement.classList.remove('reverse')
        }
        else {
            topMenuElement.classList.add('animate-bounce-in-top')
        }
    }

})
