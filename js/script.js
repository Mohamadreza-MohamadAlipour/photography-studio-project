const prevLightbox = document.querySelector('#prev-lightbox')
const nextLightbox = document.querySelector('#next-lightbox')
let imgLightbox = document.querySelector('#img-lightbox')
let containerImg = document.querySelectorAll('.top-work-content .img-item')
let imgTopWork = document.querySelectorAll('.top-work-content .img-item img ')
let index = 0
let lightbox = document.querySelector('#lightbox')
const closeLightbox = document.querySelector('#close-lightbox')

prevLightbox.onclick = () => {
  nextSlide('prev')
}

nextLightbox.onclick = () => {
  nextSlide('next')
}

function nextSlide (direction) {
  if (direction == 'next') {
    if (index === imgTopWork.length - 1) {
      index = 0
    } else {
      index++
    }
  } else if (direction == 'prev') {
    if (index === 0) {
      index = imgTopWork.length - 1
    } else {
      index--
    }
  }

  imgLightbox.src = imgTopWork[index].getAttribute('src')
}

containerImg.forEach(item => {
  item.addEventListener('click', () => {
    lightbox.classList.remove('hide')
    lightbox.classList.add('show')
    imgLightbox.src = item.querySelector('img').getAttribute('src')
  })
})

closeLightbox.addEventListener('click', () => {
  lightbox.classList.remove('show')
  lightbox.classList.add('hide')
})

//menu

const menuLink = document.querySelector('#menu-link')
const nav = document.querySelector('header nav')

menuLink.addEventListener('click', () => {
  nav.classList.add('active')
})

document.body.addEventListener('click', () => {
  if (event.target != nav && event.target != menuLink) {
    nav.classList.remove('active')
  }
})
