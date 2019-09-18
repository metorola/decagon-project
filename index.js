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
                    output += 'Search Results' + '<div class="matchHotel">' +
                        '<div class="viewHotel onclick="displayHotel()"' + 'id="' + hotels[i].id + '">' +
                        '<img src="' + hotels[i].picture + '"></<img>' +
                        '<ul>' +
                        '<li><h3>' + hotels[i].hotelname + '</h3></li>' +
                        '<li>' + hotels[i].city + '</li>' +
                        '<li>' + hotels[i].state + '</li>' +
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
                    output += 'Search Results' + '<div class="matchHotel">' +
                        '<div class="viewHotel"'+ 'id="'+ hotels[i].id +'">' +
                        '<a href="singleView.html"><img src="' + hotels[i].picture + '"></a>' +
                        '<ul>' +
                        '<li> <a href="singleView.html"><h3>' + hotels[i].hotelname + '</h3></a></li>' +
                        '<li>' + hotels[i].city + '</li>' +
                        '<li>' + hotels[i].state + '</li>' +
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
