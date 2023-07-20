<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

import { store } from './store.js';
import axios from 'axios';

export default {
	data() {
		return {
			store
		}
	},
	components:{
		HeaderComponent,
		MainComponent
	},
	methods:{
		searchContent(){
			console.log('user input', store.userSearchInput)
			axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c7e8182494749b2f74b1f98b20d6a99&query=${store.userSearchInput}`)
			.then(response => {
				store.searchResult = response.data.results;
				console.log('risultato api', store.searchResult);
				store.userSearchInput = '';
		});
		}
	}
}

</script>

<template>


<header>
	<section>
		<h1>Boolflix</h1>
	</section>
	<section>

		<input type="text" v-model="store.userSearchInput">
		<button @click="searchContent()">
			Search
		</button>
		
	</section>
</header>

<MainComponent>
</MainComponent>

	

</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;


</style>
