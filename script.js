let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
const cash = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
//const moneyCashRegister = cid.reduce((acc, num) => acc + num[1], 0).toFixed(2);

class CashRegister {
  constructor() {
    this.change = 0;
    this.totalInCashRegister = cid.reduce((acc, num) => acc + num[1], 0).toFixed(2);
  }
}

class Cash {
  constructor() {
    this.payment = 0;
  }
}
