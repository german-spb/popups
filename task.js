const mainWindow = document.getElementById('modal_main')
const successWindow = document.getElementById('modal_success')
mainWindow.className = 'modal modal_active'

let closeWindow = document.getElementsByClassName('modal__close modal__close_times')[0]
closeWindow.onclick = () => {
    mainWindow.className = 'modal'
}
let showWindow = document.getElementsByClassName('btn btn_danger modal__close show-success')[0]
showWindow.onclick = () => {
    successWindow.className = 'modal modal_active'
    mainWindow.className = 'modal'
}
closeWindow = document.getElementsByClassName('modal__close modal__close_times')[1]
closeWindow.onclick = () => {
    successWindow.className = 'modal'
}
