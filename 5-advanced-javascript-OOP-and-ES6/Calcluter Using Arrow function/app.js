let inp = document.querySelector('.calculator-screen')
const keys = Array.from(document.querySelectorAll('.Buttons button')).forEach(element => {
  element.addEventListener('click', function (e) {

    if (e.target.className == 'operator' || e.target.value == '.') {
      if (inp.value[inp.value.length - 1] == '+' ||
        inp.value[inp.value.length - 1] == '-' ||
        inp.value[inp.value.length - 1] == '*' ||
        inp.value[inp.value.length - 1] == '/' ||
        inp.value[inp.value.length - 1] == '.') {} else {
        inp.value += e.target.innerText
      }
    } else {
      inp.value += e.target.innerText
    }

    let Equal = document.querySelector('.equal-sign')
    Equal.addEventListener('click', e => {
      inp.value = eval(inp.value)

    })
    document.querySelector('.all-clear').addEventListener('click', e => {
      inp.value = ''
    })
  })
})