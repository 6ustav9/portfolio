let option = document.getElementsByClassName("menu__list__item__link");

// Link Active by click
for (let i = 0; i < option.length; i++) {

    // Listener identifier index to link clicked
    option[i].addEventListener('click', function() {

        for (let j = 0; j < option.length; j++) {
            // Rule to active class
            if (option[j].classList.contains('active')) {
                option[j].classList.remove('active');
            }
            if (j === i) {
                option[j].classList.add('active');
            }
        }
    });
}