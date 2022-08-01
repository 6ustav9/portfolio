document.addEventListener('scroll' , (event) => {
    if(window.pageYOffset > 0) {
        document.getElementById("menu").classList.add("menu-sroll")
    } else {
        document.getElementById("menu").classList.remove("menu-sroll")
    }
    
    if(Math.round(window.pageYOffset) >= document.getElementById("home").offsetTop 
        && Math.round(window.pageYOffset) < (document.getElementById("home").offsetTop + document.getElementById("home").offsetHeight)) {
            scrollActiveMenu(0); 
    } else if(Math.round(window.pageYOffset) >= document.getElementById("presentation").offsetTop
        && Math.round(window.pageYOffset) < (document.getElementById("presentation").offsetTop + document.getElementById("presentation").offsetHeight)) {
            scrollActiveMenu(1); 
    } else if(Math.round(window.pageYOffset) >= document.getElementById("skills").offsetTop
        && Math.round(window.pageYOffset) < (document.getElementById("skills").offsetTop + (document.getElementById("skills").offsetHeight - 10))) {
            scrollActiveMenu(2); 
    } else if(Math.round(window.pageYOffset) >= (document.getElementById("animations").offsetTop - 10)
        && Math.round(window.pageYOffset) < (document.getElementById("animations").offsetTop + (document.getElementById("animations").offsetHeight - 10))) {
            scrollActiveMenu(3); 
    } else if(Math.round(window.pageYOffset) >= (document.getElementById("projects").offsetTop - 10)
        && Math.round(window.pageYOffset) < (document.getElementById("projects").offsetTop + (document.getElementById("projects").offsetHeight - 10))) {
            scrollActiveMenu(4); 
        } else if(Math.round(window.pageYOffset) >= (document.getElementById("screenshots").offsetTop - 10)
            && Math.round(window.pageYOffset) < (document.getElementById("screenshots").offsetTop + document.getElementById("screenshots").offsetHeight)) {
            scrollActiveMenu(5); 
    } else {

    }

})

function scrollActiveMenu(optionActive) {
    for (let i = 0; i < document.getElementsByClassName('menu__list__item').length; i++) {        
        if(i == optionActive) {
            document.getElementsByClassName('menu__list__item')[i].getElementsByClassName('menu__list__item__link')[0].classList.add("active");
        } else {
            document.getElementsByClassName('menu__list__item')[i].getElementsByClassName('menu__list__item__link')[0].classList.remove("active");
        }
    }

}
