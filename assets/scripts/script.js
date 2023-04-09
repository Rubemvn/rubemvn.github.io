
function redirectToGithub() {
    window.open("https://github.com/Rubemvn");
}

function openCV(){
    window.open("../assets/docs/Curriculo Rúbem Vieira.pdf")
}

let enableVanillaTilt = () => {
    const width = window.screen.width;
    let skills = document.querySelector(".skills")

    if (width >= 1000) {
        for (let i = 0; i < skills.children.length; i++) {
            skills.children[i].classList.add("vanillaTilt")
        }
    } else {
        for (let i = 0; i < skills.children.length; i++) {
            skills.children[i].classList.value = "cardiAm"
        }

    }
}


setTimeout(() => {
    VanillaTilt.init(document.querySelector(".vanillaTilt"), {
        max: 25,
        speed: 400
    });

    //It also supports NodeList
    VanillaTilt.init(document.querySelectorAll(".vanillaTilt"));
}, 2000);

