//(from sandbox)
//const url = "https://api.ocbc.com:8243/atm_locator/1.1?country=SG&longitude=103.842629&latitude=1.421448&radius=1";

//(from mock)
const url = "https://0641ff11-5ca1-4eb3-ba0b-d6b8c02fe024.mock.pstmn.io/*?category=&country=SG&landmark=&latitude=1.421448&longitude=103.842629&radius=1";

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 3aab265ece717fc7f0fca79db6c5fb6a'
    }
}

fetch(url, options)
    .then(res => res.json())
    .then(function(data) {
        document.getElementById("atms").innerHTML = JSON.stringify(data, null, '<br>');
    })