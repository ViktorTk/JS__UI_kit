'use strict'

const burger = document.querySelector('.burger')
const nav = document.querySelector('nav')
const close = document.querySelector('.close')
const overlay = document.querySelector('.overlay')

// Открывает меню

burger.addEventListener('click', function () {
  nav.classList.add('add')
  overlay.classList.remove('hidden')
})

// Скрывает меню

function closeBurger() {
  nav.classList.remove('add')
  overlay.classList.add('hidden')
}

close.addEventListener('click', closeBurger)
overlay.addEventListener('click', closeBurger)
