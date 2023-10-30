//從HTML獲取按鈕和分數
const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");
//初始化玩家和電腦的分數
let playerScore = 0;
let computerScore = 0;

//為每個按鈕製作一個事件監聽
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    //使用playRound函數來決定勝負，將結果顯示在result上
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    
  });
});

//隨機生成電腦的選擇(石頭、剪刀、布其中之一)
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
//判定每一局的結果並更新分數
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! " + computerSelection + " beats " + playerSelection;
  }
}
