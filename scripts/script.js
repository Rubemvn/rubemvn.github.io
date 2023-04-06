
function redirectToGithub(){
    window.open("https://github.com/Rubemvn");
}
function redirectToDownloadCv(){
    window.open("https://drive.google.com/file/d/164sHGiCSQg7sDBUgl45ErIACMWAw6eXU/view?usp=sharing");
}


VanillaTilt.init(document.querySelector(".vanillaTilt"), {
    max: 25,
    speed: 400
});

//It also supports NodeList
VanillaTilt.init(document.querySelectorAll(".vanillaTilt"));