document.addEventListener("DOMContentLoaded", function() {
    const communityImages = document.querySelectorAll(".community a");

    communityImages.forEach(image => {
        image.addEventListener("click", function(event) {
            const location = this.querySelector("img").alt;
            console.log(`Opening Google Maps for: ${location}`);
        });
    });
});
