let navbar = document.querySelector(".navBar");
let projects = document.querySelector(".projects");
let extras = document.querySelector(".extras");
let cover = document.querySelector(".cover");

let description = {
	calculadora:
		"Essa calculadora foi desenvolvida em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	"jogo-da-memoria":
		"Esse Jogo da Memória foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	"jogo-da-velha":
		"Esse Jogo da Velha foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	portifolio:
		"Esse Portifolio foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	contador:
		"Esse Contador foi desenvolvido em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	"copia-youtube":
		"Essa Copia do Youtube foi desenvolvida em HTML, CSS, e Javascript. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	"mural-de-posts":
		"Esse Mural de Posts foi desenvolvido em NodeJs, Javascript, Bootstrap 5 e HTML. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	"site-dbv-felinos":
		"Esse Site foi desenvolvido em Reactjs, NextJs, Styled Components. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	accounts:
		"Esse projeto foi desenvolvido em NodeJs. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	"secret-word":
		"Secret Word é um jogo de adivinhação de palavras que foi feito em ReactJs. <br> Para conhecer mais do projeto, clique nos botões abaixo:",
	cenoura:
		"Cenoura é um site de votação SIMPLES com front e backend desenvolvido com ReactJs e NodeJs <br> Para conhecer mais do projeto, clique nos botões abaixo:",
};

let titleProject = {
	calculadora: "Calculadora",
	"jogo-da-memoria": "Jogo da Memoria",
	"jogo-da-velha": "Jogo da Velha",
	portifolio: "Portifólio",
	contador: "Contador",
	"copia-youtube": "Copia do Youtube",
	"mural-de-posts": "Mural de Posts",
	accounts: "Accounts",
	"secret-word": "Secret Word",
	cenoura: "Cenoura",
	"site-dbv-felinos": "Site DBV Felinos",
};

function openSection(id) {
	document.body.style.overflow = "hidden";
	navbar.style.filter = "blur(3px)";
	projects.style.filter = "blur(3px)";
	cover.style.display = "block";

	createSectionProjects(id);
}

function createSectionProjects(id) {
	extras.innerHTML = `
                <div class="extraProjectSection" id="${id}Section">
                    <div class="imagesExtraSection">
                        <img src="./images/previews/${id}.png" alt="">
                    </div>
                    <div class="title">
                        <h3>${titleProject[id]}</h3>
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
                </div>`;
	if (id == "site-dbv-felinos") {
		let titleDivImg = document.querySelector(".title").lastElementChild;

		titleDivImg.innerHTML = `
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="../../assets/images/icons/nextjs.svg" />
            <img src="../../assets/images/icons/styled-components.png" />
            `;
	}

	if (id == "mural-de-posts") {
		let titleDivImg = document.querySelector(".title").lastElementChild;

		titleDivImg.innerHTML = `
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
            `;
	}
	if (id == "accounts") {
		let titleDivImg = document.querySelector(".title").lastElementChild;

		titleDivImg.innerHTML = `
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            `;

		if (id == "secret-word") {
			let titleDivImg = document.querySelector(".title").lastElementChild;

			titleDivImg.innerHTML = `            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
            `;
		}
	}
}

function closeSection() {
	let projectSection = document.querySelector(".extraProjectSection");

	projectSection.remove();

	document.body.style.overflow = "initial";
	cover.style.display = "none";
	navbar.style.filter = "none";
	projects.style.filter = "none";
}

function buttonGithub(id) {
	if (id == "portifolio") {
		window.open("https://github.com/Rubemvn/rubemvn.github.io");
	} else if (id == "site-dbv-felinos") {
		window.open("https://github.com/Rubemvn/felinos");
	} else {
		window.open(`https://github.com/Rubemvn/${id}`);
	}
}
function buttonLink(id) {
	if (id == "mural-de-posts") {
		window.open(`https://github.com/Rubemvn/${id}`);
	} else if (id == "site-dbv-felinos") {
		window.open("https://felinosdbv.com.br");
	} else if (id == "accounts") {
		window.open(`https://github.com/Rubemvn/${id}`);
	} else if (id == "portifolio") {
		window.open("https://rubemvn.github.io/");
	} else if (id == "secret-word") {
		window.open("https://secret-word-eta.vercel.app/");
	} else {
		window.open(`https://rubemvn.github.io/${id}`);
	}
}

cover.addEventListener("click", () => {
	closeSection();
});
