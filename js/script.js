const btns = document.querySelectorAll('.btn')

let user = null;
let users = [];

getUsersFromLS()

function getUsersFromLS(){
    users = JSON.parse(localStorage.getItem('users')) || []
}

function getUser(){
    for(let i = 0; i < users.length; i++){
        if(users[i].loggined){
            user = i;
            return true;
        }
    }
}

checkUser()

function checkUser(){    
    getUser()

    if(user != null) {
        if(users[user].loggined){
            const username = document.querySelector('.user')
            username.textContent = users[user].username

            btns[0].style.display = 'none';
            btns[1].style.display = 'none';
            btns[0].addEventListener('click', (e) => {
                e.preventDefault()

                users[user].loggined = false
                localStorage.setItem('users', JSON.stringify(users))

                window.location.href = 'index.html'
            })
        }
    }
}

const actions = document.querySelectorAll(".action_container")
getActionsFromLocalStorage()

actions.forEach((action) => {
    action.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('active')
        putActionsToLocalStorage()
    })
})

function putActionsToLocalStorage(){
    let res = []
    
    actions.forEach((el) =>{
        res.push(el.classList.contains('active'))
    })

    localStorage.setItem('active_actions', JSON.stringify(res))
}

function getActionsFromLocalStorage(){
    let active = JSON.parse((localStorage.getItem('active_actions') || '[]'))

    if (active.length != actions.length) {localStorage.removeItem('active_actions'); return;}

    for (let i = 0; i < actions.length; i++){
        if (active[i]) {actions[i].classList.add('active')}
    }
}

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
const login_btns = document.querySelector('.btns').cloneNode(1)

burger.addEventListener('click', (e)=>{
    burger.classList.toggle('active')
    popup.appendChild(login_btns)
    popup.appendChild(nav)
    document.body.classList.toggle('fixed')
    popup.classList.toggle('open')
})

nav.querySelectorAll('#link').forEach((link) => {
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        burger.classList.toggle('active')
        popup.removeChild(login_btns)
        popup.removeChild(nav)
        document.body.classList.toggle('fixed')
        popup.classList.toggle('open')
    })
})