    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        const userId = document.getElementById("userId").value;
        const password = document.getElementById("password").value;

        // Example hardcoded credentials
        const correctUserId = "admin";
        const correctPassword = "trackease123";

        if (userId === correctUserId && password === correctPassword) {
            // Redirect to dashboard if credentials are correct
            window.location.href = "dashboard.html";
        } else {
            // Display error message if credentials are incorrect
            const error = document.getElementById("error");
            error.textContent = "Invalid User ID or Password. Please try again.";
            error.style.display = "block";
        }
    });
