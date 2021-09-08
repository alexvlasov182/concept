// Main js file

const bodyScrollLock = require('body-scroll-lock')
const disableBodyScroll = bodyScrollLock.disableBodyScroll
const enableBodyScroll = bodyScrollLock.enableBodyScroll

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const idMenu = document.querySelector('#menu')
const closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
  menu.classList.add('active')
})

closeElem.addEventListener('click', () => {
  menu.classList.remove('active')
})

// Body scroll
hamburger.addEventListener('click', () => {
  // disable scroll
  disableBodyScroll(hamburger)
})

closeElem.addEventListener('click', () => {
  // enable scroll
  enableBodyScroll(closeElem)
  bodyScrollLock.clearAllBodyScrollLocks()
  enableBodyScroll(idMenu)
})
