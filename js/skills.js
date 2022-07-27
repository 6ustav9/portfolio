let containerFront = document.getElementById('front');
let containerBack = document.getElementById('back');
let containerDatabase = document.getElementById('database');
let containerPackagesLibraries = document.getElementById('packages-and-libraries');
let containerIde = document.getElementById('ide');
let containerServerApplication = document.getElementById('server-application');
let containerSharedCode = document.getElementById('shared-code');
let containerSoftwares = document.getElementById('softwares');
let containerOthers = document.getElementById('others');

let listFront = [
    { logoImg: "./images/icons/angular.png", name: "Angular" },
    { logoImg: "./images/icons/react.png", name: "React" },
    { logoImg: "./images/icons/html5.png", name: "HTML" },
    { logoImg: "./images/icons/html5.png", name: "HTML5" },
    { logoImg: "./images/icons/css3.png", name: "CSS" },
    { logoImg: "./images/icons/css3.png", name: "CSS3" },
    { logoImg: "./images/icons/sass.png", name: "SCSS" },
    { logoImg: "./images/icons/sass.png", name: "SASS" },
    { logoImg: "./images/icons/javascript.png", name: "Javascript" },
    { logoImg: "./images/icons/typescript.png", name: "Typescript" },
    { logoImg: "./images/icons/bootstrap.png", name: "Bootstrap" },
    { logoImg: "./images/icons/tailwind.png", name: "Tailwind" },
    { logoImg: "./images/icons/wordpress.png", name: "Wordpress" },
    { logoImg: "./images/icons/protractor.png", name: "Protractor" },
    { logoImg: "./images/icons/mean.png", name: "MEAN Stack" },
    { logoImg: "./images/icons/vue.png", name: "Vue" },
    { logoImg: "./images/icons/nextjs.png", name: "Next" },
    { logoImg: "./images/icons/electron.png", name: "Electron" },
    { logoImg: "./images/icons/jsf.png", name: "JSF" },
    { logoImg: "./images/icons/jsp.png", name: "JSP" }
];

let listBack = [
    { logoImg: "./images/icons/microsservices.png", name: "Microserviços" },
    { logoImg: "./images/icons/spring.png", name: "Spring Framework" },
    { logoImg: "./images/icons/python.png", name: "Python" },
    { logoImg: "./images/icons/java.png", name: "Java" },
    { logoImg: "./images/icons/api-rest.png", name: "API REST" }
];

let listPackagesLibraries = [
    { logoImg: "./images/icons/redux.png", name: "Redux" },
    { logoImg: "./images/icons/yup.png", name: "Yup" },
    { logoImg: "./images/icons/formik.png", name: "Formik" },
    { logoImg: "./images/icons/react-router.png", name: "React Router" },
    { logoImg: "./images/icons/jquery.png", name: "JQuery" },
    { logoImg: "./images/icons/ajax.png", name: "Ajax" },
];

let listServerApplication = [
    { logoImg: "./images/icons/tomcat.png", name: "Tomcat" },
    { logoImg: "./images/icons/nodejs.png", name: "NodeJS" },
];

let listIde = [
    { logoImg: "./images/icons/eclipse.png", name: "Eclipse" },
    { logoImg: "./images/icons/vscode.png", name: "Visual Studio Code" },
];

let listSharedCode = [
    { logoImg: "./images/icons/git.png", name: "GIT" },
    { logoImg: "./images/icons/github.png", name: "Github" },
    { logoImg: "./images/icons/gitlab.png", name: "GitLab" },
];

let listDatabase = [
    { logoImg: "./images/icons/mysql.png", name: "MySQL" },
    { logoImg: "./images/icons/sqlserver.png", name: "SQL Server" },
    { logoImg: "./images/icons/sqlite.png", name: "SQLite" }
];

let listSoftwares = [
    { logoImg: "./images/icons/gimp.png", name: "Gimp" },
    { logoImg: "./images/icons/autodesk-3d-studio-max.png", name: "Autodesk 3D Studio Max" },
    { logoImg: "./images/icons/unity.png", name: "Unity 3D" },
    { logoImg: "./images/icons/figma.png", name: "Figma" }
];

let listOthers = [
    { logoImg: "./images/icons/scrum.png", name: "Scrum" },
    { logoImg: "./images/icons/lean-agile.png", name: "Lean Agile" },
    { logoImg: "./images/icons/office.png", name: "Pacote Office" },
    { logoImg: "./images/icons/spa.png", name: "Single Page Application" },
    { logoImg: "./images/icons/responsive.png", name: "Responsividade" },
    { logoImg: "./images/icons/react.png", name: "Componentização" },
    { logoImg: "./images/icons/http.png", name: "HTTP" },
    { logoImg: "./images/icons/regex.png", name: "RegEx (Expressões Regulares)" },
    { logoImg: "./images/icons/webpack.png", name: "WebPack" },
    { logoImg: "./images/icons/css3.png", name: "Flexbox" },
    { logoImg: "./images/icons/seo.png", name: "SEO" },
    { logoImg: "./images/icons/landing-page.png", name: "Landing Page" },
    { logoImg: "./images/icons/acessibilidade.png", name: "Acessibilidade" },
    { logoImg: "./images/icons/acessibilidade.png", name: "Design Inclusivo" },
    { logoImg: "./images/icons/email-marketing.png", name: "E-mail Marketing" },
];


// Front End
let titleSectionFront = document.createElement('h2');
let txtTitleFront = document.createTextNode("Front");

titleSectionFront.classList.add('skills__title');
titleSectionFront.appendChild(txtTitleFront);
containerFront.appendChild(titleSectionFront);

let listFrontListElement = document.createElement('ul');
listFrontListElement.classList.add('skills__list');

for (let idxListFront = 0; idxListFront < listFront.length; idxListFront++) {
    let listFrontItemlistElement = document.createElement('li');
    let txtItemListFront = document.createTextNode(listFront[idxListFront].name);

    let imgFrontItemlistElement = document.createElement('img');
    imgFrontItemlistElement.src = listFront[idxListFront].logoImg;
    imgFrontItemlistElement.classList.add("skills__list__item__img")

    listFrontItemlistElement.classList.add('skills__list__item');

    listFrontItemlistElement.appendChild(imgFrontItemlistElement);
    listFrontItemlistElement.appendChild(txtItemListFront);
    listFrontListElement.appendChild(listFrontItemlistElement);
}

containerFront.appendChild(listFrontListElement);

// Back End
let titleSectionBack = document.createElement('h2');
let txtTitleBack = document.createTextNode("Back");

titleSectionBack.classList.add('skills__title');
titleSectionBack.appendChild(txtTitleBack);
containerBack.appendChild(titleSectionBack);

let listBackListElement = document.createElement('ul');
listBackListElement.classList.add('skills__list');

for (let idxListBack = 0; idxListBack < listBack.length; idxListBack++) {
    let listBackItemlistElement = document.createElement('li');
    let txtItemListBack = document.createTextNode(listBack[idxListBack].name);

    let imgBackItemlistElement = document.createElement('img');
    imgBackItemlistElement.src = listBack[idxListBack].logoImg;
    imgBackItemlistElement.classList.add("skills__list__item__img");

    listBackItemlistElement.classList.add('skills__list__item');
    listBackItemlistElement.appendChild(imgBackItemlistElement);
    listBackItemlistElement.appendChild(txtItemListBack);
    listBackListElement.appendChild(listBackItemlistElement);
}

containerBack.appendChild(listBackListElement);

//Database
let titleSectionDatabase = document.createElement('h2');
let txtTitleDatabase = document.createTextNode("Banco de Dados");

titleSectionDatabase.classList.add('skills__title');
titleSectionDatabase.appendChild(txtTitleDatabase);
containerDatabase.appendChild(titleSectionDatabase);

let listDatabaseListElement = document.createElement('ul');
listDatabaseListElement.classList.add('skills__list');

for (let idxListDatabase = 0; idxListDatabase < listDatabase.length; idxListDatabase++) {
    let listDatabaseItemlistElement = document.createElement('li');
    let txtItemListDatabase = document.createTextNode(listDatabase[idxListDatabase].name);

    let imgDatabaseItemlistElement = document.createElement('img');
    imgDatabaseItemlistElement.src = listDatabase[idxListDatabase].logoImg;
    imgDatabaseItemlistElement.classList.add("skills__list__item__img");

    listDatabaseItemlistElement.classList.add('skills__list__item');
    listDatabaseItemlistElement.appendChild(imgDatabaseItemlistElement);
    listDatabaseItemlistElement.appendChild(txtItemListDatabase);
    listDatabaseListElement.appendChild(listDatabaseItemlistElement);
}

containerDatabase.appendChild(listDatabaseListElement);

//Packages & Libraries
let titleSectionPackagesLibraries = document.createElement('h2');
let txtTitlePackagesLibraries = document.createTextNode("Pacotes e Bibliotecas");

titleSectionPackagesLibraries.classList.add('skills__title');
titleSectionPackagesLibraries.appendChild(txtTitlePackagesLibraries);
containerPackagesLibraries.appendChild(titleSectionPackagesLibraries);

let listPackagesLibrariesListElement = document.createElement('ul');
listPackagesLibrariesListElement.classList.add('skills__list');

for (let idxListPackagesLibraries = 0; idxListPackagesLibraries < listPackagesLibraries.length; idxListPackagesLibraries++) {
    let listPackagesLibrariesItemlistElement = document.createElement('li');
    let txtItemListPackagesLibraries = document.createTextNode(listPackagesLibraries[idxListPackagesLibraries].name);

    let imgPackagesLibrariesItemlistElement = document.createElement('img');
    imgPackagesLibrariesItemlistElement.src = listPackagesLibraries[idxListPackagesLibraries].logoImg;
    imgPackagesLibrariesItemlistElement.classList.add("skills__list__item__img");

    listPackagesLibrariesItemlistElement.classList.add('skills__list__item');
    listPackagesLibrariesItemlistElement.appendChild(imgPackagesLibrariesItemlistElement);
    listPackagesLibrariesItemlistElement.appendChild(txtItemListPackagesLibraries);
    listPackagesLibrariesListElement.appendChild(listPackagesLibrariesItemlistElement);
}

containerPackagesLibraries.appendChild(listPackagesLibrariesListElement);

//IDE
let titleSectionIde = document.createElement('h2');
let txtTitleIde = document.createTextNode("IDE");

titleSectionIde.classList.add('skills__title');
titleSectionIde.appendChild(txtTitleIde);
containerIde.appendChild(titleSectionIde);

let listIdeListElement = document.createElement('ul');
listIdeListElement.classList.add('skills__list');

for (let idxListIde = 0; idxListIde < listIde.length; idxListIde++) {
    let listIdeItemlistElement = document.createElement('li');
    let txtItemListIde = document.createTextNode(listIde[idxListIde].name);

    let imgIdeItemlistElement = document.createElement('img');
    imgIdeItemlistElement.src = listIde[idxListIde].logoImg;
    imgIdeItemlistElement.classList.add("skills__list__item__img");

    listIdeItemlistElement.classList.add('skills__list__item');
    listIdeItemlistElement.appendChild(imgIdeItemlistElement);
    listIdeItemlistElement.appendChild(txtItemListIde);
    listIdeListElement.appendChild(listIdeItemlistElement);
}

containerIde.appendChild(listIdeListElement);

//Shared Code
let titleSectionSharedCode = document.createElement('h2');
let txtTitleSharedCode = document.createTextNode("Versionamento de código");

titleSectionSharedCode.classList.add('skills__title');
titleSectionSharedCode.appendChild(txtTitleSharedCode);
containerSharedCode.appendChild(titleSectionSharedCode);

let listSharedCodeListElement = document.createElement('ul');
listSharedCodeListElement.classList.add('skills__list');

for (let idxListSharedCode = 0; idxListSharedCode < listSharedCode.length; idxListSharedCode++) {
    let listSharedCodeItemlistElement = document.createElement('li');
    let txtItemListSharedCode = document.createTextNode(listSharedCode[idxListSharedCode].name);

    let imgSharedCodeItemlistElement = document.createElement('img');
    imgSharedCodeItemlistElement.src = listSharedCode[idxListSharedCode].logoImg;
    imgSharedCodeItemlistElement.classList.add("skills__list__item__img");

    listSharedCodeItemlistElement.classList.add('skills__list__item');
    listSharedCodeItemlistElement.appendChild(imgSharedCodeItemlistElement);
    listSharedCodeItemlistElement.appendChild(txtItemListSharedCode);
    listSharedCodeListElement.appendChild(listSharedCodeItemlistElement);
}

containerSharedCode.appendChild(listSharedCodeListElement);

//Server Application
let titleSectionServerApplication = document.createElement('h2');
let txtTitleServerApplication = document.createTextNode("Servidores de Aplicação");

titleSectionServerApplication.classList.add('skills__title');
titleSectionServerApplication.appendChild(txtTitleServerApplication);
containerServerApplication.appendChild(titleSectionServerApplication);

let listServerApplicationListElement = document.createElement('ul');
listServerApplicationListElement.classList.add('skills__list');

for (let idxListServerApplication = 0; idxListServerApplication < listServerApplication.length; idxListServerApplication++) {
    let listServerApplicationItemlistElement = document.createElement('li');
    let txtItemListServerApplication = document.createTextNode(listServerApplication[idxListServerApplication].name);

    let imgServerApplicationItemlistElement = document.createElement('img');
    imgServerApplicationItemlistElement.src = listServerApplication[idxListServerApplication].logoImg;
    imgServerApplicationItemlistElement.classList.add("skills__list__item__img");

    listServerApplicationItemlistElement.classList.add('skills__list__item');
    listServerApplicationItemlistElement.appendChild(imgServerApplicationItemlistElement);
    listServerApplicationItemlistElement.appendChild(txtItemListServerApplication);
    listServerApplicationListElement.appendChild(listServerApplicationItemlistElement);
}

containerServerApplication.appendChild(listServerApplicationListElement);

//Softwares
let titleSectionSoftwares = document.createElement('h2');
let txtTitleSoftwares = document.createTextNode("Softwares");

titleSectionSoftwares.classList.add('skills__title');
titleSectionSoftwares.appendChild(txtTitleSoftwares);
containerSoftwares.appendChild(titleSectionSoftwares);

let listSoftwaresListElement = document.createElement('ul');
listSoftwaresListElement.classList.add('skills__list');

for (let idxListSoftwares = 0; idxListSoftwares < listSoftwares.length; idxListSoftwares++) {
    let listSoftwaresItemlistElement = document.createElement('li');
    let txtItemListSoftwares = document.createTextNode(listSoftwares[idxListSoftwares].name);

    let imgSoftwaresItemlistElement = document.createElement('img');
    imgSoftwaresItemlistElement.src = listSoftwares[idxListSoftwares].logoImg;
    imgSoftwaresItemlistElement.classList.add("skills__list__item__img");

    listSoftwaresItemlistElement.classList.add('skills__list__item');
    listSoftwaresItemlistElement.appendChild(imgSoftwaresItemlistElement);
    listSoftwaresItemlistElement.appendChild(txtItemListSoftwares);
    listSoftwaresListElement.appendChild(listSoftwaresItemlistElement);
}

containerSoftwares.appendChild(listSoftwaresListElement);

//Others
let titleSectionOthers = document.createElement('h2');
let txtTitleOthers = document.createTextNode("Outros");

titleSectionOthers.classList.add('skills__title');
titleSectionOthers.appendChild(txtTitleOthers);
containerOthers.appendChild(titleSectionOthers);

let listOthersListElement = document.createElement('ul');
listOthersListElement.classList.add('skills__list');

for (let idxListOthers = 0; idxListOthers < listOthers.length; idxListOthers++) {
    let listOthersItemlistElement = document.createElement('li');
    let txtItemListOthers = document.createTextNode(listOthers[idxListOthers].name);

    let imgOthersItemlistElement = document.createElement('img');
    imgOthersItemlistElement.src = listOthers[idxListOthers].logoImg;
    imgOthersItemlistElement.classList.add("skills__list__item__img");

    listOthersItemlistElement.classList.add('skills__list__item');
    listOthersItemlistElement.appendChild(imgOthersItemlistElement);
    listOthersItemlistElement.appendChild(txtItemListOthers);
    listOthersListElement.appendChild(listOthersItemlistElement);
}

containerOthers.appendChild(listOthersListElement);