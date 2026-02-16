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

class CashRegister {
  constructor() {
    this.change = 0;
    this.totalInCashRegister = cid.reduce((acc, num) => acc + num[1], 0).toFixed(2);
  }

  checkChange(amount) {
    console.log(amount < price);
    console.log(true < 1.87);
    console.log("amount: ", amount);
    console.log("price: ", price);

    if (cash.value < price) {
      alert ("Customer does not have enough money to purchase the item");
      return;
    }

    if (Number(cash.value) === price) {
      changeDue.textContent = 'No change due - customer paid with exact cash';
    }
  }

  update() {
    this.change = this.totalInCashRegister - cash.value;
    /* this.totalInCashRegister = this.change; */
    this.checkChange(this.change);
    //console.log(this.change);
  }
}

const cashRegister = new CashRegister();

purchaseBtn.addEventListener("click", () => cashRegister.update());
