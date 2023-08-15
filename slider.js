const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.image')
const bottom= document.querySelector('.bottom')

slideNumber = 1;
const length = images.length
 

const nextSlide = ()=>{
    slider.style.transform  = `translateX(-${slideNumber * 800}px)`
    slideNumber++
}

const prevSlide = ()=>{
slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`
slideNumber--
}

const getFirstSlide = ()=>{
    slider.style.transform = `translate(0px)`
    slideNumber = 1
}

const getLastSlide = ()=>{
    slider.style.transform = `translate(-${(length - 1)* 800}px)`
    slideNumber = length
}
//function for the right arrow movement of the pictures
right.addEventListener('click', ()=>{
    slideNumber < length ? nextSlide() : prevSlide()
});
//function for the left arrow movement of the piture

left.addEventListener('click', ()=>{
    slideNumber > 1 ? prevSlide() : getLastSlide()
})

// for the buttons under the picture usage as the arrows
for(let i = 0 ; i < length; i++){
    const div = document.createElement('div')
    div.className = 'button';
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white'