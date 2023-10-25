const loginForm = document.getElementById('login_Form');
let username = document.getElementById("username").value;
let password = document.querySelector("#password").value;
let unameError = document.querySelector('.unameError')
let passwordError = document.querySelector('.passwordError');

const re_email = /^[A-Za-z0-0&-_]+@[A-Za-z0-9]+[A-Za-z0-9]{2,4}$/;
const re_uname = /^[A-Za-z0-9]+_\d+$/;
const re_password = /^(?=.*[!@_-])[\w.!@_-]{8,}$/;

loginForm.addEventListener('submit', function(event) {
    if (!re_uname.test(username)) {
        unameError.style.display = 'block';
        event.preventDefault();
    }
    else if (!re_password.test(password)) {
        passwordError.style.display = 'block';
        event.preventDefault();
    }
    else {
        unameError.style.display = 'none';
        password.style.display = 'none';
        window.alert("You have successfully signed in")
        window.location.href = './index.html'
    }
})