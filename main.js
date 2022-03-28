const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'

rec.onend = function() {
	console.log("Aloqa tugadi!")
}

rec.onresult = function(event) {
	
	const decide = event.results[0][0].transcript
	if(decide === 'qizil') {
		document.body.style.backgroundColor = 'red'
	}
	else if(decide === 'yashil') {
		document.body.style.backgroundColor = 'green'
	}
}

rec.onerror = function() {
	console.log('Xatolik yuz berdi')
}

window.onkeyup = function(event) {
	if(event.keyCode === 32) {
		rec.start()
	}
} 

