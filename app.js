let turn = 'O';
let total_turn = 0; 

const turno=document.querySelector('#turno');
let turnx=document.querySelector('#turnx');

turno.addEventListener('click',(event)=>{
     if(total_turn===0)
      { turn='O';
          total_turn=1;
      }
})
turnx.addEventListener('click',(event)=>{
          if(total_turn===0)
           { turn='X';
               total_turn=1;
           }       
})

// Logic- Winner KAise Decide Hoga
const winner = [[0,1,2],[3,4,5],[6,7,8],
[0,3,6],[1,4,7],[2,5,8],
[0,4,8],[2,4,6]];

let tictactoe = new Array(9).fill("E");

function checkwinner(){
    for(let [index0, index1, index2] of winner)
    {
        if(tictactoe[index0]!="E"&&tictactoe[index0]===tictactoe[index1]&&tictactoe[index1]===tictactoe[index2])
        return 1;
    }
    return 0;
}

// ✅ Animation Helper
function boytrans(checkturn){
    let img;
    if(checkturn==='O') img=document.querySelector('#boy1');
    else img=document.querySelector('#boy2');

    if(img){
        img.style.transform='scale(.7)';
        img.style.transition="transform 0.1s ease"; // smooth effect
        setTimeout(()=>{ img.style.transform=''; },300);
    }
}

// Print Kaise Hoga
const printer =  ((event)=>{
    const element = event.target;
     if(tictactoe[element.id]==="E")
        {    
        total_turn++;  

        if(turn=='O')
        {
            element.innerHTML= "O";
            tictactoe[element.id] = "O";
            boytrans('O');   // ✅ O ke baad boy1 animate hoga
            if(checkwinner())
            {
                document.getElementById('winningMessage').innerHTML = "Winner is O";
                board.removeEventListener('click',printer);
                return;
            }
            turn = "X";
        }
        else{
            element.innerHTML= "X";
            tictactoe[element.id] = "X";
            boytrans('X');   // ✅ X ke baad boy2 animate hoga
            if(checkwinner())
            {
                document.getElementById('winningMessage').innerHTML = "Winner is X";
                board.removeEventListener('click',printer);
                return;
            }
            turn = "O";
        }

        // Jab 9 turn pure ho jayenge then Match Draw ho jayega
        if(total_turn==9){
            document.getElementById('winningMessage').innerHTML = "Match is Draw";
            board.removeEventListener('click',printer);
        }   
    }
})

const board = document.querySelector('.board');
board.addEventListener('click', printer);

// Restart karne ke liye 
const Restart = document.getElementById('restartButton');
Restart.addEventListener('click', ()=>{
    const cell  = document.getElementsByClassName('cell');

    Array.from(cell).forEach((value)=>{
        value.innerHTML = "";
    })

    turn = "O";
    total_turn = 0;
    tictactoe = new Array(9).fill("E");
    document.getElementById('winningMessage').innerHTML ="";
    board.addEventListener('click' , printer);
})
