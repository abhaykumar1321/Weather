const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async (city) => {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
	const response = await fetch(url);
	const data = await response.json()
	return showWeather(data)
}

const showWeather = (data) => {
		console.log(data)
		weather.innerHTML() = `
		<div>
                <img src="https://openweathermap.org/img/wn/04n@2x.png" alt="Cloud Logo">
            </div>
            <div>
                <h1>32 °C</h1>
                <h4>Clear</h4>
            </div>		
		`
}

form.addEventListener(
	"submit",
	function(event) {
		getWeather(search.value)
		event.preventDefault();
	}
)