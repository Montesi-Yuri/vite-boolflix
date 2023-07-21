<script>
import CardComponent from '../components/CardComponent.vue';
import TrendingComponent from '../components/TrendingComponent.vue';
 
import { store } from '../store.js';
import axios from 'axios';

import SearchResultComponent from './SearchResultComponent.vue';
export default {
	data() {
		return {
			store
		}
	},
	components:{
    CardComponent,
    TrendingComponent,
    SearchResultComponent
},
	methods:{
		voteAdjust(item){
			let vote = parseInt(Math.ceil(item / 2));
			if (vote < 1) {
				vote = 1;
			}
			else if(vote > 5){
				vote = 5;
				console.log('entrato in maggiore di 5')
			}
			return vote;
		},
		showInfo(id){
			store.displayInfo = id;
		},
		hideInfo(){
			store.displayInfo = '';
		},
		hideCast(){
			store.castArray = ''
		},
		getCastInfo(movieId){
			console.log('Id', movieId)
			axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=5c7e8182494749b2f74b1f98b20d6a99`)
			.then(response => {
				store.castArray = response.data.cast;
				console.log('array cast', store.castArray, typeof store.castArray)
			});
		},
	}
}
</script>

<template>

	<TrendingComponent v-show="store.searchResult.movies == '' "  >
	</TrendingComponent>

	<SearchResultComponent></SearchResultComponent>
	
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

</style>
