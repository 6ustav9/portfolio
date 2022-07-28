let containerProjects = document.getElementById('projects-image');

let listProjects = [
    {
        link: "https://lyrics-redirect.vercel.app",
        name: "Lyrics Redirect",
        githubProject: "https://github.com/6ustav9/lyrics-redirect"
    },
    {
        link: "https://recipesandcocktail.wordpress.com",
        name: "Recipes And Cocktails",
        githubProject: "N/A"
    },
    {
        link: "https://moviesdbzn.herokuapp.com",
        name: "Movies DBZN",
        githubProject: "https://github.com/6ust/heroku-movies-dbzn-react-version"
    }
    // ,{
    //     link: "",
    //     name: "Silent Hill Fans",
    //     githubProject: ""
    // }     
];



// Projects 
for (let idxListProjects = 0; idxListProjects < listProjects.length; idxListProjects++) {
	let divElement = document.createElement('div');
    let linkSiteElement = document.createElement('a');
    let linkGithubProjectElement = document.createElement('a');
    let titleSiteElement = document.createElement('h2');
    let titleGithubProjectElement = document.createElement('h2');
    let imgProjectsItemlistElement = document.createElement('iframe');
    let txtTitleSite = document.createTextNode(listProjects[idxListProjects].name);
    let txtTitleGithubProject = document.createTextNode(listProjects[idxListProjects].githubProject);
    
    imgProjectsItemlistElement.setAttribute("src", listProjects[idxListProjects].link);
    imgProjectsItemlistElement.setAttribute("scrolling", "no");

    // link Site
    linkSiteElement.setAttribute("href", listProjects[idxListProjects].link);
    linkSiteElement.setAttribute("target", "_blank");
    // link Github Project
    linkGithubProjectElement.setAttribute("href", listProjects[idxListProjects].githubProject);
    linkGithubProjectElement.setAttribute("target", "_blank");


	divElement.classList.add("projects__container__image__item")
    imgProjectsItemlistElement.classList.add("projects__container__image__item__iframe");
    // Classes Site
    titleSiteElement.classList.add('projects__container__image__item__link-site__title');
    linkSiteElement.classList.add('projects__container__image__item__link-site');
    // Classes Github Project
    titleGithubProjectElement.classList.add('projects__container__image__item__link-github-project__title');
    linkGithubProjectElement.classList.add('projects__container__image__item__link-github-project');


    titleSiteElement.appendChild(imgProjectsItemlistElement);
    titleSiteElement.appendChild(txtTitleSite);

    titleGithubProjectElement.appendChild(txtTitleGithubProject);

    linkSiteElement.appendChild(titleSiteElement);
    linkGithubProjectElement.appendChild(titleGithubProjectElement);
    
    divElement.appendChild(imgProjectsItemlistElement);
    divElement.appendChild(linkSiteElement);
    divElement.appendChild(linkGithubProjectElement);

	containerProjects.appendChild(divElement);
}
