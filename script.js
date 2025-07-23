let gridButtons = document.querySelectorAll('.tic_tac_grids')
let gridKey1 = document.querySelector('#grid_key1')
let gridKey2 = document.querySelector('#grid_key2')
let gridKey3 = document.querySelector('#grid_key3')
let gridKey4 = document.querySelector('#grid_key4')
let gridKey5 = document.querySelector('#grid_key5')
let gridKey6 = document.querySelector('#grid_key6')
let gridKey7 = document.querySelector('#grid_key7')
let gridKey8 = document.querySelector('#grid_key8')
let gridKey9 = document.querySelector('#grid_key9')
let result = document.querySelector('.result')
let resetBtn = document.querySelector('.reset-button')
let firstPlayer = 'o';
let secondPlayer = 'x';
let currentPlayer = firstPlayer;
let checkWinner;
let gameOver = false
let winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

// Apply for Each on gridButtons
gridButtons.forEach((keys) => {
    keys.addEventListener('click', () => {
        if (keys.innerHTML === '') {
            keys.innerHTML = currentPlayer

            if (currentPlayer === firstPlayer) {
                currentPlayer = secondPlayer
            } else {
                currentPlayer = firstPlayer
            }
        }
        winner()
    })
})

// check winner
const winner = () => {
    let someOneWin = true

    winPattern.forEach((keys) => {
        let a = keys[0]
        let b = keys[1]
        let c = keys[2]


        if (gridButtons[a].innerHTML !== '' &&
            gridButtons[a].innerHTML === gridButtons[b].innerHTML &&
            gridButtons[a].innerHTML === gridButtons[c].innerHTML
        ) {
            result.innerHTML = gridButtons[a].innerHTML + ' win';
            someOneWin = false;
            gameOver = true
        }
        if (!someOneWin) {
            currentPlayer = ''
        }

    })

// check Draw
    if (!gameOver) {
        let draw = true
        gridButtons.forEach((btns) => {
            if (btns.innerHTML === '') {
                draw = false
            }
        });

        if (draw) {
            result.innerHTML = 'draw'
        }
    }

}

resetBtn.addEventListener('click',()=>{
    gridButtons.forEach((btns)=>{
        btns.innerHTML = '';
        currentPlayer = firstPlayer;
        gameOver = false;
    })
})
