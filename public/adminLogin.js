var loginIn = document.getElementById('loginForm');
loginIn.addEventListener('submit', login);

function login(e) {
    e.preventDefault();

    var un = document.getElementById("userAdmin").value;
    var psword = document.getElementById("pwAdmin").value;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3004/admin');

    xhr.onload = function () {
        if (this.status == 200) {
            var admins = JSON.parse(this.responseText);
            for (let i = 0; i < admins.length; i++) {
                if ((un === admins[i].username) && (psword === admins[i].password)) {
                    alert('Successful Login!')
                    location.href = "http://localhost:3004/admin.html";
                }
                else if ((un !== admins[i].username) || (psword !== admins[i].password)){
                    alert("Username and/or Password NOT correct!");
                }
            }
        }
}
    xhr.send();
}