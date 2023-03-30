let heading = document.getElementById('heading');
let restart = document.getElementById('restart');
let boxes = Array.from(document.getElementsByClassName('box'));
let playerturn = document.querySelector('.player-turn');


const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

let plays = 0


const startGame = () =>{
    boxes.forEach(box => box.addEventListener('click' , boxClicked));
}
function boxClicked(e){
    console.log(e)
    const id = e.target.id;
    if(!spaces[id]&&plays<9){
        spaces[id]= currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            heading.textContent = `${currentPlayer} has WON`;
            let winningBlocks = playerHasWon();
            winningBlocks.map(box =>boxes[box].style.backgroundColor = 'rgba(145, 145, 145, 0.466)');
            plays=10;
            playerturn.textContent='';

        }
        else{
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT:X_TEXT;
        playerturn.textContent = `${currentPlayer}'s turn`
        plays++;
        }
    }
    if(plays==9){
        heading.textContent = `DRAW GAME!`;
        heading.style.color='rgba(255, 92, 92, 0.877)'
        boxes.forEach(box=>box.style.color='rgba(255, 92, 92, 0.877)')
        playerturn.textContent='';
    }
}
startGame();


const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function playerHasWon() {
    for(condition of winningCombos){
        let [a,b,c] = condition;
        if(spaces[a] && (spaces[a]==spaces[b]&&spaces[b]==spaces[c])){
            return [a,b,c];
        }
    }
    return false;

}

restart.addEventListener('click', function(){
    plays=0
    heading.style.color='white'
     boxes.forEach(box=>box.style.color='white')
    spaces.fill('');
     playerturn.textContent = `X's turn`
    boxes.forEach(box=>{
        box.innerText='';
        box.style.backgroundColor='';
    })
    heading.textContent = `TicTacToe`;
    currentPlayer = X_TEXT;
});

