export default function media() {

    const refs = {
        consultWriteBtn: document.querySelector(".consultation-write__btn")
    }
    const width = screen.width

    if(width >= 900) {
        refs.consultWriteBtn.textContent = "Записатись на консультацію"
    }
}