import data from './questionData.js'
import createElement from './createElement.js'
import controlClick from './controlClick.js'

export default function sliderQuestion() {
  const refs = {
    parent: document.querySelector('.question__slider'),
    queControl: document.querySelector('.question__control'),
  }

  // render card
  refs.parent.insertAdjacentHTML('beforeend', createElement(data))

  // render control for a slider
  refs.queControl.insertAdjacentHTML('beforeend', createControl(data))

  controlClick(refs)

  function createControl(arr) {
    const arrHtml = []

    for (let i = 0; i < arr.length; i += 1) {
      if (i === 0) {
        arrHtml.push(
          `<div class="question__control-item question__control-item_active" id=${arr[i].id}></div>`
        )
        continue
      }

      arrHtml.push(`<div class="question__control-item" id=${arr[i].id}></div>`)
    }

    return arrHtml.join('')
  }
}
