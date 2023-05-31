const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle');
xhr.setRequestHeader('X-RapidAPI-Key', 'ed8716f0e9mshc8133f4a2d518f6p1ed515jsnc09ffa6124c7');
xhr.setRequestHeader('X-RapidAPI-Host', 'weather-by-api-ninjas.p.rapidapi.com');

xhr.send(data);