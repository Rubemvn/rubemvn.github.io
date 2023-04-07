let navbar = document.querySelector(".navBar")
let projects = document.querySelector(".projects")
let extras = document.querySelector(".extras")
let cover = document.querySelector(".cover")

let description = {
    "calculadora": "Essa calculadora foi desenvolvida em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
    "jogo-da-memoria": "Esse Jogo da Memória foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
    "jogo-da-velha": "Esse Jogo da Velha foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
    "portifolio": "Esse Portifolio foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
    "contador": "Esse Contador foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
    "copia-youtube": "Essa Copia do Youtube foi desenvolvida em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
    "mural-de-posts": "Esse Mural de Posts foi desenvolvido em Node.js, Javascript, Bootstrap 5 e HTML. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
}


function openSection(id) {

    document.body.style.overflow = "hidden";
    navbar.style.filter = "blur(3px)"
    projects.style.filter = "blur(3px)"
    cover.style.display = "block"
    

    createSectionProjects(id)
}


function createSectionProjects(id){
    console.log(id)

    console.log(description[id])
    extras.innerHTML = `
                <div class="extraProjectSection" id="${id}Section">
                    <div class="imagesExtraSection">
                        <img src="./images/previews/${id}.png" alt="">
                        <button id="btnClose" onclick="closeSection('${id}')">
                            <img src="./images/icons/close.png" alt="">
                        </button>
                    </div>
                    <div class="title">
                        <h3>${id}</h3>
                        <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
                        </div>
                    </div>
                    <div class="description">
                        <p>
                        ${description[id]}
                        </p>
                    </div>
                    <div class="links">
                        <button onclick="buttonGithub('${id}')"><img style="width: 30px;" src="./images/icons/github.png" alt=""></button>
                        <button onclick="buttonLink('${id}')"><img style="width: 20px;" src="./images/icons/link.png" alt=""></button>
                    </div>
                </div>`
}

function closeSection(id){

    console.log(id)
    let idSection = document.querySelector(`#${id}Section`)
    idSection.remove();

    document.body.style.overflow = "initial";
    cover.style.display = "none"
    navbar.style.filter = "none"
    projects.style.filter = "none"
}