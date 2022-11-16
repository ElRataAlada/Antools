"use strict"

let userId = null;
let users = [];

getUserFromLS()

function getUserFromLS(){
    users = JSON.parse(localStorage.getItem('users')) || []

    users.forEach((u, i) => {
        if (u.loggined) { userId = i; }
    })

    if (userId === null) {window.location.href = 'index.html'}
}

function logOutUser(){
    users[userId].loggined = false;
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = 'index.html'
}

document.querySelector('.user').innerHTML = users[userId].username || ""



document.querySelector('#logout').addEventListener('click', logOutUser)