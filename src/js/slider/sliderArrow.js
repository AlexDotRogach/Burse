export default function arrowSlider() {
  const refs = {
    parent: document.querySelector('.question__slider'),
    queControl: document.querySelector('.question__control'),
    leftArrow: document.querySelector('.question__arrow-left'),
    rightArrow: document.querySelector('.question__arrow-right'),
  }

  const cards = [...refs.parent.children]

  refs.leftArrow.addEventListener('click', clickPrev)
  refs.rightArrow.addEventListener('click', clickNext)

  function clickPrev() {
    controlAction('prev')
  }

  function clickNext() {
    controlAction('next')
  }

  function controlAction(type) {
    for (const card of cards) {
      if (card.style.display === 'flex') {
        card.style.display = 'none'
        changeControl(card.getAttribute('id'), 'remove')

        const settingObj = {
          next: {
            elem: card.nextElementSibling,
            to: cards[0],
          },
          prev: {
            elem: card.previousElementSibling,
            to: cards[cards.length - 1],
          },
        }

        if (settingObj[type].elem) {
          changeControl(settingObj[type].elem.getAttribute('id'), 'add')
          settingObj[type].elem.style.display = 'flex'
        } else {
          changeControl(settingObj[type].to.getAttribute('id'), 'add')
          settingObj[type].to.style.display = 'flex'
        }

        break
      }
    }
  }

  function changeControl(id, type) {
    const element = refs.queControl.querySelector(`[id="${id}"]`)

    if (type === 'remove') {
      element.classList.remove('question__control-item_active')
    } else {
      element.classList.add('question__control-item_active')
    }
  }
}
