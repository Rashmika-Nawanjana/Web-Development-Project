document.addEventListener("DOMContentLoaded", () => {
    // Select all image boxes (adjusted class names to match the CSS)
    const imageBoxes = document.querySelectorAll('.image-box-1, .image-box-2, .image-box-3, .image-box-4, .image-box-5, .image-box-6');
  
    // Apply hover animations to image boxes
    imageBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transition = 'transform 0.3s ease';
            box.style.transform = 'scale(1.05)'; // Pop-out effect
        });
  
        box.addEventListener('mouseout', () => {
            box.style.transition = 'transform 0.3s ease';
            box.style.transform = 'scale(1)'; // Reset the scale
        });
    });
  
    // If you have any header items, adjust this part accordingly
    // Example:
    const headerItems = document.querySelectorAll('.header-item'); // Update this class if needed
  
    headerItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transition = 'transform 0.3s ease';
            item.style.transform = 'scale(1.1)'; // Enlarge the item
        });
  
        item.addEventListener('mouseout', () => {
            item.style.transition = 'transform 0.3s ease';
            item.style.transform = 'scale(1)'; // Reset the scale
        });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Image hover effect
    const imageBoxes = document.querySelectorAll('.image-box-1, .image-box-2, .image-box-3, .image-box-4, .image-box-5, .image-box-6');

    imageBoxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.transition = 'transform 0.3s ease';
            box.style.transform = 'scale(1.05)';
        });

        box.addEventListener('mouseout', () => {
            box.style.transition = 'transform 0.3s ease';
            box.style.transform = 'scale(1)';
        });
    });

    // Form submit popup
    const form = document.querySelector('.contact-form form');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent actual form submission
        popup.style.display = 'flex'; // Show the popup
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none'; // Hide the popup on button click
    });
});


// sign in js

document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popupContainer");
    const popupTitle = document.getElementById("popupTitle");
    const popupMessage = document.getElementById("popupMessage");
    const popupButton = document.getElementById("popupButton");
    const usernameInputWrapper = document.getElementById("usernameInputWrapper");

    let isLoginMode = true; // Track login/signup mode
    let isLoggedIn = false; // Track if user is logged in
    let loggedInUser = ""; // Store logged-in username

    const profileImage = document.getElementById("profileImage");
    
    if (!profileImage) {
        console.error("Profile image element not found.");
        return;
    }

    // Function to toggle popup visibility
    function togglePopup() {
        popupContainer.style.display = "flex"; // Show the popup
        if (isLoggedIn) {
            popupTitle.textContent = "Welcome!";
            popupMessage.textContent = `Hello, ${loggedInUser}!`;
            popupButton.textContent = "Sign Out";
            popupButton.onclick = logout; // Logout button
            usernameInputWrapper.style.display = "none"; // Hide username input
        } else {
            popupTitle.textContent = isLoginMode ? "Login" : "Sign Up";
            popupMessage.innerHTML = isLoginMode
                ? `Don't have an account? <a href="#" onclick="toggleAuthMode()">Sign Up</a>`
                : `Already have an account? <a href="#" onclick="toggleAuthMode()">Login</a>`;
            popupButton.textContent = "Submit";
            popupButton.onclick = submitForm; // Submit button for form
            usernameInputWrapper.style.display = "block"; // Show username input
        }
    }

    // Handle login/signup toggle
    function toggleAuthMode() {
        isLoginMode = !isLoginMode;
        togglePopup(); // Re-render popup with new mode
    }

    // Handle form submission
    function submitForm() {
        const username = document.getElementById("username").value;
        if (username === "") {
            alert("Please enter a username.");
            return;
        }

        if (isLoginMode) {
            // Simulate login success
            isLoggedIn = true;
            loggedInUser = username;
            alert(`Welcome, ${loggedInUser}!`);
        } else {
            // Simulate sign-up success
            alert("Account created successfully! Please log in.");
            toggleAuthMode(); // Switch to login mode after signup
        }
        togglePopup(); // Close the popup after submit
    }

    // Logout function
    function logout() {
        isLoggedIn = false;
        loggedInUser = "";
        togglePopup(); // Reopen the popup for login
    }

    // Close the popup
    function closePopup() {
        popupContainer.style.display = "none"; // Hide the popup
    }

    // Event listener for the profile image click
    profileImage.addEventListener("click", togglePopup); // Trigger the popup when clicked
});

profileImage.addEventListener("click", function() {
    console.log("Profile image clicked!");
    popupContainer.style.display = "flex"; // Show popup
});