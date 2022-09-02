"use strict"

const form = document.getElementById('form')
const infoText = document.querySelector('.info_text');

let user = {};

let users = []

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
    
    if (!checkCreated(form)) {if (valideteForm(form)) {putUsertoLS();}}
}

function putUsertoLS(){
    user.loggined = false
    users.push(user)
    
    form.querySelector('.username').style.display = 'none';
    form.querySelector('.email').style.display = 'none';
    form.querySelector('.password').style.display = 'none';
    document.querySelector('.circle_timer').classList.add('active');
    
    infoText.textContent = 'You have successfully created an account'
    infoText.classList.add('sucsess')
    
    localStorage.setItem('users', JSON.stringify(users))

    setTimeout(()=>{
        window.location.href = 'login.html'
    }, document.querySelector('.circle_timer').dataset.time * 1000 + 1000)
}

function checkCreated(form){
    const email = form.querySelector('#email')
    
    for (let i = 0; i < users.length; i++){
        user = users[i];
        
        if (user.email == email.value){
            form.querySelector('.username').style.display = 'none';
            form.querySelector('.email').style.display = 'none';
            form.querySelector('.password').style.display = 'none';
            document.querySelector('.circle_timer').classList.add('active');

            infoText.textContent = 'You already have an account.'
            infoText.classList.add('error')

            setTimeout(()=>{
                window.location.href = 'login.html'
            }, document.querySelector('.circle_timer').dataset.time * 1000 + 1000)
            
            return true
        }
    }
    
    user = {}
    return false
}

function valideteForm(form){
    let formReq = form.querySelectorAll('._req')
    let errors = 0
    
    for(let i = 0; i < formReq.length; i++){
        const input = formReq[i];
        formRemoveError(input);
        
        if(input.type == 'text') {
            if (usernameTest(input.value)){
                formRemoveError(input)
                user.username = input.value
            }
            else {errors++; formAddError(input)}
        }
        
        else if(input.type == 'email') {
            if (emailTest(input.value)){
                formRemoveError(input)
                user.email = input.value
            }
            else {errors++; formAddError(input)}
        }
        
        else if(input.type == 'password') {
            if (passwordTest(input.value)){
                formRemoveError(input)
                user.password = input.value
            }
            else {errors++; formAddError(input)}
        }
    }
    
    return errors == 0
}

function usernameTest(value){
    return /^[a-zA-Z0-9]+$/.test(value)
}

function emailTest(value){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

function passwordTest(value){
    return /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,25}$/.test(value)
}

function formAddError(element){
    element.classList.add('error')
}

function formRemoveError(element){
    element.classList.remove('error')
}