window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 30){
        header.style.background = "rgba(23,61,99,.95)";
        header.style.backdropFilter = "blur(15px)";
        header.style.padding = "15px 80px";
    }

    else{
        header.style.background = "transparent";
        header.style.padding = "25px 80px";
    }

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});