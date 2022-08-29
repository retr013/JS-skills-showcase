const slides = document.querySelectorAll('.slide')
const container = document.querySelector('.container')

container.addEventListener('click', onCardClick)

function onCardClick(e) {
    removeActive(slides)
    if (e.target.classList.contains('slide')) {
        e.target.closest('.slide').classList.add('active')
    } else {
        removeActive(slides)
    }
}

function removeActive(slides) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}