document.addEventListener('DOMContentLoaded', function() {
    // --- 1. Login Form Handling (index.html) ---
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const loginMessage = document.getElementById('loginMessage');
            
            // Simple Demo Login Check
            if (username === '12345' && password === '12312') {
                // Store username in Local Storage
                localStorage.setItem('hospital_user', username);
                
                // Redirect to home.html
                window.location.href = 'home.html';
            } else {
                loginMessage.textContent = 'Invalid username or password.';
            }
        });
    }

    // --- 2. Logout Handling (Used on all non-login pages) ---
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Remove username from Local Storage
            localStorage.removeItem('hospital_user');
            
            // Redirect to index.html (Login Page)
            window.location.href = 'index.html';
        });
    }

    // --- 3. Authentication Check & Username Display ---
    const storedUsername = localStorage.getItem('hospital_user');
    
    // Function to check if the user is logged in
    function checkAuth() {
        // If the user is not logged in AND the current page is not the login page, redirect
        if (!storedUsername && !document.body.classList.contains('login-page')) {
            window.location.href = 'index.html';
        }
    }
    
    checkAuth();

    // Display username on the Home page
    const userNameDisplay = document.getElementById('userNameDisplay');
    if (userNameDisplay && storedUsername) {
        // Capitalize the first letter for a nice display
        userNameDisplay.textContent = storedUsername.charAt(0).toUpperCase() + storedUsername.slice(1);
    }

    // --- 4. Appointment Form Handling (appointment.html) ---
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const doctor = document.getElementById('docSelect').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const msg = document.getElementById('appointmentMessage');

            // In a real app, this would be an AJAX call to the server
            if (doctor && date && time) {
                msg.textContent = `Appointment successfully booked! Doctor: ${doctor}, Date: ${date}, Time: ${time}`;
                msg.style.color = 'green';
                appointmentForm.reset();
            } else {
                msg.textContent = 'Please fill out all fields.';
                msg.style.color = 'red';
            }
        });
    }

});