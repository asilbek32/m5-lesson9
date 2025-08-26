// class Payment {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   plusBalance(new_balance) {
//     this.balance += new_balance;
//   }

//   minusBalance(new_balance) {
//     this.balance -= new_balance;
//   }

// }

// const payment = new Payment()

// payment.plusBalance(34)
// payment.plusBalance(34)
// payment.minusBalance(34)

// class BankBalance{
//     #may_balamnce=0

//     get showBalance(){
//         return this.#may_balamnce;
//     }

//     set addBalance(a){
//         this.#may_balamnce += a;
//     }
// }

// const clixk = new BankBalance();

// clixk.addBalance = 89;

// console.log(clixk.showBalance);

let menu = document.getElementById("menu");
let cloce = document.getElementById("cloce");
let sidebar = document.getElementById("sidebar")

menu.addEventListener("click", () => {
  sidebar.classList.add("block")
  sidebar.classList.remove("hidden")
});

cloce.addEventListener("click", () => {
  sidebar.classList.add("hidden")
  sidebar.classList.remove("block")
});