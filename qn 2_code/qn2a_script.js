//(from sandbox)
//const url = "https://connect.squareupsandbox.com/v2/payments";

//(from mock)
const url = "https://76ec209c-ab21-4032-b90e-3a5600736800.mock.pstmn.io/v2/payments";

const options = {
    method: 'GET',
    headers: {
        'Square-Version': '2020-08-26',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer EAAAEDT0g5R8jH5fHpiNr3l8F2hHj_nsyj2Iw9fbZlTeEsJSlCv6qpSw72n_Kq_5'
    }
}

fetch(url, options)
    .then(res => res.json())
    .then(function(data) {
        document.getElementById("listpmts").innerHTML = JSON.stringify(data, null, '<br>');
    })