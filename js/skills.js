let listContainerNames = [
                        {container: "skills__knowledge-container__section--front", nameInApp: "front"},
                        {container: "skills__knowledge-container__section--back", nameInApp: "back"},
                        {container: "skills__knowledge-container__section--database", nameInApp: "banco de dados"},
                        {container: "skills__knowledge-container__section--methodology", nameInApp: "metodologias"},
                        {container: "skills__knowledge-container__section--ide", nameInApp: "IDE"},
                        {container: "skills__knowledge-container__section--server-application", nameInApp: "servidores de aplicação"},
                        {container: "skills__knowledge-container__section--shared-code", nameInApp: "versionamento de código"},
                        {container: "skills__knowledge-container__section--web-tecnologies", nameInApp: "tecnologias web"},
                        {container: "skills__knowledge-container__section--others", nameInApp: "outros"},
                    ];

let frontList = [
    { markingColor: "first", logoImg: "./images/icons/ajax.png", name: "Ajax", descriptionKnowledge: "Tenho Experiência Profissional, esta biblioteca foi utilizada em diversas aplicações dos clientes que trabalhei, e já houveram incidentes que tiveram correção/ implementações realizadas por Ajax... O ajax teve uma implementação que precisou ser realizada em uma aplicação para voltar para uma seção anterior, visto que havia 3 seções em uma aplicação tela inicial o cliente estava voltando da 3 para a 1, sendo que deveria ser para a 2, esta correção foi realizada via AJAX" },
    { markingColor: "first", logoImg: "./images/icons/http.png", name: "HTTP", descriptionKnowledge: "Tenho Experiência Profissional, este protocolo é utilizado em microserviços e api's, porem sua aplicação foi apenas utilizada voltada para incidentes, como: analise de logs, verificação da solicitações, parametros enviados/recebidos..." },
    { markingColor: "first", logoImg: "./images/icons/jquery.png", name: "JQuery", descriptionKnowledge: "Tenho Experiência Profissional, esta biblioteca foi utilizada em diversas aplicações dos clientes que trabalhei, e já houveram incidentes que tiveram correção/ implementações realizadas por Jquery... Sua aplicação foi utilizada em para habilitar conteudo que estava invisivel na tela para ser possivel, verificar se neste campo estava vindo algum valor, esta foi uma alteração voltada para desenvolvimento/ analise" },
    { markingColor: "first", logoImg: "./images/icons/jsf.png", name: "JSF", descriptionKnowledge: "Tenho Experiência Profissional, este framework é usado nas aplicações que preciso analisar e identificar erros/bugs reportados, portanto sua implementação profissional apenas foi voltada a incidentes, ainda não tive oportunidade de aplica-la em um projeto " },
    { markingColor: "first", logoImg: "./images/icons/jsp.png", name: "JSP", descriptionKnowledge: "Tenho Experiência Profissional, esta tecnologia é usada nas aplicações que preciso analisar e identificar erros/bugs reportados, portanto sua implementação profissional apenas foi voltada a incidentes, ainda não tive oportunidade de aplica-la em um projeto " },
    { markingColor: "first", logoImg: "./images/icons/regex.png", name: "RegEx (Expressões Regulares)", descriptionKnowledge: "Tenho Experiência Profissional, utilizo expressões regulares diariamente nas minhas a analise e construção de scripts python... Utilizei regex em analise de logs gigantes e sua aplicação em script python, foi para remover linhas informadas pelo cliente como desnecessarias em logs gigantes, fazendo com que assim crie uma copia limpa, apenas com as informações importantes para a analise especifica" },
    { markingColor: "second", logoImg: "./images/icons/angular.png", name: "Angular", descriptionKnowledge: "Tenho conhecimentos e projeto pessoal de estudo compartilhado no Github que utiliza Angular JS e Angular 14, como o projeto 'Lyrics Redirect' que criei para aprimorar minhas habilidades em desenvolvimento web. O projeto consiste em uma aplicação de letras de musicas, que utiliza o Angular para criar uma interface interativa e dinâmica para o usuário e o resultado final sera um redirecionamento ao site AZLyrics. Você pode conferir o código-fonte no Github: <br/> <strong><a href='https://github.com/6ust/lyrics-redirect' target='_blank'>Versão 1 - Angular JS</a></strong> <br/> <strong><a href='https://github.com/6ustav9/lyrics-redirect' target='_blank'>Versão 2 - Angular 14</a></strong> <br/> E ver o resultado final pelas URL's: <br/> <strong><a href='https://lyrics-redirect-ajs.netlify.app/' target='_blank'>Versão 1 - Angular JS</a></strong> <br/> <strong><a href='https://lyrics-redirect.vercel.app/' target='_blank'>Versão 2 - Angular 14</a></strong> " },
    { markingColor: "second", logoImg: "./images/icons/react.png", name: "React", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional, mas possuo um projeto de estudo que foi criado a partir desta tecnologia: GitHub<strong><a href='https://github.com/6ust/lyrics-react-redux' target='_blank'>Lyrics Redirect - React/Redux</a></strong> <br /> Aplicação: <br /> <strong><a href='https://lyricsredirectreact.netlify.app/' target='_blank'>Lyrics Redirect - React/Redux</a></strong>" },
    { markingColor: "second", logoImg: "./images/icons/redux.png", name: "Redux", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional, mas possuo um projeto de estudo que foi criado a partir desta tecnologia: GitHub<strong><a href='https://github.com/6ust/lyrics-react-redux' target='_blank'>Lyrics Redirect - React/Redux</a></strong> <br /> Aplicação: <br /> <strong><a href='https://lyricsredirectreact.netlify.app/' target='_blank'>Lyrics Redirect - React/Redux</a></strong>" },
    { markingColor: "second", logoImg: "./images/icons/typescript.png", name: "Typescript", descriptionKnowledge: "Possuo conhecimentos e projeto pessoal de estudo compartilhado no github, porém nunca tive a oportunidade de usar em ambiente profissional... Projeto Pessoal utiliza o Typescript no Angular... URL: <strong><a href='https://lyrics-redirect.vercel.app'>Lyrics Redirect Version 2</a></strong> GITHUB: <strong><a href='https://github.com/6ustav9/lyrics-redirect'>Lyrics Redirect Version 2</a></strong>" },
    { markingColor: "second", logoImg: "./images/icons/wordpress.png", name: "Wordpress", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional, possuo projeto publicado diretamente na propria plataforma... Aplicação: <strong><a href='https://recipesandcocktail.wordpress.com'>Recipes and Cocktails</a></strong>" },
    { markingColor: "third", logoImg: "./images/icons/javascript.png", name: "Javascript", descriptionKnowledge: "Tenho conhecimentos e Experiência Profissional no uso de JavaScript, principalmente na atuação de incidentes no mobile. Uma das aplicações que desenvolvi com JavaScript foi a validação da plataforma que o cliente estava usando, utilizando o UserAgent para identificar o dispositivo e o sistema operacional em que o aplicativo estava sendo executado" },
    { markingColor: "fourth", logoImg: "./images/icons/acessibilidade.png", name: "Acessibilidade", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional" },
    { markingColor: "fourth", logoImg: "./images/icons/acessibilidade.png", name: "Design Inclusivo", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional" },
    { markingColor: "fourth", logoImg: "./images/icons/formik.png", name: "Formik", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional" },
    { markingColor: "fourth", logoImg: "./images/icons/landing-page.png", name: "Landing Page", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional" },
    { markingColor: "fourth", logoImg: "./images/icons/react-router.png", name: "React Router", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional" },
    { markingColor: "fourth", logoImg: "./images/icons/seo.png", name: "SEO", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional" },
];

let backList = [
    { markingColor: "first", logoImg: "./images/icons/api-rest.png", name: "API REST", descriptionKnowledge: "Tenho conhecimento sobre a criação e utilização de APIs REST, embora não tenha tido a oportunidade de desenvolvê-las em ambiente profissional. Conheço os princípios e padrões do modelo RESTful, como a utilização de verbos HTTP para realizar operações em recursos, o uso de URIs e representação de dados em formatos como JSON ou XML. Além disso, tenho conhecimento na utilização de Spring Framework para a criação de APIs REST e já analisei aplicações que utilizam essa tecnologia." },
    { markingColor: "first", logoImg: "./images/icons/java.png", name: "Java", descriptionKnowledge: "Tenho Experiência Profissional, uso o JAVA como linguagem de programação principal no dia-a-dia na BRQ, a aplicação é voltada a Incidentes, mas adoraria uma oportunidade de atuar em um projeto" },
    { markingColor: "first", logoImg: "./images/icons/microsservices.png", name: "Microserviços", descriptionKnowledge: "Tenho conhecimento de Microserviços e do Spring Framework, embora ainda não tenha tido a oportunidade de desenvolver habilidades de desenvolvimento em ambiente profissional. Utilizo o conhecimento em Microserviços para analisar aplicações que utilizam o Spring Framework e identificar possíveis problemas." },
    { markingColor: "first", logoImg: "./images/icons/spring.png", name: "Spring Framework", descriptionKnowledge: "Tenho conhecimento de Spring Framework, um framework para desenvolvimento de aplicações Java amplamente utilizado no mercado. Ainda não tive oportunidade de utilizá-lo em ambiente profissional, mas conheço seus principais recursos e características, como injeção de dependências, controle transacional e suporte a RESTful web services. Além disso, possuo Experiência em identificar e corrigir problemas relacionados a parâmetros incorretos em microserviços, embora não diretamente relacionado ao Spring Framework." },
    { markingColor: "second", logoImg: "./images/icons/python.png", name: "Python", descriptionKnowledge: "Tenho conhecimento da linguagem Python, utilizo-a em ambiente profissional para criar scripts de automatização de tarefas" },
];

let methodologyList = [
    { markingColor: "first", logoImg: "./images/icons/lean-agile.png", name: "Agile", descriptionKnowledge: "Tenho Experiência Profissional com o Agile, metodologia ágil utilizada em projetos de software, principalmente em situações de resolução de incidentes. Embora a utilização seja voltada para esse fim, procuro aplicar o máximo possível dos valores e princípios do Agile em meu trabalho. Os recursos que utilizo incluem a colaboração entre os membros da equipe, comunicação clara para garantir alinhamento e engajamento, e a melhoria contínua para aprimorar o processo e entregar valor de forma mais eficiente. Com a metodologia Agile, busco garantir a satisfação do cliente e a qualidade do produto final" },
    { markingColor: "first", logoImg: "./images/icons/lean-agile.png", name: "Design Patterns", descriptionKnowledge: "Tenho conhecimento sobre Design Patterns, como uma técnica de desenvolvimento de software que visa a resolução de problemas recorrentes em projetos de software. Embora não tenha tido a oportunidade de aplicá-los em ambiente profissional, sua aplicação é voltada a analise e solução de incidentes, facilita analise do codigo e manutenção, alem de manter o codigo mais organizado" },
    { markingColor: "first", logoImg: "./images/icons/lean-agile.png", name: "Lean", descriptionKnowledge: "Tenho Experiência Profissional com o Lean sua utilização é voltada a incidentes, portanto não utilizo tudo que ele tem a oferecer, os recursos que utilizo do Lean é o Kanban... O kanban é utilizado pelo cliente que solicita a criação e os cards são adicionados por eles, quando chega no ponto de desenvolvimento podemos colocar nossos comentarios e movimentar para o quadro 'pronto' quando concluido ou bloquea-lo temporariamente caso esteja na dependencia de outro profissional ou setor" },
    { markingColor: "first", logoImg: "./images/icons/scrum.png", name: "Scrum", descriptionKnowledge: "Tenho Experiência Profissional com o SCRUM, sua utilização é voltada a incidentes, portanto não utilizo tudo que ele tem a oferecer, os recursos que utilizo do SCRUM são: Dailys e Retrospectiva" },
    { markingColor: "second", logoImg: "./images/icons/lean-agile.png", name: "BEM CSS", descriptionKnowledge: "Tenho conhecimento do padrao BEM CSS, não tive a oportunidade de usar esta metodologia em ambiente profissional, mas possuo este portfolio que é baseado nesta metodologia" },
];

let serverApplicationList = [
    { markingColor: "first", logoImg: "./images/icons/tomcat.png", name: "Tomcat", descriptionKnowledge: "Tenho Experiência Profissional com o Tomcat, que é o servidor de aplicações utilizado nos projetos Java do cliente. Utilizo o Tomcat para a montagem do ambiente, configurações de banco de dados e debug das aplicações" },
    { markingColor: "second", logoImg: "./images/icons/nodejs.png", name: "NodeJS", descriptionKnowledge: "Tenho conhecimentos em NodeJS e já desenvolvi projetos pessoais utilizando essa tecnologia. Embora não tenha tido a oportunidade de utilizá-la em ambiente profissional, possuo habilidades na montagem de ambiente e construção de aplicações NodeJS, bem como na instalação de dependências e configurações necessárias para o seu pleno funcionamento: <br/> Acesso: <br/> <strong><a href='https://lyrics-redirect.vercel.app/'>Lyrcis Redirect - Version 2</a></strong> <br/> GitHub: <br/> <strong><a href='https://github.com/6ust/lyrics-redirect'>Lyrics Redirect - Version 2</a></strong>" },
];

let ideList = [
    { markingColor: "first", logoImg: "./images/icons/eclipse.png", name: "Eclipse", descriptionKnowledge: "Tenho Experiência Profissional no uso da IDE Eclipse. Utilizo-a diariamente para montar aplicações do cliente, analisá-las e solucionar problemas. Possuo conhecimento em decompilação de código utilizando essa IDE" },
    { markingColor: "first", logoImg: "./images/icons/vscode.png", name: "Visual Studio Code", descriptionKnowledge: "Tenho conhecimento do uso do Visual Studio Code. Utilizo diariamente para construir aplicações, projeto e script pessoais... Em Ambiente Profissional, utilizo ele tambem para construir e testar meus script python para atuomatização de tarefas... Acho o plugin Live Server muito util para testes locais com arquitetura simples de Linguagens: HTML, CSS e JS, Este portfolio foi construido utilizando esta arquitetura e IDE" },
];

let versionControlSystemsList = [
    { markingColor: "first", logoImg: "./images/icons/git.png", name: "GIT", descriptionKnowledge: "Tenho Experiência Profissional com o GIT. Utilizo o GIT diariamente para clonar repositórios, criar branches, adicionar e enviar alterações, verificar o histórico de alterações e colaborar com outros desenvolvedores em projetos compartilhados. No ambiente de trabalho, utilizo o GIT integrado com a plataforma de versionamento de código utilizada pelo cliente, o TFS. Com o conhecimento do GIT, consigo manter um histórico claro e organizado do código que desenvolvo." },
    { markingColor: "first", logoImg: "./images/icons/gitlab.png", name: "GitLab", descriptionKnowledge: "Tenho Experiência Profissional do uso do GitLab como plataforma de versionamento de codigo e controle de versão profissional, atualmente não o utilizo em ambiente profissional pois o cliente utiliza plataformas de compartilhamento diferentes como o TFS e Starteam. Mas ja o utilizei anteriormente em ambiente profissional, para baixar e subir alterações para um ramo especifico ou criar uma branch nova para esta alteração" },
    { markingColor: "first", logoImg: "https://companieslogo.com/img/orig/MFGP-1d9cbb74.png?t=1652326768", name: "StarTeam", descriptionKnowledge: "Tenho Experiência Profissional do uso do Starteam, como desenvolvedor terceiro meu conhecimento é limitado, as partes que apenas tenho atuação são na parte de: abrir chamados para criação do Ramo puxando os fontes da View Principal, realizar as alterações, fazer merge com a versão do ramo, subir a alteração, fazer a compilação do ramo em ambiente de TU, quando combinado com o cliente ou abrir chamado para uma area especifica realizar a compilação do ramo." },
    { markingColor: "second", logoImg: "./images/icons/github.png", name: "Github", descriptionKnowledge: "Tenho conhecimento do uso do Github como plataforma de versionamento de codigo e controle de versão, utilizo diariamente para publicar meus projetos de estudo e pessoais" },
];

let databaseList = [
    { markingColor: "first", logoImg: "./images/icons/sqlserver.png", name: "SQL Server", descriptionKnowledge: "Tenho Experiência Profissional com o uso do SQL Server, este é o banco de dados que o cliente que trabalho utiliza, entre as atividades que já realizei foram: Criação e Execução de Stored Procedures, alteração de dados e consulta" },
    { markingColor: "second", logoImg: "./images/icons/mysql.png", name: "MySQL", descriptionKnowledge: "Tenho conhecimento sobre uso do MySQL, como banco de dados Relacional, utilizo como banco de dados padrao para meus projetos pessoais e tive implementações apenas locais... Já utilizei os recursos de criação e execução de Queries e Stored Procedures, e integração com outras tecnologias... Python e Spring Framework" },
    { markingColor: "fourth", logoImg: "./images/icons/sqlite.png", name: "SQLite", descriptionKnowledge: "Tenho conhecimento do uso do SQLite, como banco de dados relacional, nunca o utilizei em ambiente profissional e ainda não o apliquei em projetos pessoais... Ele foi utilizado em um projeto academico que Github: <strong><a href='https://github.com/6ust/CryptoRate' target='_blank'>Crypto Rate</a></strong>" }
];

let othersList = [
    { markingColor: "first", logoImg: "./images/icons/office.png", name: "Pacote Office", descriptionKnowledge: "Tenho Experiência Profissional no uso de alguns Recursos do Pacote Office: os que mais utilizo são o Excel e Word para fazer documentações dos incidentes e contruir manuais e mapeamentos... Mas Alguns Testes são evidenciados por PowerPoint" },
    { markingColor: "second", logoImg: "./images/icons/react.png", name: "Componentização", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional, mas possuo um projeto de estudo que foi criado a partir desta tecnologia: GitHub<strong><a href='https://github.com/6ust/lyrics-react-redux' target='_blank'>Lyrics Redirect - React/Redux</a></strong> <br /> Aplicação: <br /> <strong><a href='https://lyricsredirectreact.netlify.app/' target='_blank'>Lyrics Redirect - React/Redux</a></strong>" },
    { markingColor: "second", logoImg: "./images/icons/css3.png", name: "Flexbox", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional, mas possuo um projeto de estudo que foi criado a partir desta tecnologia:  Github: <br/> <strong><a href='https://github.com/6ustav9/lyrics-redirect' target='_blank'>Versão 2 - Angular 14</a></strong> <br/> E ver o resultado final pela URL: <br/> <strong><a href='https://lyrics-redirect.vercel.app/' target='_blank'>Versão 2 - Angular 14</a></strong> " },
    { markingColor: "second", logoImg: "./images/icons/webpack.png", name: "WebPack", descriptionKnowledge: "Tenho conhecimento mas nunca tive a oportunidade de utiliza-lo em ambiente profissional, mas possuo um projeto de estudo que foi criado a partir desta tecnologia: GitHub<strong><a href='https://github.com/6ust/lyrics-react-redux' target='_blank'>Lyrics Redirect - React/Redux</a></strong> <br /> Aplicação: <br /> <strong><a href='https://lyricsredirectreact.netlify.app/' target='_blank'>Lyrics Redirect - React/Redux</a></strong>" },
    { markingColor: "fourth", logoImg: "./images/icons/email-marketing.png", name: "E-mail Marketing", descriptionKnowledge: "Tenho conhecimento mas nunca apliquei em projetos pessoais e em ambiente profissional, porem conheço o conceito de criação de pagina HTML para envio por email marketing e testes de envio/recebimento" },
];

let webTecnologiesList = [
    { markingColor: "second", logoImg: "./images/icons/css3.png", name: "CSS / CSS3", descriptionKnowledge: "Tenho conhecimento de CSS/ CSS3, utilizo o CSS como base para correção de alguns incidentes de aplicações Dynamic Web Project do Java elas são usadas com o framework JSF e tecnologia JSP... Possuo projeto pessoal construido unicamente em HTML, CSS e Javascript, como exemplo este portfolio"},
    { markingColor: "second", logoImg: "./images/icons/html5.png", name: "HTML / HTML5", descriptionKnowledge: "Tenho conhecimento de HTML/ HTML 5, utilizo o HTML como base para correção de alguns incidentes de aplicações Dynamic Web Project do Java elas são usadas com o framework JSF e tecnologia JSP... Possuo projeto pessoal construido unicamente em HTML, CSS e Javascript, como exemplo este portfolio"},
    { markingColor: "second", logoImg: "./images/icons/sass.png", name: "SASS", descriptionKnowledge: "Tenho conhecimento deste framework de pre processamento de CSS, possuo projetos pessoais com base neste Framework... <br /> GitHub: <br /><strong><a href='https://github.com/6ustav9/lyrics-redirect' target='_blank'>Lyrics Redirect - Version 2</a></strong> <br /> Aplicação: <br /> <strong><a href='https://lyrics-redirect.vercel.app' target='_blank'>Lyrics Redirect - Version 2</a></strong>. O Sass é uma extensão do CSS que permite a utilização de recursos como variáveis, mixins e funções para facilitar o desenvolvimento de estilos. Além disso, o Sass oferece a possibilidade de trabalhar com aninhamento de seletores, o que torna o código mais legível e fácil de manter"},
    { markingColor: "second", logoImg: "./images/icons/spa.png", name: "Single Page Application", descriptionKnowledge: "Tenho conhecimento de Single Page Application(SPA), embora eu não tenha tido a oportunidade de utilizar esta arquitetura em ambiente profissional, possuo este portfolio que é construído usando SPA"},
    { markingColor: "second", logoImg: "./images/icons/responsive.png", name: "Responsividade", descriptionKnowledge: "Tenho conhecimento de Responsividade, uma técnica fundamental de desenvolvimento web que permite que um site ou aplicativo se adapte a diferentes tamanhos de tela, tornando-o mais amigável para dispositivos móveis. Embora não tenha tido a oportunidade de aplicá-la em ambiente profissional, utilizei essa técnica em diversos projetos pessoais, incluindo este portfolio."},
    { markingColor: "fourth", logoImg: "./images/icons/sass.png", name: "SCSS", descriptionKnowledge: "Tenho conhecimento do pre processador de CSS o SCSS. Embora nunca o tenha utilizado em ambiente profissional, conheço o processo de desenvolvimento dele. O SCSS é baseado em Sass, que é uma extensão do CSS que permite a utilização de recursos como variáveis, mixins e funções para facilitar o desenvolvimento de estilos. O código SCSS é mais parecido com o CSS convencional e utiliza colchetes, diferentemente do Sass, que é baseado em identação."},
    { markingColor: "fourth", logoImg: "./images/icons/bootstrap.png", name: "Bootstrap", descriptionKnowledge: "Tenho conhecimento deste Framework baseado em CSS, ainda não tive oportunindade utiliza-lo em ambiente profissional." },
]
// TODOS OS ACIMA JA FORAM ATUALIZADOS E REVISADOS


// METODO UNICO DE PREENCHIMENTO DE QUADROS - INICIO
for(let idxListContainerNames = 0; idxListContainerNames < listContainerNames.length; idxListContainerNames++) {

    // CRIAÇÃO/MAPEAMENTO DO CONTAINER (QUADRO)    
    let container = document.getElementById(listContainerNames[idxListContainerNames].container);

    console.log(listContainerNames[idxListContainerNames].container.split("--")[1].replaceAll("-", " "));
    // CRIAÇÃO DE TITULO DO QUADRO
    let titleSection = document.createElement('h2');
    let txtTitle = document.createTextNode(capitalizeWords(listContainerNames[idxListContainerNames].nameInApp.replaceAll("-", " ")));

    titleSection.classList.add('skills__title');
    titleSection.appendChild(txtTitle);
    container.appendChild(titleSection);

    switch(listContainerNames[idxListContainerNames].container) {
        case "skills__knowledge-container__section--front":
            listItemsCycle(container, frontList);
            break;
        case "skills__knowledge-container__section--back":
            listItemsCycle(container, backList);
            break;
        case "skills__knowledge-container__section--database":
            listItemsCycle(container, databaseList);
            break;
        case "skills__knowledge-container__section--methodology":
            listItemsCycle(container, methodologyList);
            break;
        case "skills__knowledge-container__section--ide":
            listItemsCycle(container, ideList);
            break;
        case "skills__knowledge-container__section--server-application":
            listItemsCycle(container, serverApplicationList);
            break;
        case "skills__knowledge-container__section--shared-code":
            listItemsCycle(container, versionControlSystemsList);
            break;
        case "skills__knowledge-container__section--web-tecnologies":
            listItemsCycle(container, webTecnologiesList);
            break;
        case "skills__knowledge-container__section--others":
            listItemsCycle(container, othersList);
            break;
    }   
}
// METODO UNICO DE PREENCHIMENTO DE QUADROS - FIM

// FUNÇÃO PARA VARRER A LISTA DE ITENS - INICIO
function listItemsCycle(container, listItems) {
    
    // INICIALIZANDO A LISTA DO QUADRO
    let listElement = document.createElement('ul');
    listElement.classList.add('skills__list');

    for (let idxList = 0; idxList < listItems.length; idxList++) {
        let listItemElement = document.createElement('li');
        let txtItemList = document.createTextNode(listItems[idxList].name);
    
        let imgMarkingColor = document.createElement('div'); // CRIAÇÃO DO ELEMENTO MARKING COLOR
        let imgFrontItemlistElement = document.createElement('img');
        imgFrontItemlistElement.src = listItems[idxList].logoImg;
        imgFrontItemlistElement.classList.add("skills__list__item__img")
    
        listItemElement.classList.add('skills__list__item');
    
        listItemElement.appendChild(imgFrontItemlistElement);
    
        // VALIDAÇÃO DE CLASSE A SER ADICIONADA A MARKING COLOR - INICIO
        if(listItems[idxList].markingColor == "first") {
            imgMarkingColor.classList.add('circle__' + listItems[idxList].markingColor);
        } else if(listItems[idxList].markingColor == "third") {
            imgMarkingColor.classList.add('circle__' + listItems[idxList].markingColor);
        } else if(listItems[idxList].markingColor == "fourth") {
            imgMarkingColor.classList.add('circle__' + listItems[idxList].markingColor);
        } else if(listItems[idxList].markingColor == "second") {
            imgMarkingColor.classList.add('circle__' + listItems[idxList].markingColor);
        } else {
            imgMarkingColor.classList.add('circle__fourth');
        }
        // VALIDAÇÃO DE CLASSE A SER ADICIONADA A MARKING COLOR - FIM
    
        // ADICIONA CAMPO EXPANSÍVEL
        let expandableField = document.createElement('div');
    
        expandableField.innerHTML = listItems[idxList].descriptionKnowledge; //EDIÇÃO PARA UTILIZAÇÃO DE TAGS
        expandableField.style.display = 'none';
        expandableField.classList.add("skills__list__item--details-info");    

        // ADICIONA EVENTO DE CLIQUE PARA EXIBIR OU OCULTAR O CAMPO EXPANSÍVEL
        listItemElement.addEventListener('click', function() {
            if (expandableField.style.display === 'none') {
                expandableField.style.display = 'block';
            } else {
                expandableField.style.display = 'none';
            }
        });

        // INICIALIZAR A PAGINA COM CAMPOS DE EXPERIÊNCIA PROFISSIONAL ABERTOS
        if(listItems[idxList].markingColor === "first") {
            expandableField.style.display = 'block';
        }
        
        // PARAGRAFO TEXTO ITEM
        let itemTxtList = document.createElement('p');
        itemTxtList.appendChild(txtItemList);    
        
        // CRIANDO DIV DE AGRUPAMENTO DE IMAGEM, TEXTO E COR
        let itemListContainer = document.createElement("div");
        itemListContainer.classList.add("skills__list__item--details");

        // ADICIONANDO IMAGEM, TEXTO E COR
        itemListContainer.appendChild(imgFrontItemlistElement);
        itemListContainer.appendChild(itemTxtList);
        itemListContainer.appendChild(imgMarkingColor);
        
        listItemElement.appendChild(itemListContainer); // ADICIONANDO IMAGEM, TEXTO E COR
        listItemElement.appendChild(expandableField); // ADICIONANDO O CAMPO EXPANSIVEL

        // ADICIONANDO ITEM CONTEUDO FINAL AO ITEM DA LISTA
        listElement.appendChild(listItemElement);

        container.appendChild(listElement); //ADICIONANDO A ITEM A LISTA
    }
}
// FUNÇÃO PARA VARRER A LISTA DE ITENS - FIM

// FUNÇÃO PARA TRANSFORMAR A PRIMEIRA LETRA DE UMA PALAVRA APÓS O ESPAÇO EM MAIUSCULA - INICIO
function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
  // FUNÇÃO PARA TRANSFORMAR A PRIMEIRA LETRA DE UMA PALAVRA APÓS O ESPAÇO EM MAIUSCULA - FIM
  