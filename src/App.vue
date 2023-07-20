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
				store.searchResult.movies = response.data.results;
				console.log('risultato api movie', store.searchResult.movies);
			});
			axios.get(`https://api.themoviedb.org/3/search/tv?api_key=5c7e8182494749b2f74b1f98b20d6a99&query=${store.userSearchInput}`)
				.then(response => {
					store.searchResult.series = response.data.results;
					console.log('risultato api tv', store.searchResult.series);
					store.userSearchInput = '';
			});
		
		}
	},
	
}

</script>

<template>

	<HeaderComponent @searchMovie="searchContent()"></HeaderComponent>

	<div class="text-red-500 text-center text-2xl my-20" v-show="store.searchResult.movies && store.searchResult.series == '' ">
		<h2>
			No results for your research
		</h2>
	</div>

	<MainComponent></MainComponent>

</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;


#app{
	background: rgb(46,45,45);
	background: linear-gradient(0deg, rgba(46,45,45,1) 85%, rgba(0,0,0,1) 95%);
	background-repeat: no-repeat;
	min-height: 100vh;
}


</style>
