let form = document.forms.myForm;

form.onchange = function (){
    let cash = Number(form.cash.value);
    let years = Number(form.years.value);
    let stapka = Number(form.stapka.value);
    let result = cash * stapka;
    let result1 = stapka  * cash;


    document.getElementById("bylo").innerHTML = cash;
    document.getElementById("stanet").innerHTML = result;
    document.getElementById("years").innerHTML = result1;

    document.querySelector(".color-red").style.height = `${cash / 4 }px`
    document.querySelector(".color-green").style.height = `${stapka / 4 * cash}px`


}
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
let s = document.getElementById("select");
s.onchange =()=>{
	let val = s.value;
	if(val === "triangle"){
		document.querySelector
	}
}