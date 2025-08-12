'use strict'

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  const body = document.body
  body.classList.toggle('dark-mode')
})
