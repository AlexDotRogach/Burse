export default function education() {
  const refs = {
    parent: document.querySelector('.education__course-wrap'),
  }
  const courses = [
    {
      courseText: 'Індивідуальний курс',
      courseVip: 'VIP CBT Belastium',
      courseDuring: 'Тривалість курсу:',
      courseTime: '10 днів',
      img: './img/educ-coint-gold.png',
      info: 'Время, длительность и интенсивность занятий выбирает сам ученик, в отличие от обучения...',
      priceText: 'Вартість:',
      price: { priceDisc: '7 892 ₴', priceValue: '4 999 ₴' },
    },
    {
      courseText: 'Індивідуальний курс',
      courseVip: 'CBT Belastium',
      courseDuring: 'Тривалість курсу:',
      courseTime: '10 днів',
      img: './img/educ-coint-blue.png',
      info: 'Время, длительность и интенсивность занятий выбирает сам ученик, в отличие от обучения...',
      priceText: 'Вартість:',
      price: { priceDisc: '7 892 ₴', priceValue: '4 999 ₴' },
    },
  ]

  function createElements(arr) {
    return arr.map(createHtml).join('')
  }

  function createHtml({
    courseText = '',
    courseVip = '',
    courseDuring = '',
    courseTime = '',
    img = '',
    info = '',
    priceText = '',
    price: { priceDisc = '', priceValue = '' },
  } = {}) {
    return `
    <div class="education__course">
    <div class="education__course-header">
      <div class="education__course-title">
        <span class="education__course-text">${courseText}</span>
        <span class="education__course-vip">${courseVip}</span>
        <span class="education__course-during"
          >${courseDuring}<span class="education__course-time">${courseTime}</span></span
        >
      </div>
      <div class="education__course-img-wrap">
        <img class="education__course-img" src="${img}" alt="educ-coint-gold"/>
      </div>
    </div>
    <div class="education__course-main">
      <div class="education__course-info">
        ${info}
      </div>
      <div class="education__course-separator"></div>
      <div class="education__course-price-wrap">
        <div class="education__course-price-text">${priceText}</div>
        <div class="education__course-price">
          <div class="education__course-price-disc">${priceDisc}</div>
          <div class="education__course-price-value">${priceValue}</div>
        </div>
      </div>
      <div class="education__course-wrap-btn">
        <button class="button_yel education__course-btn">Детальніше про курс</button>
      </div>
    </div>
  </div>
    `
  }

  refs.parent.insertAdjacentHTML('beforeend', createElements(courses))
}
