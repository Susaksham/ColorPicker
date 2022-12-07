document.getElementById('btn').addEventListener('click', () => {
  const resultElement = document.getElementById('result')
  const svg = document.getElementsByClassName('svg-container')[0]
  console.log(svg)

  if (!window.EyeDropper) {
    resultElement.textContent =
      'Your browser does not support the EyeDropper API'
    return
  }

  const eyeDropper = new EyeDropper()

  eyeDropper
    .open()
    .then((result) => {
      resultElement.textContent = result.sRGBHex
      resultElement.style.backgroundColor = result.sRGBHex
      svg.classList.add('show')
    })
    .catch((e) => {
      resultElement.textContent = e
    })
})
