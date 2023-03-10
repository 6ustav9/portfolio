let containerProjects = document.getElementById('projects-image');

let listProjects = [
    {
        link: "https://lyrics-redirect.vercel.app",
        name: "Lyrics Redirect Version 2",
        technologies: "Angular 14 com SASS, consumindo Json Server - Disponibilizado por Vercel",
        userGit: "6ustav9",
        githubProject: "https://github.com/6ustav9/lyrics-redirect"
    },
    {
        link: "https://lyrics-redirect-ajs.netlify.app",
        name: "Lyrics Redirect Version 1",
        technologies: "Angular JS com CSS3 - Disponibilizado por Netlify",
        userGit: "6ust",
        githubProject: "https://github.com/6ust/lyrics-redirect"
    },
    {
        link: "https://recipesandcocktail.wordpress.com",
        name: "Recipes And Cocktails",
        technologies: "Wordpress, HTML e CSS",
        userGit: "_N/A_",
        githubProject: "link N/A"
    }
];



// Projects 
for (let idxListProjects = 0; idxListProjects < listProjects.length; idxListProjects++) {
	let divElement = document.createElement('div');
    let linkSiteElement = document.createElement('a');
    let linkGithubProjectElement = document.createElement('a');
    let titleSiteElement = document.createElement('h2');
    let userGitElement = document.createElement('h2');
    let technologiesElement = document.createElement('h2');
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

    // Users and Technologies
    userGitElement.innerHTML = listProjects[idxListProjects].userGit;
    technologiesElement.innerHTML = listProjects[idxListProjects].technologies;

    userGitElement.classList.add("projects__container__image__item--usergit");
    technologiesElement.classList.add("projects__container__image__item--tecnnologies");

	divElement.classList.add("projects__container__image__item")
    imgProjectsItemlistElement.classList.add("projects__container__image__item__iframe");
    // Classes Site
    linkSiteElement.classList.add('projects__container__image__item__link__site');
    titleSiteElement.classList.add('projects__container__image__item__link__site--title');
    // Classes Github Project
    linkGithubProjectElement.classList.add('projects__container__image__item__link__github-project');
    titleGithubProjectElement.classList.add('projects__container__image__item__link__github-project--title');


    titleSiteElement.appendChild(imgProjectsItemlistElement);
    titleSiteElement.appendChild(txtTitleSite);

    titleGithubProjectElement.appendChild(txtTitleGithubProject);

    linkSiteElement.appendChild(titleSiteElement);
    linkGithubProjectElement.appendChild(titleGithubProjectElement);
    
    divElement.appendChild(imgProjectsItemlistElement);
    divElement.appendChild(linkSiteElement);
    divElement.appendChild(technologiesElement);
    divElement.appendChild(userGitElement);
    divElement.appendChild(linkGithubProjectElement);

	containerProjects.appendChild(divElement);
}
