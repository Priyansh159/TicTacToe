let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".resetBtn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".other");
let msg = document.querySelector("#msgg");

let turnO = true;

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame =() =>{
    turnO = true;
    enableBoxes(); 
    msgContainer.classList.add("hide");

}

boxes.forEach((boxxx) => {
    boxxx.addEventListener("click", () => {
        if(turnO === true){ //player O ki turn hai
            boxxx.innerText = "O";
            turnO = false;
            document.querySelector("body").style.backgroundColor="#66d1f2";
            boxxx.style.color="#ff6a00";
        }
        else{
            boxxx.innerText = "X";
            turnO = true;
            document.querySelector("body").style.backgroundColor="#ff6a00";
            boxxx.style.color="#66d1f2";
        }
        boxxx.disabled = true;
        
        checkWinner();
    });
});

let disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};


let enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congractulations!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if (pos1Val=== pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    };
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);