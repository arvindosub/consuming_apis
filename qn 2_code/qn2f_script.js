//(from sandbox)
//const url = "https://api.ocbc.com:8243/transactional/authlimits/1.0/getCardPaymentAuthLimit";

//(from mock)
const url = "https://9320c515-8531-4335-af3e-1c261a4f3daa.mock.pstmn.io/getCardPaymentAuthLimit";

const options = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 3aab265ece717fc7f0fca79db6c5fb6a'
    },
    body: JSON.stringify({
        'AccountNo': '123-XXXXX-001',
    })
}

fetch(url, options)
    .then(res => res.json())
    .then(function(data) {
        document.getElementById("getcard").innerHTML = JSON.stringify(data, null, '<br>');
    })