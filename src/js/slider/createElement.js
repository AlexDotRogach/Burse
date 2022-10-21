export default function createElement(arr) {
  return arr.map(createHtml).join('')
}

const width = screen.width

function createHtml({
  id = 0,
  titleImg = '',
  name = '',
  text: { type = '', lightText = '' } = {},
  info = '',
  comment = '',
  formatText = '',
  formatIndicate = '',
  experienceText = '',
  experienceDate = '',
  graduatesText = '',
  graduatesAmount = '',
  yearText = '',
  yearAmount = '',
} = {}) {
  let html = `
  <div class="card" id=${id}>
    <div class="card__title">
            <div class="card__title-img-logo">
              <img src="${titleImg}.png" alt="Sergiy" />
            </div>
            <div class="card__title-info">
              <span class="card__title-name">${name}</span>
              <div class="card__title-type">
                <div class="card__title-achiev"></div>
                <span class="card__title-text"
                  ><span class="card__title-text-type">${type}</span> ${lightText}</span
                >
              </div>
            </div>
          </div>
          <div class="card__info">
                ${info}          
          </div>
          <div class="card__format">
            <span class="card__format-text">${formatText}</span>
            <span class="card__format-indicate">${formatIndicate}</span>
          </div>
          <div class="card__experience">
            <span class="card__experience-text"
              ><svg class="card__experience-svg">
                <use xlink:href="./sprites/sprite-simple.svg#question-suitcase"></use>
              </svg>
              ${experienceText}</span
            >
            <span class="card__experience-date">${experienceDate}</span>
          </div>
          <div class="card__graduates">
            <span class="card__graduates-text"
              ><svg class="card__graduates-svg">
                <use xlink:href="./sprites/sprite-simple.svg#question-customer"></use>
              </svg>
              ${graduatesText}</span
            >
            <span class="card__graduates-amount">${graduatesAmount}</span>
          </div>
          <div class="card__year">
            <span class="card__year-text"
              ><svg class="card__year-svg">
                <use xlink:href="./sprites/sprite-simple.svg#question-mortarboard"></use>
              </svg>
              ${yearText}</span
            >
            <span class="card__year-amount">${yearAmount}</span>
          </div>
          <button class="button_yel card__button_yel">Записатись до викладача</button> 
        </div>
    `

  if (width >= 900) {
    html = `
    <div class="card-desk" id=${id}>
    <div class="card-desk__img-wrap">
      <img class="card-desk__img" src="${titleImg}-desk.png" alt="card-img">
    </div>
    <div class="card-desk__info">
      <div class="card-desk__title-info">
        <span class="card-desk__title-name">${name}</span>
        <div class="card-desk__title-type">
          <div class="card-desk__title-achiev"></div>
          <span class="card-desk__title-text"
            ><span class="card-desk__title-text-type">${type} </span> ${lightText}</span
          >
        </div>
      </div>
      <div class="card-desk__info-text">
        ${info}
      </div>
      <div class="card-desk__comment-wrap">
        <div class="card-desk__comment-img">
          <svg class="card-desk__comment-svg">
            <use xlink:href="./sprites/sprite-simple.svg#question-quotes"></use>
          </svg>
        </div>
        <div class="card-desk__comment-text">${comment}</div>
      </div>
    </div>
    
    <div class="card-desk__points">
      <div class="card-desk__format">
        <span class="card-desk__format-text">${formatText}</span>
        <span class="card-desk__format-indicate">${formatIndicate}</span>
      </div>
      <div class="card-desk__experience">
        <span class="card-desk__experience-text"
          ><svg class="card-desk__experience-svg">
            <use xlink:href="./sprites/sprite-simple.svg#question-suitcase"></use>
          </svg>
          ${experienceText}</span
        >
        <span class="card-desk__experience-date">${experienceDate}</span>
      </div>
      <div class="card-desk__graduates">
        <span class="card-desk__graduates-text"
          ><svg class="card-desk__graduates-svg">
            <use xlink:href="./sprites/sprite-simple.svg#question-customer"></use>
          </svg>
          ${graduatesText}</span
        >
        <span class="card-desk__graduates-amount">${graduatesAmount}</span>
      </div>
      <div class="card-desk__year">
        <span class="card-desk__year-text"
          ><svg class="card-desk__year-svg">
            <use xlink:href="./sprites/sprite-simple.svg#question-mortarboard"></use>
          </svg>
          ${yearText}</span
        >
        <span class="card-desk__year-amount">${yearAmount}</span>
      </div>
      <button class="button_yel card-desk__button_yel">Записатись до викладача</button> 
    </div>
  </div>
    `
  }

  return html
}
