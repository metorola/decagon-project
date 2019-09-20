var searchForm = document.getElementById('getForm');
searchForm.addEventListener('submit', getHotel);
function getHotel(e) {
    e.preventDefault();
    var name = document.getElementById('search').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3004/hotels', true);
    xhr.onload = function() {
        if(this.status == 200) {
            var hotels = JSON.parse(this.responseText);
            var output = "";
            for(let i = 0; i < hotels.length; i++) {
                if(name == "") {
                    document.getElementById("foundornot").innerHTML = "Search Result";
                    output += '<div class="matchHotel">' +
                        '<div class="viewHotel" onclick="viewFunction()"' + 'id="' + hotels[i].id + '">' +
                        '<img src="' + hotels[i].picture + '" width="200" height="140">' +
                        '<ul>' +
                        '<li><h3>' + hotels[i].hotelname + '</h3></li>' +
                        '<li>' + hotels[i].city + '</li>' +
                        '<li>' + hotels[i].state + '</li>' +
                        '<li>' + hotels[i].address + '</li>' +
                        '<li>Facilities:' +
                        '<ul>' +
                        '<li>' + hotels[i].facility[0] + '</li>' +
                        '<li>' + hotels[i].facility[1] + '</li>' +
                        '<li>' + hotels[i].facility[2] + '</li>' +
                        '</ul>' + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>';

                }
                if ((hotels[i].hotelname.toLowerCase() == name.toLowerCase()) || (hotels[i].state.toLowerCase() == name.toLowerCase())) {
                    document.getElementById("foundornot").innerHTML = "Search Result";
                    output += '<div class="matchHotel">' +
                        '<div class="viewHotel" onclick="viewFunction()"'+ 'id="'+ hotels[i].id +'">' +
                        '<img src="' + hotels[i].picture + '" width="200" height="140">' +
                        '<ul>' +
                        '<li><h3>' + hotels[i].hotelname + '</h3></li>' +
                        '<li>' + hotels[i].city + '</li>' +
                        '<li>' + hotels[i].state + '</li>' +
                        '<li>' + hotels[i].address + '</li>' +
                        '<li>Facilities:' +
                        '<ul>' +
                        '<li>' + hotels[i].facility[0] + '</li>' +
                        '<li>' + hotels[i].facility[1] + '</li>' +
                        '<li>' + hotels[i].facility[2] + '</li>' +
                        '</ul>' + '</li>' +
                        '</ul>' +
                        '</div>' +
                        '</div>';
                }
                // if ((hotels[i].hotelname.toLowerCase() !== name.toLowerCase()) || (hotels[i].state.toLowerCase() !== name.toLowerCase())) {
                //     document.getElementById('foundornot').innerHTML = "Hotels not found";
                // }
            }
            document.getElementById('searchResult').innerHTML = output;
        }
    }
    xhr.send();
}


// function viewFunction(e) {
//     alert("now working!");
//     e.preventDefault();

//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://localhost:3004/hotels', true);
//     xhr.onload = function () {
//         if (this.status == 200) {
//             var hotels = JSON.parse(this.responseText);
//             var output = "";
//             for (let i = 0; i < hotels.length; i++) {
//                 if (name == "") {
//                     document.getElementById("foundornot").innerHTML = "Search Result";
//                     output += '<div class="matchHotel">' +
//                         '<div class="viewHotel" onclick="viewFunction()"' + 'id="' + hotels[i].id + '">' +
//                         '<img src="' + hotels[i].picture + '" width="70" height="70">' +
//                         '<ul>' +
//                         '<li><h3>' + hotels[i].hotelname + '</h3></li>' +
//                         '<li>' + hotels[i].city + '</li>' +
//                         '<li>' + hotels[i].state + '</li>' +
//                         '<li>'+ hotels[i].address +'</li>' +
//                         '<li>Facilities:' +
//                         '<ul>' +
//                         '<li>' + hotels[i].facility[0] + '</li>' +
//                         '<li>' + hotels[i].facility[1] + '</li>' +
//                         '<li>' + hotels[i].facility[2] + '</li>' +
//                         '</ul>' + '</li>' +
//                         '</ul>' +
//                         '</div>' +
//                         '</div>';
//                     }
//                 }
//             document.getElementById('hotelDetails').innerHTML = output;
//             }
//         }
//     xhr.send();
// }