const APP = Vue.createApp({
	data() {
		return {
			firstName: 'John',
			lastName: 'Doe',
			email: 'john@example.com',
			gender: 'male',
			picture: 'https://randomuser.me/api/portraits/men/10.jpg',
			location: 'Canada'
			}
		},

	methods: {
		async getUser() {
			const RES = await fetch('https://randomuser.me/api');
			const { results } = await RES.json();
					
			console.log(results);
				
			this.firstName = results[0].name.first;
			this.lastName = results[0].name.last;
			this.email = results[0].email;
			this.gender = results[0].gender;
			this.picture = results[0].picture.large;
			this.location = results[0].location.country;
		},
	},

	template: `
		<img :src="picture" :alt="firstName" :class="gender" />
		<h1>{{ firstName }} {{ lastName }}</h1>
		<h4>Email: {{ email }}</h4>
		<h4><i class="fas fa-map-marker-alt"></i> {{ location }}</h4>
		<button :class="gender" @click="getUser()">Novo Usuário Aleatório</button>
	`
})

APP.mount('#app');