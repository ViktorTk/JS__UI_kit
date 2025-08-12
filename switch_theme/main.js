'use strict'

// // без сохранения состояния темы в локальном хранилище

// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//   const body = document.body
//   body.classList.toggle('dark-mode')
// })

// // с сохранением состояния темы страницы

const btn = document.querySelector('.btn')
const body = document.body
const save = localStorage.getItem('theme')

if (save) body.classList.add(save)

btn.addEventListener('click', () => {
  const a1 = body.classList.contains('dark-mode') ? 'light-theme' : 'dark-mode'

  body.classList.toggle('dark-mode')
  localStorage.setItem('theme', a1)
})
