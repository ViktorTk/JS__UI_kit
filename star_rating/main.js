'use strict'

const stars = document.querySelectorAll('i')
const spanNumberRating = document.querySelector('.spanNumberRating')

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
