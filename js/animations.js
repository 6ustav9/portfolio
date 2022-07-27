let containerAnimations = document.getElementById('animations-image');


let listAnimations = [
    { image: "./images/animations/BolhudoAcenando.gif", name: "Bolhudo Acenando" },
    { image: "./images/animations/BolhudoLevantando.gif", name: "Bolhudo Levantando" },
    { image: "./images/template-default/em-breve.png", name: "Em Breve" }
];


// Screenshots
for (let idxListAnimations = 0; idxListAnimations < listAnimations.length; idxListAnimations++) {
	let divElement = document.createElement('div');
    let titleImageElement = document.createElement('h2');
    let imgAnimationsItemlistElement = document.createElement('img');
    let txtTitleImage = document.createTextNode(listAnimations[idxListAnimations].name);

    imgAnimationsItemlistElement.src = listAnimations[idxListAnimations].image;

	divElement.classList.add("animations__container__image__item")
    imgAnimationsItemlistElement.classList.add("animations__container__image__item__img");
    titleImageElement.classList.add('animations__container__image__item__title');

    //Add ID to modal
    imgAnimationsItemlistElement.setAttribute("id","animations-"+idxListAnimations); 

    titleImageElement.appendChild(imgAnimationsItemlistElement);
    titleImageElement.appendChild(txtTitleImage);

    divElement.appendChild(imgAnimationsItemlistElement);
    divElement.appendChild(titleImageElement);

	containerAnimations.appendChild(divElement);
}
