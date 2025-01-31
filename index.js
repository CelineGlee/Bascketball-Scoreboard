let homeNum = 0
let guestNum = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

// home button

function add1pointHome(){
    homeNum += 1
    homeEl.textContent = homeNum
}

function add2pointHome(){
    homeNum += 2
    homeEl.textContent = homeNum
}

function add3pointHome(){
    homeNum += 3
    homeEl.textContent = homeNum
}

// Guest button

function add1pointGuest(){
    guestNum += 1
    guestEl.textContent = guestNum
}

function add2pointGuest(){
    guestNum += 2
    guestEl.textContent = guestNum
}

function add3pointGuest(){
    guestNum += 3
    guestEl.textContent = guestNum
}

