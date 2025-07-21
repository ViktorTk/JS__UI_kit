'use strict'

const btnModalOpen = document.querySelector('.btn')
const modal = document.querySelector('.modal')
const modalClose = document.querySelectorAll('.modal__close')
const overlay = document.querySelector('.overlay')
const img = document.querySelector('.img')

// ------------------------------------------
// - при открытии модалки - у всех прочих элементов сброс таб-индекса, при закрытии - откат таб-индекса
function delTab() {
  const focus = document.querySelectorAll(
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
  )

  focus.forEach((element) => {
    if (!modal.contains(element)) {
      element.setAttribute('tabindex', '-1')
    }
  })
}

function enableTab() {
  const focus = document.querySelectorAll(
    "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
  )

  focus.forEach((element) => {
    if (!modal.contains(element)) {
      element.removeAttribute('tabindex')
    }
  })
}

// ------------------------------------------

const modalOpen = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
  delTab()
}

function closeModal() {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
  enableTab()
}

// - открыть модалку
btnModalOpen.addEventListener('click', modalOpen)

// ------------------------------------------

// - скрыть модалку по клику на все кнопки с классом "modal__close"
modalClose.forEach((val) => {
  val.addEventListener('click', () => {
    closeModal()
  })
})

// - скрыть модалку по клику на оверлей
overlay.addEventListener('click', () => {
  closeModal()
})

// - скрыть модалку на "Escape"
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal()
  }
})

// ------------------------------------------
// - обновление изображения

let imageArr = [
  './source/b2dc9c2cee44e45672ad6e3994563ac2.jpg',
  './source/i.webp',
  './source/interer_stil_dizajn_83858_3840x2400.jpg',
]

function randomNumber() {
  let i = Math.floor(imageArr.length * Math.random())
  img.src = imageArr[i]
}

document
  .querySelector('.modal__btn-random')
  .addEventListener('click', randomNumber)
