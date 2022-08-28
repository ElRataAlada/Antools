<<<<<<< HEAD
let position = 0

const slider = document.querySelector('.slider__wrapper')
const track = document.querySelector('.slider_track')
const items = document.querySelectorAll('.slider_item')

const prev = slider.querySelector('.prev')
const next = slider.querySelector('.next')

const indicators = document.querySelectorAll('.slider_indicator')

const itemWidth = slider.clientWidth
const movePosition = itemWidth

items.forEach((item) => {
    item.style.cssText = `min-width: ${itemWidth};`
})

moveSlider()

next.addEventListener('click', (e) => {
    removeItem()

    position++
    
    moveSlider()
})

prev.addEventListener('click', (e) => {
    removeItem()
    
    position--
    
    moveSlider()
})

function moveSlider(){
    if(position > items.length-1) {position = 0}
    else if(position < 0) {position = items.length-1}

    indicators[position].classList.add('active')
    items[position].classList.add('active')
    
    track.style.cssText = `transform: translateX(${-position * movePosition}px);`
}

function removeItem(){
    items[position].classList.remove('active')
    indicators[position].classList.remove('active')
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
        removeItem()

        position = index

        moveSlider()
    })
})

let startX
let pressed

const moveOffset = 100

track.addEventListener('mousedown', (e) => {
    startX = e.offsetX
    pressed = true
})

track.addEventListener('mouseup', () => {
    pressed = false
})

track.addEventListener('mousemove', (e) => {
    if(!pressed) {return}

    const mouseMove =  startX - e.offsetX

    if(mouseMove > moveOffset) {
        removeItem(); 

        position++;

        if(position > items.length-1) {position = items.length-1}
        
        moveSlider(); 
        pressed = false;
    }
    else if(mouseMove < -moveOffset) {
        removeItem(); 
        position--;

        if(position < 0) {position = 0}

        moveSlider(); 
        pressed = false;
    }
})

let hovered = false

slider.addEventListener('mouseenter', ()=>{
    hovered = true
})

slider.addEventListener('mouseout', ()=>{
    hovered = false
})

setInterval(()=>{
    if(hovered){return false}

    removeItem();
    position++;
    moveSlider();
}, 10000)
=======
let position = 0

const slider = document.querySelector('.slider__wrapper')
const track = document.querySelector('.slider_track')
const items = document.querySelectorAll('.slider_item')

const prev = slider.querySelector('.prev')
const next = slider.querySelector('.next')

const indicators = document.querySelectorAll('.slider_indicator')

const itemWidth = slider.clientWidth
const movePosition = itemWidth

items.forEach((item) => {
    item.style.cssText = `min-width: ${itemWidth};`
})

moveSlider()

next.addEventListener('click', (e) => {
    removeItem()

    position++
    
    moveSlider()
})

prev.addEventListener('click', (e) => {
    removeItem()
    
    position--
    
    moveSlider()
})

function moveSlider(){
    if(position > items.length-1) {position = 0}
    else if(position < 0) {position = items.length-1}

    indicators[position].classList.add('active')
    items[position].classList.add('active')
    
    track.style.cssText = `transform: translateX(${-position * movePosition}px);`
}

function removeItem(){
    items[position].classList.remove('active')
    indicators[position].classList.remove('active')
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', (e) => {
        removeItem()

        position = index

        moveSlider()
    })
})

let startX
let pressed

const moveOffset = 100

track.addEventListener('mousedown', (e) => {
    startX = e.offsetX
    pressed = true
})

track.addEventListener('mouseup', () => {
    pressed = false
})

track.addEventListener('mousemove', (e) => {
    if(!pressed) {return}

    const mouseMove =  startX - e.offsetX

    if(mouseMove > moveOffset) {
        removeItem(); 

        position++;

        if(position > items.length-1) {position = items.length-1}
        
        moveSlider(); 
        pressed = false;
    }
    else if(mouseMove < -moveOffset) {
        removeItem(); 
        position--;

        if(position < 0) {position = 0}

        moveSlider(); 
        pressed = false;
    }
})

let hovered = false

slider.addEventListener('mouseenter', ()=>{
    hovered = true
})

slider.addEventListener('mouseout', ()=>{
    hovered = false
})

setInterval(()=>{
    if(hovered){return false}

    removeItem();
    position++;
    moveSlider();
}, 10000)
>>>>>>> 4220f7276909586968ae3cf2d2d6737117a9e765
