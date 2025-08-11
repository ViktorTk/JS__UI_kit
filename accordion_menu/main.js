'use strict'

const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((item) => {
  const heading = item.querySelector('.accordion__block')
  const content = item.querySelector('.accordion__content')
  const plus = item.querySelector('.plus')

  heading.addEventListener('click', () => {
    content.classList.toggle('active')
    heading.classList.toggle('active')
    plus.classList.toggle('rotate')
  })
})
