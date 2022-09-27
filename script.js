console.log("Tic Tac Toe")
let turn = 'X';
let gameOver = false;
let drawMatch = false;
let boxText=''
let player1 = false;
let p1=''
let p2=''



// Function to change the turn 


const changeTurn =()=>{

    return turn === 'X'? 'O' : 'X';
  
}
console.log(player1);
function changePlayers(){
    player1 = true;
    console.log("this "+player1);
}

function changePlayers2(){
    player1=false;
    console.log("player 1 is" + player1);
}



function showDiv() {
    document.getElementById('hello').style.display = "block";
  }
  
  function showValue() {
    p1 = document.getElementById('name').value;
    document.getElementById('ans').innerHTML ="Player 1: "+ p1 + "  X";
    if(player1==true){
        document.getElementById('ans2').innerHTML ="Player 2 is computer";
    }
    document.getElementById('hello').style.display = "none";
 
    
  }



  function showDiv2() {
    document.getElementById('hello2').style.display = "block";
  }
  
  function showValue2() {

    p1 = document.getElementById('name1').value;
    document.getElementById('ans' ).innerHTML = "Player1: "+ p1 + " X";
    p2 = document.getElementById('name2').value;
    document.getElementById('ans2' ).innerHTML ="Player2 :"+ p2 + " O";
    

    document.getElementById('hello2').style.display = "none";
  }



const checkWin =()=>{
    let boxtexts = document.getElementsByClassName('boxText')
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,5],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [6,4,2]
    ]
    
    for(let i=0; i<=wins.length;i++){
        console.log(boxtexts[0].innerHTML)
        console.log(boxtexts[1].innerHTML)
        console.log(boxtexts[2].innerHTML)
        console.log(boxtexts[3].innerHTML)
        if(((boxtexts[0].innerHTML)==(boxtexts[1].innerHTML)) &&((boxtexts[1].innerHTML)==(boxtexts[2].innerHTML) && (boxtexts[0].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        
        else if(((boxtexts[3].innerHTML)==(boxtexts[4].innerHTML)) &&((boxtexts[4].innerHTML)==(boxtexts[5].innerHTML) &&(boxtexts[3].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(((boxtexts[6].innerHTML)==(boxtexts[7].innerHTML)) &&((boxtexts[7].innerHTML)==(boxtexts[8].innerHTML)&&(boxtexts[6].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(((boxtexts[0].innerHTML)==(boxtexts[3].innerHTML)) &&((boxtexts[3].innerHTML)==(boxtexts[5].innerHTML)&&(boxtexts[0].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(((boxtexts[1].innerHTML)==(boxtexts[4].innerHTML)) &&((boxtexts[4].innerHTML)==(boxtexts[7].innerHTML)&&(boxtexts[1].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(((boxtexts[2].innerHTML)==(boxtexts[5].innerHTML)) &&((boxtexts[5].innerHTML)==(boxtexts[8].innerHTML)&&(boxtexts[2].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(((boxtexts[0].innerHTML)==(boxtexts[4].innerHTML)) &&((boxtexts[4].innerHTML)==(boxtexts[8].innerHTML)&&(boxtexts[0].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(((boxtexts[6].innerHTML)==(boxtexts[4].innerHTML)) &&((boxtexts[4].innerHTML)==(boxtexts[2].innerHTML)&&(boxtexts[6].innerHTML != '')))
        {
            console.log("same");
            gameOver = true;
        }
        else if(
        (boxtexts[0].innerHTML != '')&&
        (boxtexts[1].innerHTML != '')&&
        (boxtexts[2].innerHTML != '')&&
        (boxtexts[3].innerHTML != '')&&
        (boxtexts[4].innerHTML != '')&&
        (boxtexts[5].innerHTML != '')&&
        (boxtexts[6].innerHTML != '')&&
        (boxtexts[7].innerHTML != '')&&
        (boxtexts[8].innerHTML != '')){
            console.log("Draw");

            drawMatch = true;
        }
    }
   
console.log(gameOver);
}
console.log(gameOver);



let boxes = document.getElementsByClassName('box')


function computerMove() {
    var emptyCells = [];
    var random;


  Array.from(boxes).forEach(element =>{
    let cell = element.querySelector('.boxText');
      if (cell.innerHTML == '') {
        emptyCells.push(cell);

      }
    });
 
    random = Math.ceil(Math.random() * emptyCells.length) - 1;
    emptyCells[random].innerHTML = turn;
    console.log(turn)
  
    checkWin();

    if(!gameOver){
        document.getElementsByClassName('info')[0].innerText= "Turn for" + turn;
    }
    if(gameOver){

        alert("O won!");
        gameOver=false;
    }
    if(drawMatch){
        alert("Draw Match")
        drawMatch=false;
     }
      turn = changeTurn();
   
  }



Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
  
        element.addEventListener('click', ()=>{

            if(boxText.innerText === ''){
                boxText.innerText = turn;
              
                checkWin();
                if(!gameOver){
                    document.getElementsByClassName('info')[0].innerText= "Turn for" + turn;
                }
            
                if(gameOver){
                    
                    alert(turn+ "won!");
                    
                }
                if(drawMatch){
                   
                   alert("Draw Match")
                   
                }
                turn = changeTurn();
            }
            console.log("this "+player1);
            if(player1 == true && !gameOver ){
                computerMove();
            }
    })
   
})
clear();
function clear(){
    document.getElementById('reset').addEventListener('click', function(){   
        location.reload();
        reset();
       });
    document.getElementById("reset").addEventListener("click", ()=> {
        console.log("i am clicked!");
        Array.from(boxes).forEach(element =>{
            let boxText = element.querySelector('.boxText');
            boxText.innerText=" "
           
        })
        console.log(p1);
        console.log(p2)
        document.getElementById('ans' ).innerHTML =  p1 ;
        document.getElementById('ans2' ).innerHTML = p2 ;
        turn="X";
        document.getElementsByClassName('info')[0].innerText= "Turn for" + turn;
        console.log(turn);
        
      });
    
}

function reset(){
    turn = "X";
    gameOver=false;
    drawMatch=false;
    player1=false;
    p1='';
    p2='';   
}
