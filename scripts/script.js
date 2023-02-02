
function redirectToGithub(){
    window.open("https://github.com/Rubemvn");
}


VanillaTilt.init(document.querySelector(".vanillaTilt"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanillaTilt"));