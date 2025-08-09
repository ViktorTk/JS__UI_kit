'use strict'

const element = {
  sale: document.querySelector('.sale'),
  date: document.querySelector('.date'),
  spans: document.querySelectorAll('span'),
  paragraphs: document.querySelectorAll('p'),
}

document.querySelector('.close').addEventListener('click', () => {
  element.sale.classList.toggle('hidden')
})

const endDate = new Date()
endDate.setHours(endDate.getHours() + 0)
endDate.setMinutes(endDate.getMinutes() + 1)

const updateCountDown = () => {
  const now = new Date()
  const distance = endDate - now
  const { hours, minutes, seconds } = {
    // надо чаще использовать padStart при работе с датами!!!
    hours: String(Math.floor(distance / (1000 * 60 * 60))).padStart(2, '0'),
    minutes: String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, '0'),
    seconds: String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
      2,
      '0'
    ),
  }
  element.date.textContent = `${hours} ч ${minutes} мин ${seconds} с`

  if (distance < 0) {
    clearInterval(intervalValid)
    element.sale.classList.toggle('hidden')
    element.spans.forEach((el) => el.classList.toggle('hidden'))
    element.paragraphs.forEach((item) => (item.style.textDecoration = 'none'))
  }
}

updateCountDown()

const intervalValid = setInterval(updateCountDown, 1000)
