let gameSeq =[];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if( started == false){
        console.log(" game is started");
        started = true;

        levelUp();
    }
});

function GameFlash(btn) {
    btn.classList.add("flash")
    setTimeout( function() {
        btn.classList.remove("flash");
    } , 250);
}
function userFlash(btn) {
    btn.classList.add("userflash")
    setTimeout( function() {
        btn.classList.remove("userflash");
    } , 250);
}


function levelUp() {
    userSeq =[];
    level++;
    h2.innerText= `Level ${level}`;

    let  randomIdx = Math.floor(Math.random() *3);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    GameFlash(randbtn);
}

function anscheeck(Idx) {
    

    if(userSeq[Idx] === gameSeq[Idx]) {
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp, 1000);
       }
    }else{
        h2.innerHTML =`GAME OVER!!, Your score was <b> ${level}</b><br>enter a new key to start AGAIN`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "#f8e5e9";
        }, 200);
        reset();
    }
}

function btnPress() {
    
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    anscheeck(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click" , btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

    
}