const board = document.querySelector('#board');
const square = document.querySelector('#square').innerHTML;
const ratio = 400;
const colorsRange = ['#7900FF', '#548CFF', '#93FFD8', '#CFFFDC', '#2E0249', '#570A57', '#A91079', '#F806CC', '#F6F54D'];

function squaresHTML(amount) {
    let html = '';
    for (let i = 0; i < amount; i++) {
        html += square
    }
    board.insertAdjacentHTML("afterbegin", html)
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            setColor(square)
        })
        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })
    })
}

function setColor(element) {
    let color = colorRandomizer()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function colorRandomizer() {
    return colorsRange[Math.floor(Math.random() * colorsRange.length)];
}

squaresHTML(ratio)