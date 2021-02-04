// Test import of a JavaScript function
// import { example } from './js/example'

// Test import of styles
import './styles/index.scss'

const $ = window.jQuery

$(() => {
  $('.slider').slick({
    arrows: false,
    fade: true,
    dots: true,
  })
})
