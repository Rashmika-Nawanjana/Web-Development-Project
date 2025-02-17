document.addEventListener("DOMContentLoaded", function() {
    const communityImages = document.querySelectorAll(".community a");

    communityImages.forEach(image => {
        image.addEventListener("click", function(event) {
            const location = this.querySelector("img").alt;
            console.log(`Opening Google Maps for: ${location}`);
        });
    });
});



document.querySelector(".logo").onclick = function() {
    window.location.href = "../../index.html"};

document.querySelector(".about").onclick = function() {
        window.location.href = "../About-page/index.html"};

document.querySelector(".contact").onclick = function() {
        window.location.href = "../Contact-us/index.html"};