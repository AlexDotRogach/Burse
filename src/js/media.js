export default function media() {
  const refs = {
    consultWriteBtn: document.querySelector('.consultation-write__btn'),
    questionTitle: document.querySelector('.question__title'),
    educationTitle: document.querySelector('.education__title'),
  }
  const width = screen.width

  if (width >= 900) {
    refs.consultWriteBtn.textContent = 'Записатись на консультацію'
  }

  // question title

  if (width >= 1200) {
    refs.questionTitle.textContent = 'МАЄТЕ ПИТАННЯ? Задайте його нашим провідним спеціалістам'
    refs.educationTitle.textContent = 'Оберіть комфортний для вас спосіб навчання'
  }
}
