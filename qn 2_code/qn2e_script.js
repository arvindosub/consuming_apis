//(from sandbox)
//const url = "https://connect.squareupsandbox.com/v2/payments/RC5uOvybD94Xe8Vr1RwADzqPWiEZY/complete";

//(from mock)
const url = "https://76ec209c-ab21-4032-b90e-3a5600736800.mock.pstmn.io/v2/payments/RC5uOvybD94Xe8Vr1RwADzqPWiEZY/complete";

const options = {
    method: 'POST',
    headers: {
        'Square-Version': '2020-08-26',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer EAAAEDT0g5R8jH5fHpiNr3l8F2hHj_nsyj2Iw9fbZlTeEsJSlCv6qpSw72n_Kq_5'
    }
}

fetch(url, options)
    .then(res => res.json())
    .then(function(data) {
        document.getElementById("compmt").innerHTML = JSON.stringify(data, null, '<br>');
    })