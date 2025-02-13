function showLogin() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "user" && password === "password") {
        localStorage.setItem("loggedInUser", username);
        document.getElementById('userDisplay').innerText = username;
        document.getElementById('dashboard').classList.remove('hidden');
        closeLogin();
    } else {
        alert("Invalid credentials! Try 'user' and 'password'.");
    }
}

function logout() {
    localStorage.removeItem("loggedInUser");
    document.getElementById('dashboard').classList.add('hidden');
}

window.onload = function() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        document.getElementById('userDisplay').innerText = loggedInUser;
        document.getElementById('dashboard').classList.remove('hidden');
    }
};
