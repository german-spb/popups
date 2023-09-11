const getMainWindow = document.getElementById('modal_main')
const getSuccessWindow = document.getElementById('modal_success')
getMainWindow.className = 'modal modal_active'

var clousWindow = document.getElementsByClassName('modal__close modal__close_times')[0]
clousWindow.onclick = () => {
    getMainWindow.className = 'modal'
}
const getShowWindow = document.getElementsByClassName('btn btn_danger modal__close show-success')[0]
getShowWindow.onclick = () => {
    getSuccessWindow.className = 'modal modal_active'
}
clousWindow = document.getElementsByClassName('modal__close modal__close_times')[1]
clousWindow.onclick = () => {
    getSuccessWindow.className = 'modal'
}