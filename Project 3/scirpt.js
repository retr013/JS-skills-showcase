const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const leftContainer = document.querySelector('.leftContainer');
const rightContainer = document.querySelector('.rightContainer');
const slidesAmount = document.querySelectorAll('.leftContainer div').length;
const controls = document.querySelector('.controls');
let activeSlideIndex = 0

controls.addEventListener('click', onControlsClick)

leftContainer.style.top = `-${(slidesAmount - 1) * 100}%`

function onControlsClick(e) {
    if (e.target.closest('button') === upButton) {
        changeSlide('up')
    } else if (e.target.closest('button') === downButton) {
        changeSlide('down')
    }
}

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesAmount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesAmount - 1
        }
    }

    leftContainer.style.transform = `translateY(${activeSlideIndex * 100}%)`;
    rightContainer.style.transform = `translateY(-${activeSlideIndex * 100}%)`;
}

