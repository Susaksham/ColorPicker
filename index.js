document.getElementById('btn').addEventListener('click', () => {
  const resultElement = document.getElementById('result')
  const svg = document.getElementsByClassName('svg-container')[0]
  document.getElementById('btn').classList.toggle('add1')
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
      document.getElementsByClassName('input')[0].value = result.sRGBHex
      resultElement.textContent = result.sRGBHex
      resultElement.style.backgroundColor = result.sRGBHex
      svg.classList.add('show')
      document.getElementById('btn').classList.toggle('add1')
    })
    .catch((e) => {
      resultElement.textContent = e
    })
})

document
  .querySelector('.svg-container')
  .addEventListener('click', function myFunction() {
    // Get the text field

    var copyText = document.querySelector('.input')

    // Select the text field
    copyText.select()
    copyText.setSelectionRange(0, 99999) // For mobile devices

    // Copy the text inside the text field
    document.execCommand('copy')
    // navigator.clipboard.writeText(copyText.innerText)
    const svg = document.getElementsByClassName('svg-container')[0]
    // Alert the copied text
    svg.classList.add('add')
    setTimeout(() => {
      svg.classList.remove('add')
    }, 500)
  })
