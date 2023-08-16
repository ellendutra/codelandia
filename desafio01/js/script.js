function addClickListeners(selector) {
  const svgImages = document.querySelectorAll(selector)

  svgImages.forEach((img) => {
    img.addEventListener('click', () => {
      img.classList.toggle('clicked')
    })
  })
}

addClickListeners('section img')

function setupScrollReveal() {
  ScrollReveal().reveal('.animated-article', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 350,
  })
}

setupScrollReveal()
