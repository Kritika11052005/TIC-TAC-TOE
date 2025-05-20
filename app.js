let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newG=document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;
let count=0;
let winning_pattern=[[0,1,2],
                    [0,3,6],
                    [0,4,8],
                    [1,4,7],
                    [2,5,8],
                    [2,4,6],
                    [3,4,5],
                    [6,7,8]];
const resetGame=()=>{
    turn0=true;
    count=0;
    enablebtn();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner=checkwinner();
        if(count===9 && !iswinner){
        gameDraw();
    }
    });
});
const gameDraw=()=>{
    msg.innerText=`GAME WAS A DRAW`;
    msgContainer.classList.remove("hide");
    disablebtn();
};
const disablebtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="?";
    }
};
const showwinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS , THE WINNER IS ${winner}`;
    msgContainer.classList.remove("hide");
    disablebtn();
};
const checkwinner=()=>{
    for(let pattern of winning_pattern ){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;


        if(pos1 != "?" && pos2 != "?" && pos3 != "?"){
            if(pos1==pos2 && pos2==pos3){
                showwinner(pos1);
                return true;
            }
        }

    }
};

newG.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
