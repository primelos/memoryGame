document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'chewtle',
            img: 'images/chewtle.png'
        },
        {
            name: 'chewtle',
            img: 'images/chewtle.png'
        },
        {
            name: 'drowzee',
            img: 'images/drowzee.png'
        },
        {
            name: 'drowzee',
            img: 'images/drowzee.png'
        },
        {
            name: 'eevee',
            img: 'images/eevee.png'
        },  
        {
            name: 'eevee',
            img: 'images/eevee.png'
        },  
        {
            name: 'mewtwo',
            img: 'images/mewtwo.png'
        },  
        {
            name: 'mewtwo',
            img: 'images/mewtwo.png'
        },  
        {
            name: 'pikachu',
            img: 'images/pikachu.png'
        },  
        {
            name: 'pikachu',
            img: 'images/pikachu.png'
        },  
        {
            name: 'raichu',
            img: 'images/raichu.png'
        },
        {
            name: 'raichu',
            img: 'images/raichu.png'
        }
    ]
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    const cardsWon = []

     // create game board
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++){
            let card = document.createElement('img')
            card.setAttribute('src', 'images/pokemon.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    // check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(optionOneId === optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/pokemon.png')
            cards[optionTwoId].setAttribute('src', 'images/pokemon.png')
            alert('You have clicked on the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/pokemon.png')
            cards[optionTwoId].setAttribute('src', 'images/pokemon.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congradulations! You found them all'
        }
    }
    // flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }

    }
    createBoard()





})