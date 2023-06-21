const boxes = document.querySelectorAll('.box')
const infoBox = document.querySelectorAll('.info-box')
const dots = document.querySelectorAll('.dot')

const showInfoBox = () => {
    dots.forEach((dot) => {
        dot.addEventListener('click', function(e) {
            console.log(e.target)
        })
    })
}

const toggleInfo = () => {
    infoBox.forEach((box) => {
        if (!box.classList.contains('d-none')) {
            box.classList.add('d-none')
        } else if (box.classList.contains('d-none')) {
            box.classList.remove('d-none')
        }
    })
}

showInfoBox()


