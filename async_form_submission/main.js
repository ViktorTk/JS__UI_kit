'use strict'

const contactForm = document.querySelector('.contact')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')
const url = 'https://jsonplaceholder.typicode.com/posts'

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData.entries())

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) throw new Error(`Ошибка при отправке данных ${res.status}`)

    const result = await res.json()
    console.log('Данные отправлены успешно', result)

    showModal()
  } catch (err) {
    console.error(`Ошибка при отправке данных, ${err}`)
  }
})

// modal

function showModal() {
  modal.style.display = 'block'
}

closeButton.addEventListener('click', () => {
  modal.style.display = 'none'
})

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
})
