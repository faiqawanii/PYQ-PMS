// Function to handle role selection
let selectedRole = "";
function selectRole(role) {
    selectedRole = role;
    document.getElementById('role').value = role;
    
    // Visual feedback for buttons
    const buttons = document.querySelectorAll('.roles button');
    buttons.forEach(btn => btn.style.background = "#678aea"); // Reset
    event.target.style.background = "#012b4c"; // Darken selected
}

// Toggle Password Visibility
function togglePassword() {
    const passInput = document.getElementById('password');
    const icon = document.querySelector('.password-box i');
    if (passInput.type === "password") {
        passInput.type = "text";
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passInput.type = "password";
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Form Submission & Linking
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const errorMsg = document.getElementById('error');

    if (!selectedRole) {
        errorMsg.innerText = "Please select a role (User/Admin) first!";
        return;
    }

    // Dummy stored credentials
    const correctUsername = "Sneha";
    const correctPassword = "123@";

    // Black Box Testing Logic
    if (user !== correctUsername) {
        errorMsg.innerHTML = `
            Incorrect username. Please check your credentials! 
            <br><span>New User? <a href="signup.html" style="color: #6384df; text-decoration: none; font-weight: bold;">Sign up</a></span>
        `;
    } 
    else if (user === correctUsername && pass !== correctPassword) {
        errorMsg.innerHTML = `Incorrect password.`;
    } 
    else {
        if (selectedRole === 'user') {
            // Success for User -> Go to dashboard
            localStorage.setItem("loggedInUser", user); 
            window.location.href = "interf.html";
        } else {
            // Block Admin from User Dashboard
            errorMsg.innerText = "Access Denied.";
        }
    }
});

function goToSignup() {
    window.location.href = "signup.html";
}

function showForgot() {
    document.getElementById('forgotBox').classList.toggle('hidden');
}