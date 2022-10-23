export default function investQuestion() {
  const refs = {
    investQuestion: document.querySelector('.investment__questions'),
  }

  const width = screen.width

  const messagesText = {
    mobile: [
      'Хто такі бики, ведмеді, вівці та хом’яки?',
      'Які підводні камені на фінансових ринках?',
      'Що таке статегії та тактики торгівлі?',
      'Що робити новачку?',
      'Як торгують роботи?',
    ],
    desktop: [
      'Хто такі бики, ведмеді, вівці та хом’яки?',
      'Які підводні камені на фінансових ринках?',
      'Що таке статегії та тактики торгівлі?',
      'Що робити новачку?',
      'Як торгують роботи?',
      "Як купити акції McDonald's, Google, Apple?",
      'Що впливає на курс біткоїна?',
      'Як торгувати криптовалюту?',
      'Чому профі заробляють на падіннях акцій?',
      'Як обрати платформу для трейдингу?',
      "Хто такі 'бики, ведмеді' та 'хом’яки'?",
      'Чи можливо застрахувати інвестиції?',
    ],
  }

  let currentText = messagesText.mobile

  if (width >= 1200) currentText = messagesText.desktop

  function createElements(arr) {
    return arr.map(createHtml).join('')
  }

  function createHtml(elem) {
    if (elem === currentText[0]) {
      return `
        <div class="investment__questions-item investment__questions-item_active">
            ${elem}
        </div>
        `
    }
    return `
    <div class="investment__questions-item">
        ${elem}
    </div>
    `
  }

  refs.investQuestion.insertAdjacentHTML('beforeend', createElements(currentText))

  // change state on click
  const active = 'investment__questions-item_active'

  refs.investQuestion.addEventListener('click', e => {
    ;[...refs.investQuestion.children].forEach(item => {
      if (item.classList.contains(active)) {
        item.classList.remove(active)
      }
    })
    if (e.target?.classList.contains('investment__questions-item')) {
      e.target.classList.toggle(active)
    }
  })
}
