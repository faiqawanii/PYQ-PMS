// On page load, update the username from localStorage
window.onload = function() {
    const username = localStorage.getItem("loggedInUser");
    if (username) {
        document.getElementById("displayUsername").innerText = username;
    } else {
        // Optional: If someone tries to access dashboard without logging in, send them back
        // window.location.href = "Login_PYQPMS.html"; 
    }
};
function searchTable() {
    let search = document.getElementById("search").value.toLowerCase();
    let course = document.getElementById("course").value.toLowerCase();
    let subject = document.getElementById("subject").value.toLowerCase();
    let semester = document.getElementById("semester").value;
    let year = document.getElementById("year").value;

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        let match = true;

        if (search && !text.includes(search)) match = false;
        if (course && !text.includes(course)) match = false;
        if (subject && !text.includes(subject)) match = false;
        if (semester && !text.includes("sem " + semester)) match = false;
        if (year && !text.includes(year)) match = false;

        card.style.display = match ? "block" : "none";
    });
}
document.getElementById("menuBtn").onclick = function () {
    document.querySelector(".sidebar").classList.toggle("closed");
};

function toggleView() {
    document.getElementById("recentSection").classList.toggle("limited");
}