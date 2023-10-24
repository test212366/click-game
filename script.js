const button = document.getElementById('btn'),
	timer = document.getElementById('timer'),
	clicks = document.getElementById('clicks'),
	textH = document.querySelector('.setText'),
	returnButton = document.querySelector('.ren')

const TIMER_INT = 5000
const INTERVAL = 100


function timerOn() {
	clicks.textContent++
	setTimeout(function () {
		textH.textContent = 'game over'
		button.disabled = true
		returnButton.classList.add('active')
	}, TIMER_INT)

}


button.addEventListener('click', timerOn)
