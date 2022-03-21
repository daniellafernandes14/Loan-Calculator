// Input
const loanAmount = document.getElementById('amount');
const interest = document.getElementById('interest');
const repaymentYears = document.getElementById('years');
// Results
const results = document.getElementById('results');
const calculateBtn = document.getElementById('calculate-btn');
const monthlyRepayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');
const loader = document.getElementById('loader');
const alert = document.getElementById('alert');

results.classList.add('d-none');

calculateBtn.addEventListener('click', function(e) {
  results.classList.add('d-none');
  loader.classList.remove('d-none');

  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

function calculateResults() {
  // Calculations
  const totalValue = (loanAmount.value * (1 + (interest.value / 100)))
  const monthlyValue = (totalValue / repaymentYears.value / 12)
  const totalInterestValue = (loanAmount.value * (interest.value / 100))

  if(isFinite(monthlyValue)) {
    console.log("hello");
    monthlyRepayment.value = monthlyValue.toFixed(2);
    totalPayment.value = totalValue.toFixed(2);
    totalInterest.value = totalInterestValue.toFixed(2);

    results.classList.remove('d-none');
    loader.classList.add('d-none');
  } else {
    results.classList.add('d-none');
    loader.classList.add('d-none');
    alert.classList.remove('d-none');
    setTimeout(removeAlert, 5000);
    function removeAlert() {
      alert.classList.add('d-none');
    }
  }
}
