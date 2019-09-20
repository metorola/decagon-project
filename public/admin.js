
var addForm = document.getElementById('postForm');
addForm.addEventListener('submit', newHotel);

function newHotel(e) {
    e.preventDefault();
    var formData = {
        hotelname: document.getElementById("hotelName").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        address: document.getElementById("address").value,
        picture: document.getElementById("pics").value,
        facility: document.getElementById("facility").value,
        phonenumber: document.getElementById("phone").value,
        email: document.getElementById("email").value,
    }

    var formJson = JSON.stringify(formData);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3004/hotels", true);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(formJson);

    alert("Hotel successfully added!");
    resetForm();
}

function resetForm() {
    document.getElementById("hotelName").value = "";
    document.getElementById("state").value = "";
    document.getElementById("city").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pics").value = "";
    document.getElementById("facility").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

var request = new XMLHttpRequest();
request.open('GET', "http://localhost:3004/hotels", true);
request.responseType = 'json';
request.send();
request.onload = function () {
    var hotels = request.response;
    if (this.status == 200) {
        var output = "";
        for (let i = 0; i < hotels.length; i++) {
            output += '<tr>' +
                '<td>' + hotels[i].hotelname + '</td>' +
                '<td>' + hotels[i].city + '</td>' +
                '<td>' + hotels[i].state + '</td>' +
                '<td>' + hotels[i].address + '</td>' +
                '<td>' + hotels[i].picture + '</td>' +
                '<td>' + hotels[i].facility + '</td>' +
                '<td>' + hotels[i].phonenumber + '</td>' +
                '<td>' + hotels[i].email + '</td>' +
                '<td><div><a onclick="onEdit(this)" id="editBtn">edit</a></div><br><div><a onclick="onDelete(this)" id="delBtn">Delete</a></div></td>' +
                '</tr>'
        }
        document.getElementById('hotelData').innerHTML = output;
    }
    xhr.send();
}

