const form = document.getElementById('loginform');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    window.location.href = "dashboard.html";
})