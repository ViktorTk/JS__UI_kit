'use strict'

const buttons = document.querySelector('.buttons')
const links = document.querySelectorAll('.link')
const block = document.querySelectorAll('.block')

buttons.addEventListener('click', function (e) {
  if (e.target === buttons) {
    return
  }
  links.forEach((el) => {
    el.classList.remove('link-active')
  })

  block.forEach((item) => {
    item.classList.add('hidden')
  })

  if (e.target.classList.contains('link')) {
    e.target.classList.add('link-active')
  }

  const data = e.target.getAttribute('data-')
  console.log(data)

  document.querySelector(`.block-content--${data}`).classList.remove('hidden')
})
