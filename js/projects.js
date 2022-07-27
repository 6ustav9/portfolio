let containerProjects = document.getElementById('projects-image');

let listProjects = [
    {
        link: "https://lyrics-redirect.vercel.app",
        name: "Lyrics Redirect",
    },
    {
        link: "https://recipesandcocktail.wordpress.com",
        name: "Recipes And Cocktails",
    },
    {
        link: "https://moviesdbzn.herokuapp.com",
        name: "Movies DBZN",
    }
    // ,{
    //     link: "",
    //     name: "Silent Hill Fans",
    // }     
];



// Projects 
for (let idxListProjects = 0; idxListProjects < listProjects.length; idxListProjects++) {
	let divElement = document.createElement('div');
    let linkElement = document.createElement('a');
    let titleImageElement = document.createElement('h2');
    let imgProjectsItemlistElement = document.createElement('iframe');
    let txtTitle = document.createTextNode(listProjects[idxListProjects].name);
    let txtlinkUrl = document.createTextNode(listProjects[idxListProjects].link);
    
    imgProjectsItemlistElement.setAttribute("src", listProjects[idxListProjects].link);
    imgProjectsItemlistElement.setAttribute("scrolling", "no");
    linkElement.setAttribute("href", listProjects[idxListProjects].link);
    linkElement.setAttribute("target", "_blank");


	divElement.classList.add("projects__container__image__item")
    imgProjectsItemlistElement.classList.add("projects__container__image__item__iframe");
    titleImageElement.classList.add('projects__container__image__item__link__title');
    linkElement.classList.add('projects__container__image__item__link');

    titleImageElement.appendChild(imgProjectsItemlistElement);
    titleImageElement.appendChild(txtTitle);

    linkElement.appendChild(titleImageElement);
    
    divElement.appendChild(imgProjectsItemlistElement);
    divElement.appendChild(linkElement);

	containerProjects.appendChild(divElement);
}
