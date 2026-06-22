let price = 3.26;
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
const changeDue = document.getElementById('change-due');
const purchaseBtn = document.getElementById('purchase-btn');
const priceElement = document.getElementById('price-element');
const cashDrawer = document.getElementById('cash-drawer');

priceElement.textContent = price;

class CashRegister {
  constructor() {
    this.change = 0;
    this.cidCopy = [...cid];
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

  cashDrawerRender() {
    cashDrawer.textContent = '';

    this.cidCopy.forEach(unit => {
      cashDrawer.innerHTML += `<p>${unit[0]}: $${unit[1]}</p>`;
    });
  }

  resetValuesChangeCurrency() {
    this.changeCurrency.forEach(currency => currency[1] = 0);
  }

  update() {
    this.cidCopy = [...cid];
    this.totalInCashRegister = Number(this.cidCopy.reduce((acc, num) => acc + num[1], 0).toFixed(2));
    this.resetValuesChangeCurrency();

    this.change = Number(cash.value) - price;
    this.change = Number(this.change.toFixed(2));

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
        if (this.cidCopy[i][1] <= this.change) {
          this.changeCurrency[i][1] = this.cidCopy[i][1];
          this.change = Number((this.change - this.changeCurrency[i][1]).toFixed(2));
        } else {
          this.changeCurrency[i][1] = Number((Math.trunc(this.change / this.changeCurrency[i][2]) * this.changeCurrency[i][2]).toFixed(2));
          this.change = Number((this.change - this.changeCurrency[i][1]).toFixed(2));
        }
      }
    }

    if (this.change > 0) {
      changeDue.textContent = '';
      changeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
      this.resetValuesChangeCurrency();
      return;
    }

    this.change = Number(cash.value) - price;

    let changeArray = [];

    const isClosed = this.totalInCashRegister === Number((Number(cash.value) - price).toFixed(2));

    for (let i = currencyLength - 1; i >= 0; i--) {
      if (isClosed) {
        if (this.cidCopy[i][1] > 0) {
          changeArray.push(`${this.changeCurrency[i][0]}: $${this.changeCurrency[i][1]}`);
        }
        this.cidCopy[i][1] = 0;
      } else if (this.changeCurrency[i][1] > 0) {
        changeArray.push(`${this.changeCurrency[i][0]}: $${this.changeCurrency[i][1]}`);
        this.cidCopy[i][1] = Number((this.cidCopy[i][1] - this.changeCurrency[i][1]).toFixed(2));
      }
    }

    if (this.totalInCashRegister === Number((Number(cash.value) - price).toFixed(2))) {
      changeDue.textContent = `Status: CLOSED ${changeArray.join(' ')}`;
    } else {
      changeDue.textContent = `Status: OPEN ${changeArray.join(' ')}`;
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
