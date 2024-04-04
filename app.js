let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#message");
let newGameBtn = document.querySelector("#newgame");
let resetBtn = document.querySelector("#reset-btn");
let boxes = document.querySelectorAll(".box");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let turn0 = true;

function resetGame() {
    turn0 = true;
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    msg.innerHTML = "";
    msgContainer.style.display = "none";
}

newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);

boxes.forEach((box)=> {
    box.addEventListener("click", (e) => {
        if (turn0) {
            turn0 = false;
            box.innerHTML = "X";
        } else {
            turn0 = true;
            box.innerHTML = "O";
        }
        checkForWinner();
        box.disabled = true;
    });
});



boxes.addEventListener("click", checkForWinner());