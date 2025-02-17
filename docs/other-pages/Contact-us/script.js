document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from reloading page

        // Get input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            formStatus.style.color = "red";
            formStatus.textContent = "All fields are required.";
            return;
        }

        // Simulate sending message (you need a backend for real emails)
        formStatus.style.color = "green";
        formStatus.textContent = "Message sent successfully!";

        // Clear form
        form.reset();

        // Hide status message after 3 seconds
        setTimeout(() => {
            formStatus.textContent = "";
        }, 3000);
    });
});
