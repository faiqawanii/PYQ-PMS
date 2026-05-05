let selectedRole = "";

function selectRole(role) {
selectedRole = role;
document.getElementById('role').value = role;

const buttons = document.querySelectorAll('.roles button');
buttons.forEach(btn => btn.style.background = "#678aea");
event.target.style.background = "#012b4c";
}

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

document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault();

const user = document.getElementById('username').value;
const pass = document.getElementById('password').value;
const errorMsg = document.getElementById('error');

if (!selectedRole) {
errorMsg.innerText = "Please select a role (User/Admin) first!";
return;
}

const correctUsername = "Sneha";
const correctPassword = "123@";

if (user !== correctUsername) {
errorMsg.innerHTML = `
Incorrect username. Please check your credentials!
New User? Sign up
`;
}
else if (user === correctUsername && pass !== correctPassword) {
errorMsg.innerHTML = `Incorrect password.`;
}
else {
if (selectedRole === 'user') {
localStorage.setItem("loggedInUser", user);
window.location.href = "interf.html";
} else {
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
