
function getWeather(){
let cityName = document.getElementById("c")
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6508c80d1115b29a5bb0e65c0009916d`)
.then(response => response.json())
.then(data => {
	console.log(data)
	let count = document.getElementById("country")
	let city = document.getElementById("c")
	let temp = document.getElementById("temp")

	count.innerHTML = data.sys.country;
	city.innerHTML = data.name;
	temp.innerHTML = data.main.temp
})
}
