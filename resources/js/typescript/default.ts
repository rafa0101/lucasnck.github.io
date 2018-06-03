/**
 * 
 * PORTFOLIO TYPESCRIPT
 * 
 * COMPILER: tsc -watch --outDir ..\ .\default.ts
 * 
 * 
*/

// jquery
declare var $;

var menu = [
    {

        "title": "Sobre mim",
        "link": "#about"
    },
    {

        "title": "Habilidades",
        "link": "#skills"
    },
    {

        "title": "Projetos",
        "link": "#projects"
    },
    {

        "title": "Carreira",
        "link": "#jobs"
    },
    {

        "title": "Formação Acadêmica",
        "link": "#academic"
    },
    {

        "title": "Idiomas",
        "link": "#languages"
    }

]

var social = [
    {

        "title": "Facebook",
        "link": "https://www.instagram.com/luscanck/",
        "icon": "fab fa-facebook-f"
    },
    {

        "title": "Instagram",
        "link": "https://www.instagram.com/luscanck/",
        "icon": "fab fa-instagram"
    },
    {

        "title": "Linkedin",
        "link": "https://br.linkedin.com/in/lucas-ribeiro-73a89511b",
        "icon": "fab fa-linkedin-in"
    },
    {

        "title": "Github",
        "link": "https://github.com/lucasnck",
        "icon": "fab fa-github"
    }
]

var skills = [
    {

        "name": "Java",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 90,
        "description": "Desenvolvimento com JSF",
        "experience": ""
    },
    {

        "name": "JavaScript",
        "type": "Front-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {

        "name": "TypeScript",
        "type": "Full Stack",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "Java Android",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "C/C++",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 30,
        "description": "",
        "experience": ""
    },
    {

        "name": "PHP",
        "type": "Back-end",
        "technologyType": "Linguagem de programação",
        "knowledgePercentage": 20,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSF",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 90,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSP",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 60,
        "description": "",
        "experience": ""
    },
    {

        "name": "Node.js",
        "type": "Back-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 40,
        "description": "",
        "experience": ""
    },
    {

        "name": "Angular",
        "type": "Front-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 20,
        "description": "",
        "experience": ""
    },
    {

        "name": "React",
        "type": "Front-end",
        "technologyType": "Javascript Framework",
        "knowledgePercentage": 10,
        "description": "",
        "experience": ""
    },
    {

        "name": "jQuery",
        "type": "Front-end",
        "technologyType": "Javascript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Bootstrap",
        "type": "Front-end",
        "technologyType": "Javascript Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "SASS",
        "type": "Front-end",
        "technologyType": "Linguagem de Marcação",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "CSS3",
        "type": "Front-end",
        "technologyType": "Linguagem de Marcação",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "HTML5",
        "type": "Front-end",
        "technologyType": "Linguagem de Marcação",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Primefaces",
        "type": "Front-end",
        "technologyType": "JSF Library",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "JPA",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 100,
        "description": "",
        "experience": ""
    },
    {

        "name": "Criteria API",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "Hibernate",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "PostgreSQL",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    },
    {

        "name": "MySQL",
        "type": "Back-end",
        "technologyType": "Database",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "Jersey",
        "type": "Back-end",
        "technologyType": "Java Framework",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "Blender",
        "type": "Game Development",
        "technologyType": "Visual software",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "LWJGL",
        "type": "Game Development",
        "technologyType": "Java Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "OpenGL",
        "type": "Game Development",
        "technologyType": "C/C++ Library",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "MVC",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "UML",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "SCRUM",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "JSON",
        "type": "Front-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "JAX-RS",
        "type": "Back-end",
        "technologyType": "Programming knowledge",
        "knowledgePercentage": 0,
        "description": "",
        "experience": ""
    },
    {

        "name": "Apache TOMCAT",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 80,
        "description": "",
        "experience": ""
    },
    {

        "name": "TOMEE",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 70,
        "description": "",
        "experience": ""
    },
    {

        "name": "GLASSFISH",
        "type": "Back-end",
        "technologyType": "Server",
        "knowledgePercentage": 50,
        "description": "",
        "experience": ""
    }

]

var projects = [
    {
        "name": "FARMUP",
        "type": "Back-end",
        "logo": "resources/img/projects/farmup.png",
        "technologies": "Java, JSF, Hibernate, CriteriaAPI, JPA, Bootstrap4, SASS, XHMTL, jQuery, Typescript, Primefaces, PostgreSQL, Font Awesome, DigitalOcean, Ubuntu",
        "description": "ERP para agropecuária",
        "category": "autônomo",
        "link": "http://farmup.com.br",
        "status": "Em desenvolvimento"
    },
    {
        "name": "UCODE",
        "type": "Back-end",
        "logo": "resources/img/projects/ucode.png",
        "technologies": "Java, JSF, Hibernate, CriteriaAPI, JPA, Bootstrap4, SASS, XHMTL",
        "description": "Sistema para auxiliar no desenvolvimento de projetos",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "Em desenvolvimento"
    },
    {
        "name": "MAGE API",
        "type": "Front-end",
        "logo": "resources/img/favicon.png",
        "technologies": "JavaScript, Typescript, React, JSON, HTML5, SASS",
        "description": "The new way to make requests in API",
        "category": "autônomo",
        "link": "http://teste.com",
        "status": "Em desenvolvimento"
    },
    {
        "name": "eXparser",
        "type": "Back-end",
        "logo": "resources/img/projects/exparser.png",
        "technologies": "Java",
        "description": "Simple XML and XHTML parser for a Java Abstract Tree",
        "category": "autônomo",
        "link": "https://github.com/lucasnck/eXparser",
        "status": "Concluído"
    },
    {
        "name": "ProjectParser",
        "type": "Back-end",
        "logo": "resources/img/projects/projectparser.png",
        "technologies": "Java",
        "description": "API for create and update files structures of a project object",
        "category": "autônomo",
        "link": "https://github.com/lucasnck/ProjectParser",
        "status": "concluído"
    },
    {
        "name": "Ponto das Tintas",
        "type": "Front-end",
        "logo": "https://www.pontodastintas.com.br/static/store/Captura de Tela 2017-11-13 às 11-da541d43-9c1a-4045-b5e4-415fb279b8bc.png",
        "technologies": "Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://www.pontodastintas.com.br/",
        "status": "concluído"
    },
    {
        "name": "Collisione Boutique",
        "type": "Front-end",
        "logo": "",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Mayra Sartori",
        "type": "Front-end",
        "logo": "",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Cordeiro Atopeças",
        "type": "Front-end",
        "logo": "https://cordeiro.idealeware.com.br/static/store/Logo top-ec660ecb-c517-4158-b7d9-0993364476ee.png",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://cordeiro.netlify.com/",
        "status": "Em desenvolvimento"
    },
    {
        "name": "Flor de Coco",
        "type": "Front-end",
        "logo": "https://cdn.awsli.com.br/400x300/500/500121/logo/74282c854e.png",
        "technologies": "Bootstrap, JavaScript, CSS3",
        "description": "",
        "category": "Admake",
        "link": "http://flordecoco.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Refrigás",
        "type": "Front-end",
        "logo": "",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://refrigas.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Walfanger",
        "type": "Front-end",
        "logo": "https://www.walfanger.com.br/static/store/walfanger-54afc0c3-724e-4203-bd7f-6d899d6a1ed6.png",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://walfanger.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Astuti Casa",
        "type": "Front-end",
        "logo": "",
        "technologies": "Angular, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "https://astuticasa.com.br/",
        "status": "Concluído"
    },
    {
        "name": "Berve Enxovais",
        "type": "Front-end",
        "logo": "https://images.tcdn.com.br/605938/themes/56/img/logo-berve-horizontal.png",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "http://berve.com.br/",
        "status": "concluído"
    },
    {
        "name": "Blog Loja Cuba",
        "type": "Front-end",
        "logo": "http://blog.lojacuba.com.br/wp-content/themes/lojacubablog/resources/images/logo.png",
        "technologies": "PHP, Twig, Bootstrap4, JavaScript, SASS",
        "description": "",
        "category": "Admake",
        "link": "http://blog.lojacuba.com.br/",
        "status": "concluído"
    },
]

var jobs = [
    {
        "name": "Admake",
        "logo": "resources/img/jobs/admake.svg",
        "post": "Desenvolvedor front-end",
        "description": "",
        "category": "CLT",
        "link": "http://admake.com.br",
        "start": "21/08/2017",
        "end": ""
    },
    {
        "name": "Secretaria da Educação do Estado de São Paulo",
        "logo": "resources/img/jobs/seesp.svg",
        "post": "Servidor Público",
        "description": "",
        "category": "Efetivo",
        "link": "",
        "start": "01/03/2013",
        "end": "20/08/2017"
    },
    {
        "name": "TNT Technology",
        "logo": "resources/img/jobs/tnt.svg",
        "post": "Estágio como desenvolvedor front-end",
        "description": "",
        "category": "Estágiário",
        "link": "",
        "start": "01/08/2016",
        "end": "01/10/2016"
    }
]

var academic = [
    {
        "school": "Faculdade de Tecnologia de Lins - Prof. Antônio Seabra",
        "course": "Análise e Desenvolvimento de Sistemas",
        "description": "",
        "type": "Ensino Superior",
        "start": "02/2013",
        "end": "06/2016"
    },
    {
        "school": "EE 21 de Abril - Lins/SP",
        "course": "Ensino Médio",
        "description": "",
        "type": "Ensino Médio",
        "start": "",
        "end": "12/2010"
    },
    {
        "school": "Udemy",
        "course": "Front-end",
        "description": "",
        "type": "Curso",
        "start": "2018",
        "end": ""
    }
]

var languages = [
    {
        "name": "Português",
        "level": "Nativo",
    },
    {
        "name": "Inglês",
        "level": "Técnico",
    }
]


/**
 * Components Helper Class
*/
class Components {

    /**
     * Typing text
    */
    static typeWriter(elementId: any, text: string, index: number) {

        if (index < text.length) {

            let string = elementId.html();
            string += text.charAt(index);
            $(elementId).html(string);
            index++;

            setTimeout(function () {
                Components.typeWriter(elementId, text, index);
            }, 100);
        }
    }

    static smoothScrolling() {
        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .on("click", function (event) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                    &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, 1000, function () {
                            // Callback after animation
                            // Must change focus!
                            var $target = $(target);
                            $target.focus();
                            if ($target.is(":focus")) { // Checking if the target was focused
                                return false;
                            } else {
                                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                                $target.focus(); // Set focus again
                            };
                        });
                    }
                }
            });
    }

    static deactivateHeader() {
        if (!$header.hasClass(scrollClass)) {
            $header.addClass(scrollClass);
        }
    }

    static activateHeader() {
        if ($header.hasClass(scrollClass)) {
            $header.removeClass(scrollClass);
        }
    }

    static checkHeader() {
        if ($(window).scrollTop() > activateAtY) {
            Components.deactivateHeader();
        } else {
            Components.activateHeader();
        }
    }

    static findObjectByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return array[i];
            }
        }
        return null;
    }

    static changeDevtype(type) {

        $(".other-skills ul").empty();
        $(".section").empty();
        $("#projects .card-columns").empty();

        setTimeout(function () {

            let skillsByTechType = []
            skills.forEach(element => {

                if (type == null || (element.type == type || element.type == "Full Stack")) {

                    var imageUrl = `resources/img/skills/${element.name.replace("/", "-").toLowerCase()}.png`;
                    var image = new Image();
                    image.src = imageUrl;
                    image.onload = function () {
                        $(".other-skills ul").append(`
                        <li data-name="${element.name}">
                            <a href="#${element.name}">
                                <img src="${imageUrl}"> 
                                <span class="title">${element.name}</span>
                            </a>
                        </li>
                    `);
                    }
                    image.onerror = function () {
                        imageUrl = `resources/img/favicon.png`;
                        $(".other-skills ul").append(`
                        <li class="no-image" data-name="${element.name}">
                            <a href="#${element.name}">
                                <img src="${imageUrl}"> 
                                <span class="title">${element.name}</span>
                            </a>
                        </li>
                    `);
                    }

                    if (element.knowledgePercentage > 0) {
                        let skill = Components.findObjectByKey(skillsByTechType, "name", element.technologyType);
                        if (skill == null) {
                            skill = { "name": element.technologyType, "elements": [] };
                            skillsByTechType.push(skill);
                        }
                        skill.elements.push(element);
                    }
                }

            });

            skillsByTechType.forEach(element => {
                var section = $(`
                        <div class="section">
                            <h5>${element.name}</h5>
                            <ul>
                            </ul>
                        </div>
                    `)
                section.appendTo("#skills .sections");

                element.elements.forEach(skill => {
                    if (skill.knowledgePercentage > 0) {
                        if (type == null || (skill.type == type || skill.type == "Full Stack")) {

                            section.find("ul").append(`
                                <li data-name="${skill.name}">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style="width: ${skill.knowledgePercentage}%" aria-valuenow="${skill.knowledgePercentage}" aria-valuemin="0" aria-valuemax="100">
                                            ${skill.name}
                                        </div>
                                    </div>
                                </li>
                            `);
                        }
                    }
                });

            });

            projects.forEach(element => {

                if (type == null || (element.type == type || element.type == "Full Stack")) {

                    var imageUrl = `${element.logo}`;
                    var image = new Image();
                    image.src = imageUrl;

                    image.onload = function () {
                        $("#projects .card-columns").append(`
                            <div class="card${element.status == "Em desenvolvimento" ? ' development' : ''}">
                                <img class="card-img-top" src="${element.logo}" alt="${element.name}">
                                ${element.status == "Em desenvolvimento" ? '<span class="badge badge-dark">' + element.status + '</span>' : ''}
                                <div class="card-body">
                                    <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                                    <p class="card-text">
                                        ${element.description}
                                    </p>
                                    <p class="card-text">
                                        <small class="text-muted">${element.technologies}</small>
                                    </p>
                                </div>
                            </div>
                        `)
                    }
                    image.onerror = function () {
                        $("#projects .card-columns").append(`
                            <div class="card${element.status == "Em desenvolvimento" ? ' development' : ''}">
                                ${element.status == "Em desenvolvimento" ? '<span class="badge badge-dark">' + element.status + '</span>' : ''}
                                <div class="card-body">
                                    <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                                    <p class="card-text">
                                        ${element.description}
                                    </p>
                                    <p class="card-text">
                                        <small class="text-muted">${element.technologies}</small>
                                    </p>
                                </div>
                            </div>
                        `)
                    }

                }

            });

            $(".dev-type-modal").modal('hide')

        }, 2000);


    }

    static compare(a, b) {
        if (a.knowledgePercentage > b.knowledgePercentage)
            return -1;
        if (a.knowledgePercentage < b.knowledgePercentage)
            return 1;
        return 0;
    }

}

var $header = $('#header'),
    scrollClass = 'on-scroll',
    activateAtY = 80;


$(window).scroll(function () {
    Components.checkHeader();
});


$(document).ready(function () {

    var imageUrl = `resources/img/photo.jpg`;
    var image = new Image();
    image.src = imageUrl;
    image.onload = function () {

        // Title effect
        let title = "LUCAS RIBEIRO";
        let timer = title.length * 100;
        Components.typeWriter($("#full-banner .title"), title, 0);

        // Show Photo
        setTimeout(function () {
            $("#full-banner .title img").addClass("show");
        }, timer);

    }

    // Check header position
    Components.checkHeader();

    menu.forEach(element => {
        $("#header .col-menu ul").append(`
            <li>
                <a class="nav-link" href="${element.link}" alt="${element.title}">${element.title}</a>
            </li>
        `)
    });

    social.forEach(element => {
        $("#header .col-social-links ul").append(`
            <li>
                <a class="nav-link" href="${element.link}" alt="${element.title}"><i class="${element.icon}"></i></a>
            </li>
        `)
    });

    skills.sort(Components.compare);
    Components.changeDevtype(null);

    jobs.forEach(element => {

        var imageUrl = `${element.logo}`;
        var image = new Image();
        image.src = imageUrl;

        image.onload = function () {
            $("#jobs .card-columns").append(`
                <div class="card ${element.end == '' ? 'border-success' : ''}">
                    <img class="card-img-top" src="${element.logo}" alt="${element.name}">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                        <p class="card-text">
                            ${element.description}
                        </p>
                        <p class="card-text">
                            <small class="text-muted">${element.start} ${element.end != '' ? '- ' + element.end : ''}</small>
                        </p>
                    </div>
                </div>
            `)
        }
        image.onerror = function () {
            $("#jobs .card-columns").append(`
                <div class="card ${element.end == '' ? 'border-success' : ''}">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${element.link}">${element.name}</a></h5>
                        <p class="card-text">
                            ${element.description}
                        </p>
                        <p class="card-text">
                            <small class="text-muted">${element.start} ${element.end != '' ? '- ' + element.end : ''}</small>
                        </p>
                    </div>
                </div>
            `)
        }

    });

    academic.forEach(element => {
        $("#academic .card-columns").append(`
            <div class="card ${element.end == '' ? 'bg-secondary' : ''}">
                <div class="card-body">
                    <h5 class="card-title"><a href="${element.link}">${element.school}</a></h5>
                    <span class="d-block course">${element.course}</span>
                    <span class="type badge badge-dark">${element.type}</span>
                    <p class="card-text">
                        ${element.description}
                    </p>
                    <p class="card-text">
                        <small class="text-muted">${element.start} ${element.end != '' ? '- ' + element.end : ''}</small>
                    </p>
                </div>
            </div>
        `)
    });

    languages.forEach(element => {
        $("#languages .card-columns").append(`
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">
                        ${element.level}
                    </p>
                </div>
            </div>
        `)
    });

    // Bootstrap scrollspy
    $('body').scrollspy({ target: '#navbar-section' })

    // Mobile Menu
    if ($(window).width() <= 767) {
        $(".category-menu").insertAfter("#header");
        $(".category-menu").removeClass("my-auto col-sm-6");
    }

    $(document).on("click", ".btn-toggle-menu, #navbar-section .nav-link", function () {
        $(".category-menu").toggleClass("active")
    })

    $(document).on("click", ".dev-type a", function (event) {
        event.preventDefault();
        let element = event.currentTarget;
        if ($(element).parent().hasClass("active")) {
            $(".dev-type").removeClass("active")
            Components.changeDevtype(null);
        } else {
            $(".dev-type").removeClass("active")
            $(element).parent().addClass("active")
            $(".dev-type-modal").modal('show')
            Components.changeDevtype($(element).attr("href"));
            $('html, body').animate({
                scrollTop: $("#skills").offset().top
            }, 2000);
        }
    })


    // Call components
    Components.smoothScrolling();

})