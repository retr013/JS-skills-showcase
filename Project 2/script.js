const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', onDragStart)
item.addEventListener('dragend', onDragEnd)

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

function dragover(e) {
    e.preventDefault()
}

function dragenter(e) {
    e.target.classList.add('hovered')
}

function dragleave(e) {
    e.target.classList.remove('hovered')
}

function dragdrop(e) {
    e.target.classList.remove('hovered')
    e.target.append(item)
}

function onDragStart(e) {
    e.target.classList.add('hold')
    setTimeout(() => e.target.classList.add('hide'), 0)
}

function onDragEnd(e) {
    e.target.classList.remove('hold', 'hide')
}
