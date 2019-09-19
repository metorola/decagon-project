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
        rooms: document.getElementById("rooms").value,
        phonenumber: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        description: document.getElementById("describe").value,
    }

    var formJson = JSON.stringify(formData);

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3004/hotels");

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(formJson);

    alert("Hotel successfully added!");
}