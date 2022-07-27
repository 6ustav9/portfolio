let containerScreenshots = document.getElementById('screenshots-image');


let listScreenshots = [
    { image: "./images/screenshots/Barzinho001.png", name: "Barzinho" },
    { image: "./images/screenshots/CasaModelo001.png", name: "Casa Modelo" },
    { image: "./images/screenshots/RackPreview001.png", name: "Rack" },
    { image: "./images/screenshots/RackPreview002.png", name: "Rack" },
    { image: "./images/screenshots/SilentHillOrigins_AlchemillaRemonted.png", name: "Silent Hill Alchemilla Hospital" },
    { image: "./images/screenshots/SilentHillOrigins_AlchemillaRemonted002.png", name: "Silent Hill Alchemilla Hospital" },
    { image: "./images/screenshots/LobbySHOSaveAlternativoFocus.png", name: "Silent Hill Alchemilla Samael Seal" },
    { image: "./images/screenshots/SilentHillOrigins_SingsInformation.png", name: "Silent Hill Placa" }
];


// Screenshots
for (let idxListScreenshots = 0; idxListScreenshots < listScreenshots.length; idxListScreenshots++) {
	let divElement = document.createElement('div');
    let titleImageElement = document.createElement('h2');
    let imgScreenshotsItemlistElement = document.createElement('img');
    let txtTitleImage = document.createTextNode(listScreenshots[idxListScreenshots].name);

    imgScreenshotsItemlistElement.src = listScreenshots[idxListScreenshots].image;

	divElement.classList.add("screenshots__container__image__item")
    imgScreenshotsItemlistElement.classList.add("screenshots__container__image__item__img");
    titleImageElement.classList.add('screenshots__container__image__item__title');
    
    //Add ID to modal
    imgScreenshotsItemlistElement.setAttribute("id","screenshot-"+idxListScreenshots); 

    titleImageElement.appendChild(imgScreenshotsItemlistElement);
    titleImageElement.appendChild(txtTitleImage);


    divElement.appendChild(imgScreenshotsItemlistElement);
    divElement.appendChild(titleImageElement);

	containerScreenshots.appendChild(divElement);
}
