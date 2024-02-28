/* Defining global constants for the document objects */
const inputAmount = document.getElementById("amount");
const inputRate = document.getElementById("rate");
const inputInstallments = document.getElementById("installments");
const submitButton = document.getElementById("submit");

/* Defining global variables */
let amount;
let rate;
let rateMV;
let installments;
let amountPayment;
let ratePayment;
let installmentPayment;
let totalAmount;

/* Creating functions */
function startScript() {
  submitButton.addEventListener("click", calculate);
}

function calculate() {
  submitButton.disabled = true;

  amount = Number(inputAmount.value);
  rate = Number(inputRate.value);
  rateMV = Number(interestConvertion(rate));
  installments = Number(inputInstallments.value);
  amountPayment = amount / installments;
  totalAmount = amount;

  for (let i = 1; i <= installments; i++) {
    if (i == 1) {
      amount = amount;
    } else {
      amount = amount - amountPayment;
    }

    ratePayment = financial(amount * (rateMV / 100));
    installmentPayment = financial(amountPayment + ratePayment);
    totalAmount = totalAmount + ratePayment;
  }
}

function financial(n) {
  return Number.parseFloat(n).toFixed(2);
}

function interestConvertion(i) {
  let tmv = Math.pow(1 + i / 100, 30 / 360) - 1;

  return tmv * 100;
}

/* Running code */
startScript();
