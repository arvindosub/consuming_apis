//(from sandbox)
//const url = "https://api.ocbc.com:8243/Home_Loan/1.0?currentAge1=28&totalMonthlyIncome1=7000&totalMonthlyDebt1=2000&outstandingLoans1=25000&repaymentPeriod=10";

//(from mock)
const url = "https://33e04854-be96-4027-a0b5-fc074c05f2da.mock.pstmn.io/*?currentAge1=28&totalMonthlyIncome1=7000&totalMonthlyDebt1=2000&outstandingLoans1=25000&currentAge2=<integer>&totalMonthlyIncome2=<number>&totalMonthlyDebt2=<number>&outstandingLoans2=<integer>&repaymentPeriod=10";

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
        document.getElementById("loan").innerHTML = JSON.stringify(data, null, '<br>');
    })