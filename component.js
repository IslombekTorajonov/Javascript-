const App = {
	data(){
		return{}
	}
}
const app = Vue.createApp(App);
app.component('first-component',{
	data(){
		return{
			name:"First Component | Counter !",
			count:0
		}
	},
	template: '<button v-on:click="count++">{{name}} - {{ count }} </button>'
})
app.mount("#app")