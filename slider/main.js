'use strict'

const slider = document.querySelector('.slider')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')
const slides = [...slider.querySelectorAll('img')]

const slideCount = slides.length

let slideIndex = 0 // Индекс текущего слайда

// Функция для обновления слайдера
const updateSlider = () => {
  // Перебираем все слайды и отображаем только текущий
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none'
  })
}

// Функция для показа следующего слайда
const showNextSlide = () => {
  slideIndex = (slideIndex + 1) % slideCount
  updateSliderDots() // обновляем слайдер с точками
}

// Функция для показа предыдущего слайда
const showPrevSlide = () => {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount
  updateSliderDots() // обновляем слайдер с точками
}

updateSlider()

// Добавляем обработчики событий для кнопок
nextButton.addEventListener('click', showNextSlide)
prevButton.addEventListener('click', showPrevSlide)

// Обработка событий нажатия клавиш для слайдера
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    showPrevSlide()
  } else if (event.key === 'ArrowRight') {
    showNextSlide()
  }
})

// Создаем точки для слайдера
const sliderDots = document.querySelector('.slider-dots')

slides.forEach(() => {
  const dot = document.createElement('span')
  dot.classList.add('slider-dot')
  sliderDots.append(dot)
})

const dots = [...sliderDots.querySelectorAll('.slider-dot')]

// Функция для обновления слайдера с учетом точек
const updateSliderDots = () => {
  updateSlider()

  // Подсветка текущей точки
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex)
  })
}

// Добавляем обработчики событий для точек слайдера
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    slideIndex = index
    updateSliderDots()
  })
})
