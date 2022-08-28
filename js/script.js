<<<<<<< HEAD
const actions = document.querySelectorAll(".action_container")

actions.forEach((action) => {
    action.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('active')
    })
})


const cards = document.querySelectorAll('#card')

cards.forEach((card) => card.addEventListener('mouseenter', (e) => {
    e.target.classList.add('active')
    e.target.querySelector('.btn').classList.add('active')
}))

cards.forEach((card) => card.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('active')
    e.target.querySelector('.btn').classList.remove('active')
}))



const anims = document.querySelectorAll('.animated')
const layer = document.querySelector('.layer')

window.addEventListener('scroll', animateOnScroll)

animateOnScroll()

function animateOnScroll(){
    for (let i = 0; i < anims.length; i++) {
        const item = anims[i];

        let animationPoint = scrollY + window.innerHeight - window.innerHeight/8;

        (scrollY >= window.innerHeight) ?  layer.classList.add('fixed') : layer.classList.remove('fixed');

        (animationPoint >= item.offsetTop) ? item.classList.add('_active') : false;
    }
}

function getOffset(item){
    return item.getBoundingClientRect().top;
}


const burger = document.querySelector('.burger')
const popup= document.querySelector('.popup')
const nav = document.querySelector('.header__nav').cloneNode(1)

burger.addEventListener('click', (e)=>{
    burger.classList.toggle('active')
    popup.appendChild(nav)
    document.body.classList.toggle('fixed')
    popup.classList.toggle('open')
})

nav.querySelectorAll('#link').forEach((link) => {
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        burger.classList.toggle('active')
        popup.removeChild(nav)
        document.body.classList.toggle('fixed')
        popup.classList.toggle('open')
    })
})


=======
const actions = document.querySelectorAll(".action_container")

actions.forEach((action) => {
    action.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('active')
    })
})


const cards = document.querySelectorAll('#card')

cards.forEach((card) => card.addEventListener('mouseenter', (e) => {
    e.target.classList.add('active')
    e.target.querySelector('.btn').classList.add('active')
}))

cards.forEach((card) => card.addEventListener('mouseleave', (e) => {
    e.target.classList.remove('active')
    e.target.querySelector('.btn').classList.remove('active')
}))



const anims = document.querySelectorAll('.animated')
const layer = document.querySelector('.layer')

window.addEventListener('scroll', animateOnScroll)

animateOnScroll()

function animateOnScroll(){
    for (let i = 0; i < anims.length; i++) {
        const item = anims[i];

        let animationPoint = scrollY + window.innerHeight - window.innerHeight/8;

        (scrollY >= window.innerHeight) ?  layer.classList.add('fixed') : layer.classList.remove('fixed');

        (animationPoint >= item.offsetTop) ? item.classList.add('_active') : false;
    }
}

function getOffset(item){
    return item.getBoundingClientRect().top;
}


const burger = document.querySelector('.burger')
const popup= document.querySelector('.popup')
const nav = document.querySelector('.header__nav').cloneNode(1)

burger.addEventListener('click', (e)=>{
    burger.classList.toggle('active')
    popup.appendChild(nav)
    document.body.classList.toggle('fixed')
    popup.classList.toggle('open')
})

nav.querySelectorAll('#link').forEach((link) => {
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        burger.classList.toggle('active')
        popup.removeChild(nav)
        document.body.classList.toggle('fixed')
        popup.classList.toggle('open')
    })
})


>>>>>>> 4220f7276909586968ae3cf2d2d6737117a9e765
