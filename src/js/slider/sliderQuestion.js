import data from './questionData.js'
import createElement from './createElement.js'
import controlClick from './controlClick.js'
import arrowSlider from './sliderArrow.js'

export default function sliderQuestion() {
  const refs = {
    parent: document.querySelector('.question__slider'),
    queControl: document.querySelector('.question__control'),
  }

  const width = screen.width
  let html = ''

  // render card
  refs.parent.insertAdjacentHTML('beforeend', createElement(data))

  // render control for a slider

  refs.queControl.insertAdjacentHTML('beforeend', createControl(data))

  controlClick(refs)

  if (width >= 1200) arrowSlider()

  function createControl(arr) {
    const arrHtml = []

    for (let i = 0; i < arr.length; i += 1) {
      if (i === 0) {
        arrHtml.push(createHtml(arr[i], 'question__control-item_active'))
        continue
      }

      arrHtml.push(createHtml(arr[i]))
    }

    return arrHtml.join('')
  }
  // question__control-item_active
  function createHtml(
    { id = 0, titleImg = '', name = 'no name', text: { lightText = 'no text' } = 'no text' },
    active = ''
  ) {
    html = `<div class="question__control-item ${active}" id=${id}></div>`

    if (width >= 1200) {
      html = `
        <div class="question__control-item ${active}" id=${id}>
        <img src="${titleImg}.png" alt="title-Serg" class="question__control-img">
        <span class="question__control-name">
        ${name}
        </span>
        <span class="question__control-city">
          ${lightText}
        </span>
        </div>
      `
    }

    return html
  }
}
