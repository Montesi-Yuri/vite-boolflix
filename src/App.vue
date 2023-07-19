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
		MainComponent,
	},
	methods:{
		searchContent(){
			console.log('user input', store.userSearchInput)
			axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5c7e8182494749b2f74b1f98b20d6a99&query=${store.userSearchInput}`)
			.then(response => {
				store.searchResult = response.data;
				console.log(store.searchResult);
				store.userSearchInput = ''
		});
		}
	}
}

</script>

<template>

	<HeaderComponent @searchMovie="searchContent()">

	</HeaderComponent>

	<MainComponent>

	</MainComponent>

</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;


</style>
