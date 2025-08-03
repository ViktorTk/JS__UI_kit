'use strict'

const imgAll = document.querySelectorAll('img[data-img]')

const imgHandler = function (entries, obs) {
  const entry = entries[0]

  const img = entry.target

  if (entry.isIntersecting) {
    img.src = img.dataset.img
    img.addEventListener('load', function () {
      img.classList.remove('blur')
    })
  } else {
    img.classList.add('blur')
  }
  // obs.unobserve(entry.target) // на случай, если обратно изображение подменять на изображение качеством ниже - не нужно
}

const imgObserver = new IntersectionObserver(imgHandler, {
  root: null,
  threshold: 0.5,
})

imgAll.forEach((el) => imgObserver.observe(el))
