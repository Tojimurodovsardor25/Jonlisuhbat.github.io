const menuSlide = document.querySelector('.sMenu')
const slideLeft = document.querySelector('.slide-left')
const minContent = document.querySelector('.slide-left .min-content')
const widthConnect = 0

slideFuntion = () => {
    menuSlide.addEventListener('click', () => {
        noneF()
        console.log('msg');
        slideLeft.classList.toggle('active')
    })
    noneF = () => {
        setTimeout(() => {
            console.log('none');
            minContent.classList.toggle('noneF')
        }, 23)
    }
}

slideFuntion()