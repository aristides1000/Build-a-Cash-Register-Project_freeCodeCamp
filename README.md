# JavaScript Cash Register App

> An interactive web-based cash register application built as part of the freeCodeCamp Legacy JavaScript Algorithms and Data Structures certification.

![Static Badge](https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=FCC624&labelColor=black) ![Static Badge](https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=E95420&labelColor=white) ![Static Badge](https://img.shields.io/badge/html%205-E34F26?style=for-the-badge&logo=html5&logoColor=E34F26&labelColor=white) ![Static Badge](https://img.shields.io/badge/css%203-1572B6?style=for-the-badge&logo=css3&logoColor=1572B6&labelColor=white) ![Static Badge](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=black)

This application calculates and returns the exact change to a customer based on the item price, the cash provided, and the current cash available in the register drawer (`cid`). It handles complex floating-point precision scenarios, dynamic state updates (`OPEN`, `CLOSED`, or `INSUFFICIENT_FUNDS`), and UI synchronization using Object-Oriented Programming principles.

## Features

- **Dynamic Change Calculation:** Accurately determines the breakdown of bills and coins from highest to lowest denomination.
- **State Management:** Employs a `CashRegister` class structure to manage values, breakdown tracking, and transactional states.
- **Interactive UI:** Features real-time visual updates of the cash remaining inside the drawer after each purchase.
- **Floating-Point Precision Guard:** Built-in multi-step precision handlers to bypass native binary float calculation issues in JavaScript.

## Built With

- **Languages:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Paradigm:** Object-Oriented Programming (OOP)
- **Development Environment:** Linux (Ubuntu/Xubuntu)

## Live Demo

[Live Demo Link](https://aristides1000.github.io/Build-a-Cash-Register-Project_freeCodeCamp/)

## Getting Started

To get a local copy up and running on your machine, follow these simple steps.

### Prerequisites

You only need a modern web browser (such as Chrome, Firefox, or Edge) to run this project.

### Setup & Installation

1. Clone the repository to your local machine:
   ```bash
   git clone [https://github.com/aristides1000/cash-register.git](https://github.com/aristides1000/cash-register.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd cash-register
   ```

## Usage

1. Open the index.html file directly in any browser.
2. Input the cash amount provided by the customer in the input field.
3. Click the **Purchase** button or press **Enter** to process the transaction.
4. The system will display the transaction status along with the detailed change breakdown in the DOM.

## Authors

👤 **Arístides José Molina Pérez**

- **GitHub:** https://github.com/aristides1000
- **Twitter:** https://twitter.com/aristides_1000
- **LinkedIn:** https://www.linkedin.com/in/aristides-molina/

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- freeCodeCamp for providing the project specifications and strict automated testing criteria.

## 📝 License

This project is CC0 1.0 Universal licensed.