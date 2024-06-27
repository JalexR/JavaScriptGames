const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const restartButton = document.querySelector('#restart')
restartButton.onclick = resetBoard

let result = 0
let hitPosition
let currentTime = 20
timeLeft.textContent = currentTime
let moverTimer = null
let countDownTimer = null

function randomSquare() {
    squares.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

squares.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition && currentTime > 0) {
            result++
            score.textContent = result
            randomSquare()
        }
    })
})

function moveMole() {
    moverTimer = setInterval(randomSquare, 1000)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime === 0) {
        clearInterval(moverTimer)
        clearInterval(countDownTimer)
        alert("Game over! Score: " + result)
    }
}

function resetBoard() {
    result = 0
    score.textContent = result
    currentTime = 20
    timeLeft.textContent = currentTime
    moveMole()
    countDownTimer = setInterval(countDown, 1000)
}

moveMole()
countDownTimer = setInterval(countDown, 1000)
