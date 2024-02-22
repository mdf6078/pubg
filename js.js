let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const paraUsereScore = document.querySelector("#user_score");
const paracompScore = document.querySelector("#comp_score");

const getCompChhoice = () => {
  const option = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const gameWraw = () => {
  msg.innerText = "game is draws";
  msg.style.backgroundColor = "black";
};

const winners = (UserWin, CompChhoice, userChoice) => {
  if (UserWin) {
    userScore++;
    paraUsereScore.innerText = userScore;
    msg.innerText = `you win  you ${userChoice} beats ${CompChhoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    paracompScore.innerText = compScore;
    msg.innerText = `you lose  ${userChoice} beats  you ${CompChhoice} `;
    msg.style.backgroundColor = "red";
  }
};

const gameplay = (userChoice) => {
  const CompChhoice = getCompChhoice();
  if (CompChhoice === userChoice) {
    gameWraw();
  } else {
    let Userwin = true;
    if (userChoice === "rock") {
      Userwin = CompChhoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      Userwin = CompChhoice === "scissors" ? false : true;
    } else {
      Userwin = CompChhoice === "rock" ? false : true;
    }
    winners(Userwin, userChoice, CompChhoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    gameplay(userChoice);
  });
});
