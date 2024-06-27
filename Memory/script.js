document.addEventListener('DOMContentLoaded', () => {
//list all card options
    const cardArray = [
        {
        name: 'fries',
        img: 'images/fries.png'
        },
        {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
        },
        {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
        },
        {
        name: 'pizza',
        img: 'images/pizza.png'
        },
        {
        name: 'milkshake',
        img: 'images/milkshake.png'
        },
        {
        name: 'hotdog',
        img: 'images/hotdog.png'
        },
        {
        name: 'fries',
        img: 'images/fries.png'
        },
        {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
        },
        {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
        },
        {
        name: 'pizza',
        img: 'images/pizza.png'
        },
        {
        name: 'milkshake',
        img: 'images/milkshake.png'
        },
        {
        name: 'hotdog',
        img: 'images/hotdog.png'
        }
    ]
    
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const restartButton = document.querySelector('#restart')
    restartButton.onclick = resetBoard

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    var cardsWonId = []
    
    //creates board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //resets board
    function resetBoard() {
        resultDisplay.textContent = cardsWon.length
        cardsChosen = []
        cardsChosenId = []
        cardsWon = []
        cardsWonId = []
        for(const card of grid.children) {
            card.setAttribute('src', 'images/blank.png')
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const firstChosenId = cardsChosenId[0]
        const secondChosenId =  cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1] && firstChosenId !== secondChosenId) {
            cards[firstChosenId].setAttribute('src', 'images/white.png')
            cards[secondChosenId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
            cardsWonId.push(firstChosenId)
            cardsWonId.push(secondChosenId)
        } else {
            cards[firstChosenId].setAttribute('src', 'images/blank.png')
            cards[secondChosenId].setAttribute('src', 'images/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'You won!!!'
        }
    }

    //flip cards
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        if (!cardsWonId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name)
            cardsChosenId.push(cardId)
            this.setAttribute('src', cardArray[cardId].img)
        }
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})