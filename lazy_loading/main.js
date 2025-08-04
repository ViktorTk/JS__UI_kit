'use strict'

const imgAll = document.querySelectorAll('img[data-img]')
// создали переменную, содержащую массив элементов тега "img", содержащих атрибут "data-img"

const imgHandler = function (entries, obs) {
  const entry = entries[0]
  // получаем первый объект из массива объектов

  const img = entry.target
  // присваиваем текущий элемент

  if (entry.isIntersecting) {
    // если текущий элемент находится в наблюдении
    img.src = img.dataset.img
    img.addEventListener('load', function () {
      img.classList.remove('blur')
    })
  } else {
    //когда наблюдение за элементом пропадает
    img.classList.add('blur')
  }
  // obs.unobserve(entry.target) // на случай, если обратно изображение подменять на изображение качеством ниже - не нужно
}

const imgObserver = new IntersectionObserver(imgHandler, {
  root: null,
  threshold: 0.5,
})
// создали константу функцией, с IntersectionObserver, передали в нее: 1) функцию imgHandler; 2) объект с настройками.
// видим объект на 50% - вызываем imgHandler

imgAll.forEach((el) => imgObserver.observe(el))
