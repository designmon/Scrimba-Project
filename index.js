let scoreHome = 0
let scoreGuest = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")


function add1Home() {
    scoreHome += 1
    homeEl.innerText = scoreHome
}


function add2Home() {
    scoreHome += 2
    homeEl.innerText = scoreHome
}


function add3Home() {
    scoreHome += 3
    homeEl.innerText = scoreHome
}

function add1Guest() {
    scoreGuest += 1
    guestEl.innerText = scoreGuest
}


function add2Guest() {
    scoreGuest += 2
    guestEl.innerText = scoreGuest
}


function add3Guest() {
    scoreGuest += 3
    guestEl.innerText = scoreGuest
}

function newGame() {
    guestEl.innerText = 0
    homeEl.innerText = 0
}