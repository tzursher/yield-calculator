const amountInput = document.querySelector("#amount");
const yieldInput = document.querySelector("#yield");
const yearInput = document.querySelector("#year");
const btn = document.querySelector("#calculate");
const yieldResultText = document.querySelector("#profit");
const balanceResultText = document.querySelector("#balance");

let yearYieldNum;

let amountNum = 0;
let yieldNum = 0;

function updateAmount() {
  amountNum = amountInput.value;
  console.log("amount updated", amountNum);
};

function updateYield() {
  yieldNum = yieldInput.value;
  console.log("yield updated", yieldNum);
};


function calc() {
  newResult = amountNum;
  i = 1;
  while(i<12) {
    newResult *= 1+yieldNum/100;
    i++;
    console.log(newResult);
  }
  yieldResultText.innerText = Math.floor((newResult/amountNum-1) * 100)+"%";
  balanceResultText.innerText = Intl.NumberFormat('en-US').format(Math.round(newResult-amountNum))+"$";
 
};

amountInput.addEventListener('keyup', updateAmount);
yieldInput.addEventListener('keyup', updateYield);
btn.addEventListener('click', calc);