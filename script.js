document.getElementById('loginform').addEventListener("submit",function(e) {
    e.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user ==="ridho" && pass === "12345678910") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("errorMsg").style.display = "block";
    }
})