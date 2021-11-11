window.onload = function(){
	document.body.className = localStorage.getItem("theme")
}
const Theme = {
	data(){
		return{
			day:true
		}
	},
	methods:{
		night(){
			document.body.className = "yellow darken-1";
			localStorage.setItem("theme", "yellow darken-1")
		},
		light(){
			document.body.className = "red lighten-1";
			localStorage.setItem("theme", "red lighten-1")
		}
	}
}
const app = Vue.createApp(Theme);
app.mount('#theme')