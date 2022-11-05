const display1 = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const display3 = document.querySelector(".display3");
var num1 = 0;
var num2 = 1;
var win = false;
var oppMoves = false;
var winSound = new Audio("lose.wav");
var click = new Audio("click.mp3");

function number(number){
    if(win == false){
        click.play();
        if (num1 == 0){
            num1 = 1 + number + (11 - number);
        }else{
            num1 = num1 + number + (11 - number);
        }
        display1.innerHTML = num2.toString() + " + " + number.toString();
        display2.innerHTML = " + " + (11 - number).toString();
        display3.innerHTML = num1.toString();
        num2 = num1;
    
        if(num2 == 100){
            win = true;
            winSound.play();
        }
    }

}


function hover(number){
    if(oppMoves == true){
        var opp = 11 - number;
        opp = opp.toString();
        document.getElementById("num" + opp).style.border = "2px solid rgb(0, 253, 241)";
        document.getElementById("num" + opp).style.background = "rgb(0, 253, 241)";
        document.getElementById("num" + opp).style.color = "rgb(0, 0, 0)";
    }
}

function unhover(number){
    if(oppMoves == true){
        var opp = 11 - number;
        opp = opp.toString();
        document.getElementById("num" + opp).style.border = null;
        document.getElementById("num" + opp).style.background = null;
        document.getElementById("num" + opp).style.color = null;
    }
    }

function seeOppMoves(){
    if(oppMoves == false){
        oppMoves = true;
    }else{
        oppMoves = false;
    }
}

function resetGame(){
    num1 = 0;
    num2 = 1;
    win = false;
    oppMoves = false;

    display1.innerHTML = "1+";
    display2.innerHTML = "";
    display3.innerHTML = "";
}