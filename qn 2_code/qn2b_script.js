//(from sandbox)
//const url = "https://connect.squareupsandbox.com/v2/payments";

//(from mock)
const url = "https://76ec209c-ab21-4032-b90e-3a5600736800.mock.pstmn.io/v2/payments";

const options = {
    method: 'POST',
    headers: {
        'Square-Version': '2020-08-26',
        'Content-Type': 'application/json',
        'Authorization': 'EAAAEDT0g5R8jH5fHpiNr3l8F2hHj_nsyj2Iw9fbZlTeEsJSlCv6qpSw72n_Kq_5'
    },
    body: JSON.stringify({
        "amount_money": {
            "amount": 320,
            "currency": "USD"
          },
          "idempotency_key": "c7fecba2-9185-4900-b3c4-12d36b83919d",
          "source_id": "cnon:card-nonce-ok",
          "autocomplete": "False"
      })
}
fetch(url, options)
    .then(res => res.json())
    .then(function(data) {
        document.getElementById("crtpmt").innerHTML = JSON.stringify(data, null, '<br>');
    })