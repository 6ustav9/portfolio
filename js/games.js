let containerGames = document.getElementById('games-image');


let listGames = [
    { image: "./images/template-default/em-breve.png", name: "Em Breve" },
    { image: "./images/template-default/em-breve.png", name: "Em Breve" },
    { image: "./images/template-default/em-breve.png", name: "Em Breve" }
];


// Screenshots
for (let idxListGames = 0; idxListGames < listGames.length; idxListGames++) {
	let divElement = document.createElement('div');
    let titleImageElement = document.createElement('h2');
    let imgGamesItemlistElement = document.createElement('img');
    let txtTitleImage = document.createTextNode(listGames[idxListGames].name);

    imgGamesItemlistElement.src = listGames[idxListGames].image;

	divElement.classList.add("games__container__image__item")
    imgGamesItemlistElement.classList.add("games__container__image__item__img");
    titleImageElement.classList.add('games__container__image__item__title');

    titleImageElement.appendChild(imgGamesItemlistElement);
    titleImageElement.appendChild(txtTitleImage);

    divElement.appendChild(imgGamesItemlistElement);
    divElement.appendChild(titleImageElement);

	containerGames.appendChild(divElement);
}
