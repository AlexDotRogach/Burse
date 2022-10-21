export default function controlClick({ parent, queControl } = {}) {
  // first loading
  const controls = [...queControl.children]
  const cards = [...parent.children]
  const width = screen.width
  const display = width >= 900 ? 'flex' : 'grid'

  controls.forEach(item => {
    if (item.classList.contains('question__control-item_active')) {
      chooseCard(cards, item, display)
    }
  })

  queControl.addEventListener('click', e => {
    if (e.target.classList.contains('question__control-item')) {
      controls.forEach(item => item.classList.remove('question__control-item_active'))
      e.target.classList.add('question__control-item_active')
      controlCard(cards, e.target, display)
    }
  })
}

function controlCard(cards, elem, display) {
  // choose one that id will be the same
  chooseCard(cards, elem, display)
}

function chooseCard(cards, elem, display = 'flex') {
  cards.forEach(card => {
    card.style.display = 'none'

    if (card.getAttribute('id') === elem.getAttribute('id')) {
      card.style.display = display
    }
  })
}
