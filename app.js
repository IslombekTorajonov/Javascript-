
// const AppHowHide = {
// 	data(){
// 		return{
// 			word:''
// 		}
// 	}
// Vue.create(AppHowHide).mount('#app')
const App = {
	data(){
		return{
			color:"blue",
			bg:"orange",
			status:false,
			
			styles:{
				fontSize:"30px",
				borderRadius:"10px",
				background:"orange",
				padding:"5px",
			},
			styleX:{
				fontSize:"20px",
				borderRadius:"10px",
				background:"red",
				padding:"5px",	
			}
		}
	},
	methods:{
	change(){
		this.bg = "red"
	}
}
},
Vue.createApp(App).mount("#app")