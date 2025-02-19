document.addEventListener("DOMContentLoaded", () => {
    /* --------------------------
       Image Hover Animations
    --------------------------- */
    const imageBoxes = document.querySelectorAll(
      ".image-box-1, .image-box-2, .image-box-3, .image-box-4, .image-box-5, .image-box-6"
    );
  
    imageBoxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.style.transition = "transform 0.3s ease";
        box.style.transform = "scale(1.05)"; // Pop-out effect
      });
  
      box.addEventListener("mouseout", () => {
        box.style.transition = "transform 0.3s ease";
        box.style.transform = "scale(1)"; // Reset the scale
      });
    });
  
    /* --------------------------
       Contact Form Popup
    --------------------------- */
    const form = document.querySelector(".contact-form form");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopup");
  
    // Initially hide the popup
    if (popup) {
      popup.style.display = "none";
    }
  
    if (form && popup && closePopupBtn) {
      form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission
        popup.style.display = "flex"; // Show the popup after form submission
      });
  
      closePopupBtn.addEventListener("click", () => {
        popup.style.display = "none"; // Hide the popup on button click
      });
    }
  
    /* --------------------------
       Navigation Click Handlers
    --------------------------- */
    const communitiesLink = document.querySelector(".communities");
    if (communitiesLink) {
      communitiesLink.onclick = () => {
        window.location.href = "other-pages/communities page/Communities.html";
      };
    }
    const aboutLink = document.querySelector(".about");
    if (aboutLink) {
      aboutLink.onclick = () => {
        window.location.href = "other-pages/About-page/index.html";
      };
    }
    const contactLink = document.querySelector(".contact");
    if (contactLink) {
      contactLink.onclick = () => {
        window.location.href = "other-pages/Contact-us/index.html";
      };
    }
  });
  