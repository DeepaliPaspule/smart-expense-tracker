// script.js

// Function to handle user signup
document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    // Check if the username already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Username already exists. Please choose a different username.');
    } else {
        // Save new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! You can now login.');
        window.location.href = 'login.html'; // Redirect to login page
    }
});

// Function to handle user login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Successful login
        alert('Login successful!');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password. Please try again.');
    }
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', function() {
    // Optionally, you could clear user session data here
    alert('You have been logged out.');
    window.location.href = 'index.html'; // Redirect to landing page
});