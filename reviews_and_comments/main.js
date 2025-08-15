'use strict'

// rating star
const stars = document.querySelectorAll('i')
const spanNumberRating = document.querySelector('.spanNumberRating')
//
const btnComment = document.querySelector('.add-comment')
const form = document.querySelector('.form')
const btnCloseForm = document.querySelector('.close')
const btnSendForm = document.querySelector('.send')
const formInputName = document.querySelector('.form__input-name')
const formInputLastName = document.querySelector('.form__input-surname')
const wrapper = document.querySelector('.wrapper')
const textArea = document.querySelector('.form__textarea')
const commentUser = document.querySelector('.block__comment')

stars.forEach((item, index) => {
  item.addEventListener('click', () => {
    spanNumberRating.textContent = index + 1
    stars.forEach((item, index2) => {
      index >= index2
        ? item.classList.add('active')
        : item.classList.remove('active')
    })
  })
})

//
