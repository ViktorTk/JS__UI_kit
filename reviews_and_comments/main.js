'use strict'

// rating star
const stars = document.querySelectorAll('i')
const spanNumberRating = document.querySelector('.spanNumberRating')
//
const btnCommentAdd = document.querySelector('.add-comment')
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

function addCommentHandler() {
  form.classList.toggle('hidden')
  btnCommentAdd.classList.toggle('hidden')
}

btnCommentAdd.addEventListener('click', () => {
  addCommentHandler()
})

btnCloseForm.addEventListener('click', () => {
  addCommentHandler()
  preventDefault()
})

btnSendForm.addEventListener('click', () => {
  if (formInputName.value.length >= 3 && formInputLastName.value.length >= 4) {
    const ratingComment = +spanNumberRating.textContent
    console.log(ratingComment)

    const arrStrt = []

    for (let i = 0; i < ratingComment; i++) {
      const a1 = document.createElement('span')
      a1.textContent = '⭐'
      arrStrt.push(a1)
    }
    console.log(arrStrt)

    htmlContainer(arrStrt)

    textArea.value = formInputName.value = formInputLastName.value = ''
    addCommentHandler()
    showHiddenComment()
  } else {
    alert('введите корректные данные')
  }
})

//

function htmlContainer(arr) {
  const date = new Date().toLocaleString('default', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })

  wrapper.insertAdjacentHTML(
    'afterbegin',
    `
      <div class="block">
        <h1 class="block__h1">${formInputName.value} ${
      formInputLastName.value
    }</h1>
        <p class="block__p">оценка: ${spanNumberRating.textContent}${arr
      .map((el) => `<span class="spanstar">${el.textContent}</span>`)
      .join('')}</p>
        <p class="block__comment">комментарии: ${
          textArea.value === '' ? '❌️' : '✔'
        }</p>
        <p class="block__comment-user">
          ${textArea.value === '' ? 'нет комментариев' : textArea.value}
        </p>
        <div class="block__date">${date}</div>
      </div>
    `
  )
}

// функция сокрытия лишних комментариев

let buttonsAdded = false
let hideState = false

function showHiddenComment() {
  const div = document.querySelectorAll('.block')
  console.log(div)

  const arrayDiv = [...div]
  if (div.length > 2 && !buttonsAdded) {
    wrapper.insertAdjacentHTML(
      'beforeend',
      `
        <div class="buttons-block">
          <button class="btn1">показать еще</button>
          <button class="btn2">скрыть</button>
        </div>
      `
    )

    buttonsAdded = true

    const showMoreBtn = document.querySelector('.btn1')
    showMoreBtn.addEventListener('click', function () {
      arrayDiv.forEach((el) => {
        el.classList.remove('hidden')
      })
      showMoreBtn.style.display = 'none'
      hideState = false
    })

    const hideBtn = document.querySelector('.btn2')
    hideBtn.addEventListener('click', function () {
      if (!hideState) {
        arrayDiv.slice(1).forEach((el) => {
          el.classList.add('hidden')
        })
        hideState = true
        showMoreBtn.style.display = 'inline-block'
      }
    })
  }

  if (div.length > 2) {
    arrayDiv.forEach((el, index) => {
      if (index > 1) {
        el.classList.add('hidden')
      }
    })
  }
}
