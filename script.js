let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let newBtn = document.querySelector('#new-btn');

let turnO = true;

let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "black";
            turnO=false;
        }else{
            box.innerText = "X";
            box.style.color = "red";
            turnO=true;
        }
        box.disabled = true;
        count++;
        checkWinner();

    })
})

const resetGame = () => {
    turnO = true;
    count = 0;
    enableAll();
    msgContainer.classList.add('hide')
}

const disableAll = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableAll = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`
    msgContainer.classList.remove('hide');
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('winner ', pos1Val);
                showWinner(pos1Val);
                disableAll();
            }else if(count === 9){
                showWinner('Draw');
            }
        }
    }
}

newBtn.addEventListener('click',resetGame);
resetBtn.addEventListener("click", resetGame);