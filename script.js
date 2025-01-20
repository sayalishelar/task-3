// Function for live validation of Login form
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginEmailError = document.getElementById('login-email-error');
const loginPasswordError = document.getElementById('login-password-error');

// Login validation function
function validateLoginForm() {
    let isValid = true;
    
    // Email validation
    if (!loginEmail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        loginEmailError.textContent = "Please enter a valid email.";
        loginEmailError.style.display = "block";
        isValid = false;
    } else {
        loginEmailError.style.display = "none";
    }

    // Password validation
    if (loginPassword.value.length < 6) {
        loginPasswordError.textContent = "Password must be at least 6 characters.";
        loginPasswordError.style.display = "block";
        isValid = false;
    } else {
        loginPasswordError.style.display = "none";
    }

    return isValid;
}

// Handle form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateLoginForm()) {
        alert('Login successful!');
    }
});

// Function for live validation of Registration form
const registerName = document.getElementById('register-name');
const registerEmail = document.getElementById('register-email');
const registerPassword = document.getElementById('register-password');
const registerConfirmPassword = document.getElementById('register-confirm-password');
const registerNameError = document.getElementById('register-name-error');
const registerEmailError = document.getElementById('register-email-error');
const registerPasswordError = document.getElementById('register-password-error');
const registerConfirmPasswordError = document.getElementById('register-confirm-password-error');

// Registration validation function
function validateRegisterForm() {
    let isValid = true;

    // Full Name validation
    if (registerName.value.trim() === "") {
        registerNameError.textContent = "Full name is required.";
        registerNameError.style.display = "block";
        isValid = false;
    } else {
        registerNameError.style.display = "none";
    }

    // Email validation
    if (!registerEmail.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        registerEmailError.textContent = "Please enter a valid email.";
        registerEmailError.style.display = "block";
        isValid = false;
    } else {
        registerEmailError.style.display = "none";
    }

    // Password validation
    if (registerPassword.value.length < 6) {
        registerPasswordError.textContent = "Password must be at least 6 characters.";
        registerPasswordError.style.display = "block";
        isValid = false;
    } else {
        registerPasswordError.style.display = "none";
    }

    // Confirm Password validation
    if (registerPassword.value !== registerConfirmPassword.value) {
        registerConfirmPasswordError.textContent = "Passwords do not match.";
        registerConfirmPasswordError.style.display = "block";
        isValid = false;
    } else {
        registerConfirmPasswordError.style.display = "none";
    }

    return isValid;
}

// Handle form submission
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateRegisterForm()) {
        alert('Registration successful!');
    }
});
