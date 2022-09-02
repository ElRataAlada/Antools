"use strict"

const form = document.getElementById('form')
const infoText = document.querySelector('.info_text');

let user = null;
let users = [];

getUsersFromLS()

function getUsersFromLS(){
    users = JSON.parse(localStorage.getItem('users')) || []
}

form.addEventListener('submit', sendForm)
function sendForm(e){
    e.preventDefault()

    infoText.textContent = ''
    infoText.classList.remove('error')
    infoText.classList.remove('sucsess')

    if(!getUser()){
        form.querySelector('.email').style.display = 'none';
        form.querySelector('.password').style.display = 'none';
        infoText.textContent = 'You dont have an account'
        infoText.classList.add('error')
       
        document.querySelector('.circle_timer').classList.add('active');

        setTimeout(()=>{
            window.location.href = 'signup.html'
        }, document.querySelector('.circle_timer').dataset.time * 1000 + 1000)
    }
    else if (valideteForm(form)) {loginUser()}
}

function loginUser(){
    users[user].loggined = true;
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = 'index.html'
}

function getUser(){
    const email = form.querySelector('#email');

    for(let i = 0; i < users.length; i++){
        if(users[i].email == email.value){
            user = i;
            return true;
        }
    }
}


function valideteForm(form){
    let errors = 0
    let formReq = form.querySelectorAll('._req')
    
    for(let i = 0; i < formReq.length; i++){
        const input = formReq[i];
        formRemoveError(input);
        
        if(input.type == 'email'){
            if(users[user].email != input.value) {
                errors++
                formAddError(input)
            }
        }

        if(input.type == 'password'){
            if(users[user].password != input.value) {
                errors++
                formAddError(input)
            }
        }

        return errors == 0
    }
}

function formAddError(element){
    element.classList.add('error')
}

function formRemoveError(element){
    element.classList.remove('error')
}