const mainWindow = document.getElementById('modal_main')
const successWindow = document.getElementById('modal_success')
mainWindow.className = 'modal modal_active'
closeWindow = document.getElementsByClassName('modal__close modal__close_times')

let showWindow = document.getElementsByClassName('btn btn_danger modal__close show-success')[0]
showWindow.onclick = () => {
    successWindow.className = 'modal modal_active'
    mainWindow.className = 'modal'
}

for (let i = 0; i <= 1; i++){
    closeWindow[i].onclick = () => {
        successWindow.className = 'modal'
        mainWindow.className = 'modal'
    }
}
