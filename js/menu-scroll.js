document.addEventListener('scroll' , (event) => {
    if(window.pageYOffset > 0) {
        document.getElementById("menu").classList.add("menu-sroll")
    } else {
        document.getElementById("menu").classList.remove("menu-sroll")
    }
})
