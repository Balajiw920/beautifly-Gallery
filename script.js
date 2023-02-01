const first = document.getElementById("first");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const second = document.getElementById("second");
const userInfo = document.getElementById("user-info");
const userName = document.getElementById("user-name");
const userUsername = document.getElementById("user-username");
const third = document.getElementById("third");
const dice = document.getElementById("dice");
const diceImg = document.getElementById("dice-img");
const result = document.getElementById("result");
const fourth = document.getElementById("fourth");
const coupon = document.getElementById("coupon");
const message = document.getElementById("message");
const congratulation = document.getElementById("congratulation");

let name, email, username;
let sum = 0;
let tries = 0;

first.addEventListener("click", () => {
  form.classList.remove("hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  name = nameInput.value;
  email = emailInput.value;
  username = usernameInput.value;
  form.classList.add("hidden");
});

second.addEventListener("click", () => {
  if (!name || !email || !username) return;
  userInfo.classList.remove("hidden");
  userName.innerText = name;
  userUsername.innerText = username;
});

third.addEventListener("click", () => {
  if (!name || !email || !username) return;
  dice.classList.remove("hidden");
  diceImg.addEventListener("click", () => {
    if (tries >= 3) return;
    let value = Math.ceil(Math.random() * 6 );
    result.innerText += value + " ";
    sum += value;
    tries++;
    if (tries === 3 && sum > 10) {
      fourth.classList.remove("hidden");
    } else if (tries === 3) {
      message.innerText = "Bad luck, try again.";
    }
  });
});

fourth.addEventListener("click", () => {
  let num1 = Math.random().toString().substring(2, 14);
  coupon.innerText = num1;
  congratulation.innerText ="---------Congratulation!-------"
});






  // fourth.addEventListener("click", () => {
  //   coupon.innerText = Math.random().toString(36).substring(2, 14);
  //   congratulation.classList.remove("hidden");
  // });