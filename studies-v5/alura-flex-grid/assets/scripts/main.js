const buttonMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.sidebar')

buttonMenu.addEventListener('click', () => {
	menu.classList.toggle('sidebar--active')
})