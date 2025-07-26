'use strict'

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

// - переключение класса "active" по клику на иконку бургер-меню
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

// - сокрытие б-меню по клику на какую-либо ссылку (да, я умею в делегирование событий)
navMenu.addEventListener('click', function (event) {
  if (event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
  }
})
