/*let btn =document.querySelector("#btn");
let currmode ="light";

btn=addEventListener("click",()=>{
    if (currmode === "light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="black";
        }else{
        currmode ="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode)
    });
*/

/*tic tac toe*/

let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new");
let turno = true;

const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turno = true;
  enableboxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";

      turno = false;
    } else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;

    checkwinner();
  });
});
const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
