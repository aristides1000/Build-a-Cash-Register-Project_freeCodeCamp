const price = 19.5;
const cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById("cash");
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
const priceElement = document.getElementById('price-element');
const cashDrawer = document.getElementById('cash-drawer');

priceElement.textContent = price;

class CashRegister {
  constructor() {
    this.change = 0;
    this.totalInCashRegister = cid.reduce((acc, num) => acc + num[1], 0).toFixed(2);
    this.changeCurrency = [
      ['PENNY', 0, 0.01],
      ['NICKEL', 0, 0.05],
      ['DIME', 0, 0.1],
      ['QUARTER', 0, 0.25],
      ['ONE', 0, 1],
      ['FIVE', 0, 5],
      ['TEN', 0, 10],
      ['TWENTY', 0, 20],
      ['ONE HUNDRED', 0, 100]
    ];
  }

/*   checkChange(amount) {
    if (amount < 0) {
      alert ("Customer does not have enough money to purchase the item");
      return;
    }

    if (Number(amount) === 0) {
      changeDue.textContent = '';
      changeDue.textContent = 'No change due - customer paid with exact cash';
      return;
    }

    if (this.totalInCashRegister < amount) {
      changeDue.textContent = '';
      changeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
      return;
    }
  } */

  cashDrawerRender() {
    cashDrawer.textContent = '';

    cid.forEach(unit => {
      cashDrawer.innerHTML += `<p>${unit[0]}: $${unit[1]}</p>`;
    });
  }

  resetValuesChangeCurrency() {
    this.changeCurrency.forEach(currency => currency[1] = 0);
  }

  update() {
    this.change = Number(cash.value) - price;
    //this.checkChange(this.change);

    if (this.change < 0) {
      alert ("Customer does not have enough money to purchase the item");
      return;
    }

    if (this.change === 0) {
      changeDue.textContent = '';
      changeDue.textContent = 'No change due - customer paid with exact cash';
      return;
    }

    if (this.totalInCashRegister < this.change) {
      changeDue.textContent = '';
      changeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
      return;
    }


    let currencyLength = this.changeCurrency.length;
    for (let i = currencyLength - 1; i >= 0; i--) {
      debugger;
      if(Math.trunc(this.change / this.changeCurrency[i][2])) {
        if (cid[i][1] <= this.change) {
          this.changeCurrency[i][1] = cid[i][1];
          this.change = (this.change - this.changeCurrency[i][1]).toFixed(2);
        } else {
          this.changeCurrency[i][1] = Number(Math.trunc(this.change / this.changeCurrency[i][2]) * this.changeCurrency[i][2]).toFixed(2);
          this.change = (this.change - this.changeCurrency[i][1]).toFixed(2);
        }
      }

      /* console.log(this.changeCurrency[i][0]);
      console.log(this.change); */
    }
    /* console.log(this.changeCurrency);
    console.log(this.change); */

    if (this.change > 0) {
      changeDue.textContent = '';
      changeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
      this.resetValuesChangeCurrency();
      return;
    }

    const totalChange = this.changeCurrency.reduce((acc, num) => acc + num[1], 0);

    if (totalChange) {
      changeDue.textContent = 'Status: OPEN';
    }

    for (let i = 0; i <= currencyLength - 1; i++) {
      if (this.changeCurrency[i][1] > 0) {
        changeDue.innerHTML += ` ${this.changeCurrency[i][0]}: $${this.changeCurrency[i][1]}`;
      }
    }

    this.cashDrawerRender();
  }
}

const cashRegister = new CashRegister();

cashRegister.cashDrawerRender();

purchaseBtn.addEventListener('click', () => cashRegister.update());

cash.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    cashRegister.update();
  }
});
