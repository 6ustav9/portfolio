let containerFront = document.getElementById('skills__knowledge-container__section--front');
let containerBack = document.getElementById('skills__knowledge-container__section--back');
let containerDatabase = document.getElementById('skills__knowledge-container__section--database');
let containerPackagesLibraries = document.getElementById('skills__knowledge-container__section--methodology');
let containerIde = document.getElementById('skills__knowledge-container__section--ide');
let containerServerApplication = document.getElementById('skills__knowledge-container__section--server-application');
let containerSharedCode = document.getElementById('skills__knowledge-container__section--shared-code');
let containerWebTecnologies = document.getElementById('skills__knowledge-container__section--web-tecnologies');
let containerOthers = document.getElementById('skills__knowledge-container__section--others');

let frontList = [
    { logoImg: "./images/icons/angular.png", name: "Angular" },
    { logoImg: "./images/icons/react.png", name: "React" },
    { logoImg: "./images/icons/redux.png", name: "Redux" },
    { logoImg: "./images/icons/javascript.png", name: "Javascript" },
    { logoImg: "./images/icons/typescript.png", name: "Typescript" },
    { logoImg: "./images/icons/wordpress.png", name: "Wordpress" },
    { logoImg: "./images/icons/jsf.png", name: "JSF" },
    { logoImg: "./images/icons/jsp.png", name: "JSP" },
    { logoImg: "./images/icons/jquery.png", name: "JQuery" },
    { logoImg: "./images/icons/ajax.png", name: "Ajax" },
    { logoImg: "./images/icons/landing-page.png", name: "Landing Page" },
    { logoImg: "./images/icons/http.png", name: "HTTP" },
    { logoImg: "./images/icons/regex.png", name: "RegEx (Expressões Regulares)" },
    { logoImg: "./images/icons/seo.png", name: "SEO" },
    { logoImg: "./images/icons/acessibilidade.png", name: "Acessibilidade" },
    { logoImg: "./images/icons/acessibilidade.png", name: "Design Inclusivo" },
    { logoImg: "./images/icons/formik.png", name: "Formik" },
    { logoImg: "./images/icons/react-router.png", name: "React Router" },
];

let backList = [
    { logoImg: "./images/icons/microsservices.png", name: "Microserviços" },
    { logoImg: "./images/icons/spring.png", name: "Spring Framework" },
    { logoImg: "./images/icons/python.png", name: "Python" },
    { logoImg: "./images/icons/java.png", name: "Java" },
    { logoImg: "./images/icons/api-rest.png", name: "API REST" },
];

let methodologyList = [
    { logoImg: "./images/icons/scrum.png", name: "Scrum" },
    { logoImg: "./images/icons/lean-agile.png", name: "Lean" },
    { logoImg: "./images/icons/lean-agile.png", name: "Agile" },
    
];

let serverApplicationList = [
    { logoImg: "./images/icons/nodejs.png", name: "NodeJS" },
    { logoImg: "./images/icons/tomcat.png", name: "Tomcat" },
];

let ideList = [
    { logoImg: "./images/icons/eclipse.png", name: "Eclipse" },
    { logoImg: "./images/icons/vscode.png", name: "Visual Studio Code" },
];

let versionControlSystemsList = [
    { logoImg: "./images/icons/git.png", name: "GIT" },
    { logoImg: "./images/icons/github.png", name: "Github" },
    { logoImg: "./images/icons/gitlab.png", name: "GitLab" },
    { logoImg: "https://companieslogo.com/img/orig/MFGP-1d9cbb74.png?t=1652326768", name: "StarTeam" },
];

let databaseList = [
    { logoImg: "./images/icons/mysql.png", name: "MySQL" },
    { logoImg: "./images/icons/sqlserver.png", name: "SQL Server" },
    { logoImg: "./images/icons/sqlite.png", name: "SQLite" }
];

let othersList = [
    { logoImg: "./images/icons/react.png", name: "Componentização" },
    { logoImg: "./images/icons/webpack.png", name: "WebPack" },
    { logoImg: "./images/icons/css3.png", name: "Flexbox" },
    { logoImg: "./images/icons/office.png", name: "Pacote Office" },
    { logoImg: "./images/icons/email-marketing.png", name: "E-mail Marketing" },
];

let webTecnologiesList = [
    { logoImg: "./images/icons/html5.png", name: "HTML / HTML5" },
    { logoImg: "./images/icons/css3.png", name: "CSS / CSS3" },
    { logoImg: "./images/icons/sass.png", name: "SCSS" },
    { logoImg: "./images/icons/sass.png", name: "SASS" },
    { logoImg: "./images/icons/spa.png", name: "Single Page Application" },
    { logoImg: "./images/icons/responsive.png", name: "Responsividade" },
    { logoImg: "./images/icons/bootstrap.png", name: "Bootstrap" },
]


// Front End
let titleSectionFront = document.createElement('h2');
let txtTitleFront = document.createTextNode("Front");

titleSectionFront.classList.add('skills__title');
titleSectionFront.appendChild(txtTitleFront);
containerFront.appendChild(titleSectionFront);

let frontListListElement = document.createElement('ul');
frontListListElement.classList.add('skills__list');

for (let idxfrontList = 0; idxfrontList < frontList.length; idxfrontList++) {
    let frontListItemlistElement = document.createElement('li');
    let txtItemfrontList = document.createTextNode(frontList[idxfrontList].name);

    let imgFrontItemlistElement = document.createElement('img');
    imgFrontItemlistElement.src = frontList[idxfrontList].logoImg;
    imgFrontItemlistElement.classList.add("skills__list__item__img")

    frontListItemlistElement.classList.add('skills__list__item');

    frontListItemlistElement.appendChild(imgFrontItemlistElement);
    frontListItemlistElement.appendChild(txtItemfrontList);
    frontListListElement.appendChild(frontListItemlistElement);
}

containerFront.appendChild(frontListListElement);

// Back End
let titleSectionBack = document.createElement('h2');
let txtTitleBack = document.createTextNode("Back");

titleSectionBack.classList.add('skills__title');
titleSectionBack.appendChild(txtTitleBack);
containerBack.appendChild(titleSectionBack);

let backListListElement = document.createElement('ul');
backListListElement.classList.add('skills__list');

for (let idxbackList = 0; idxbackList < backList.length; idxbackList++) {
    let backListItemlistElement = document.createElement('li');
    let txtItembackList = document.createTextNode(backList[idxbackList].name);

    let imgBackItemlistElement = document.createElement('img');
    imgBackItemlistElement.src = backList[idxbackList].logoImg;
    imgBackItemlistElement.classList.add("skills__list__item__img");

    backListItemlistElement.classList.add('skills__list__item');
    backListItemlistElement.appendChild(imgBackItemlistElement);
    backListItemlistElement.appendChild(txtItembackList);
    backListListElement.appendChild(backListItemlistElement);
}

containerBack.appendChild(backListListElement);

//Database
let titleSectionDatabase = document.createElement('h2');
let txtTitleDatabase = document.createTextNode("Banco de Dados");

titleSectionDatabase.classList.add('skills__title');
titleSectionDatabase.appendChild(txtTitleDatabase);
containerDatabase.appendChild(titleSectionDatabase);

let databaseListListElement = document.createElement('ul');
databaseListListElement.classList.add('skills__list');

for (let idxdatabaseList = 0; idxdatabaseList < databaseList.length; idxdatabaseList++) {
    let databaseListItemlistElement = document.createElement('li');
    let txtItemdatabaseList = document.createTextNode(databaseList[idxdatabaseList].name);

    let imgDatabaseItemlistElement = document.createElement('img');
    imgDatabaseItemlistElement.src = databaseList[idxdatabaseList].logoImg;
    imgDatabaseItemlistElement.classList.add("skills__list__item__img");

    databaseListItemlistElement.classList.add('skills__list__item');
    databaseListItemlistElement.appendChild(imgDatabaseItemlistElement);
    databaseListItemlistElement.appendChild(txtItemdatabaseList);
    databaseListListElement.appendChild(databaseListItemlistElement);
}

containerDatabase.appendChild(databaseListListElement);

//Packages & Libraries
let titleSectionPackagesLibraries = document.createElement('h2');
let txtTitlePackagesLibraries = document.createTextNode("Metodologias");

titleSectionPackagesLibraries.classList.add('skills__title');
titleSectionPackagesLibraries.appendChild(txtTitlePackagesLibraries);
containerPackagesLibraries.appendChild(titleSectionPackagesLibraries);

let methodologyListListElement = document.createElement('ul');
methodologyListListElement.classList.add('skills__list');

for (let idxmethodologyList = 0; idxmethodologyList < methodologyList.length; idxmethodologyList++) {
    let methodologyListItemlistElement = document.createElement('li');
    let txtItemmethodologyList = document.createTextNode(methodologyList[idxmethodologyList].name);

    let imgPackagesLibrariesItemlistElement = document.createElement('img');
    imgPackagesLibrariesItemlistElement.src = methodologyList[idxmethodologyList].logoImg;
    imgPackagesLibrariesItemlistElement.classList.add("skills__list__item__img");

    methodologyListItemlistElement.classList.add('skills__list__item');
    methodologyListItemlistElement.appendChild(imgPackagesLibrariesItemlistElement);
    methodologyListItemlistElement.appendChild(txtItemmethodologyList);
    methodologyListListElement.appendChild(methodologyListItemlistElement);
}

containerPackagesLibraries.appendChild(methodologyListListElement);

//IDE
let titleSectionIde = document.createElement('h2');
let txtTitleIde = document.createTextNode("IDE");

titleSectionIde.classList.add('skills__title');
titleSectionIde.appendChild(txtTitleIde);
containerIde.appendChild(titleSectionIde);

let ideListListElement = document.createElement('ul');
ideListListElement.classList.add('skills__list');

for (let idxideList = 0; idxideList < ideList.length; idxideList++) {
    let ideListItemlistElement = document.createElement('li');
    let txtItemideList = document.createTextNode(ideList[idxideList].name);

    let imgIdeItemlistElement = document.createElement('img');
    imgIdeItemlistElement.src = ideList[idxideList].logoImg;
    imgIdeItemlistElement.classList.add("skills__list__item__img");

    ideListItemlistElement.classList.add('skills__list__item');
    ideListItemlistElement.appendChild(imgIdeItemlistElement);
    ideListItemlistElement.appendChild(txtItemideList);
    ideListListElement.appendChild(ideListItemlistElement);
}

containerIde.appendChild(ideListListElement);

//Shared Code
let titleSectionSharedCode = document.createElement('h2');
let txtTitleSharedCode = document.createTextNode("Versionamento de código");

titleSectionSharedCode.classList.add('skills__title');
titleSectionSharedCode.appendChild(txtTitleSharedCode);
containerSharedCode.appendChild(titleSectionSharedCode);

let versionControlSystemsListListElement = document.createElement('ul');
versionControlSystemsListListElement.classList.add('skills__list');

for (let idxversionControlSystemsList = 0; idxversionControlSystemsList < versionControlSystemsList.length; idxversionControlSystemsList++) {
    let versionControlSystemsListItemlistElement = document.createElement('li');
    let txtItemversionControlSystemsList = document.createTextNode(versionControlSystemsList[idxversionControlSystemsList].name);

    let imgSharedCodeItemlistElement = document.createElement('img');
    imgSharedCodeItemlistElement.src = versionControlSystemsList[idxversionControlSystemsList].logoImg;
    imgSharedCodeItemlistElement.classList.add("skills__list__item__img");

    versionControlSystemsListItemlistElement.classList.add('skills__list__item');
    versionControlSystemsListItemlistElement.appendChild(imgSharedCodeItemlistElement);
    versionControlSystemsListItemlistElement.appendChild(txtItemversionControlSystemsList);
    versionControlSystemsListListElement.appendChild(versionControlSystemsListItemlistElement);
}

containerSharedCode.appendChild(versionControlSystemsListListElement);

//Server Application
let titleSectionServerApplication = document.createElement('h2');
let txtTitleServerApplication = document.createTextNode("Servidores de Aplicação");

titleSectionServerApplication.classList.add('skills__title');
titleSectionServerApplication.appendChild(txtTitleServerApplication);
containerServerApplication.appendChild(titleSectionServerApplication);

let serverApplicationListListElement = document.createElement('ul');
serverApplicationListListElement.classList.add('skills__list');

for (let idxserverApplicationList = 0; idxserverApplicationList < serverApplicationList.length; idxserverApplicationList++) {
    let serverApplicationListItemlistElement = document.createElement('li');
    let txtItemserverApplicationList = document.createTextNode(serverApplicationList[idxserverApplicationList].name);

    let imgServerApplicationItemlistElement = document.createElement('img');
    imgServerApplicationItemlistElement.src = serverApplicationList[idxserverApplicationList].logoImg;
    imgServerApplicationItemlistElement.classList.add("skills__list__item__img");

    serverApplicationListItemlistElement.classList.add('skills__list__item');
    serverApplicationListItemlistElement.appendChild(imgServerApplicationItemlistElement);
    serverApplicationListItemlistElement.appendChild(txtItemserverApplicationList);
    serverApplicationListListElement.appendChild(serverApplicationListItemlistElement);
}

containerServerApplication.appendChild(serverApplicationListListElement);

//web Tecnologies
let titleSectionWebTecnologies = document.createElement('h2');
let txtTitleWebTecnologies = document.createTextNode("Tecnologias WEB");

titleSectionWebTecnologies.classList.add('skills__title');
titleSectionWebTecnologies.appendChild(txtTitleWebTecnologies);
containerWebTecnologies.appendChild(titleSectionWebTecnologies);

let webTecnologiesListElement = document.createElement('ul');
webTecnologiesListElement.classList.add('skills__list');

for (let idxWebTecnologiesList = 0; idxWebTecnologiesList < webTecnologiesList.length; idxWebTecnologiesList++) {
    let webTecnologiesListItemlistElement = document.createElement('li');
    let txtItemwebTecnologiesList = document.createTextNode(webTecnologiesList[idxWebTecnologiesList].name);

    let imgWebTecnologiesItemlistElement = document.createElement('img');
    imgWebTecnologiesItemlistElement.src = webTecnologiesList[idxWebTecnologiesList].logoImg;
    imgWebTecnologiesItemlistElement.classList.add("skills__list__item__img");

    webTecnologiesListItemlistElement.classList.add('skills__list__item');
    webTecnologiesListItemlistElement.appendChild(imgWebTecnologiesItemlistElement);
    webTecnologiesListItemlistElement.appendChild(txtItemwebTecnologiesList);
    webTecnologiesListElement.appendChild(webTecnologiesListItemlistElement);
}

containerWebTecnologies.appendChild(webTecnologiesListElement);

//Others
let titleSectionOthers = document.createElement('h2');
let txtTitleOthers = document.createTextNode("Outros");

titleSectionOthers.classList.add('skills__title');
titleSectionOthers.appendChild(txtTitleOthers);
containerOthers.appendChild(titleSectionOthers);

let othersListListElement = document.createElement('ul');
othersListListElement.classList.add('skills__list');

for (let idxothersList = 0; idxothersList < othersList.length; idxothersList++) {
    let othersListItemlistElement = document.createElement('li');
    let txtItemothersList = document.createTextNode(othersList[idxothersList].name);

    let imgOthersItemlistElement = document.createElement('img');
    imgOthersItemlistElement.src = othersList[idxothersList].logoImg;
    imgOthersItemlistElement.classList.add("skills__list__item__img");

    othersListItemlistElement.classList.add('skills__list__item');
    othersListItemlistElement.appendChild(imgOthersItemlistElement);
    othersListItemlistElement.appendChild(txtItemothersList);
    othersListListElement.appendChild(othersListItemlistElement);
}

containerOthers.appendChild(othersListListElement);