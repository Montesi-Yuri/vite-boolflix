<script>
import CardComponent from '../components/CardComponent.vue';
import TrendingComponent from '../components/TrendingComponent.vue';
 
import { store } from '../store.js';
import axios from 'axios';

export default {
	data() {
		return {
			store
		}
	},
	components:{
		CardComponent,
		TrendingComponent
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

	<div class="px-10" v-show="store.searchResult.movies != '' ">
		<h3 class="text-white text-2xl pt-8 my-10">
				Movies
			</h3>
		<template class="flex flex-wrap">
			<div v-for="(movie, i) in store.searchResult.movies" :key="i">

				<CardComponent @mouseenter="showInfo(movie.id)" @mouseleave="hideInfo(), hideCast()" @castInfo="getCastInfo(movie.id)"
				:id="movie.id"
				:title="movie.title"
				:overview="movie.overview"
				:lang="movie.original_language"
				:rankingVote="voteAdjust(movie.vote_average)"
				:imgUrl="movie.poster_path"
				:starQty="voteAdjust(movie.vote_average)">
				</CardComponent>
				
			</div>
		</template>
	</div>
	<div class="px-10" v-show="store.searchResult.series != '' ">
		<h3 class="text-white text-2xl pt-8 my-10">
            Series
        </h3>
		<template class="flex flex-wrap">
			<div v-for="serie in store.searchResult.series">

				<CardComponent @mouseenter="showInfo(serie.id)" @mouseleave="hideInfo()"
				:id="serie.id"
				:title="serie.name"
				:overview="serie.overview"
				:lang="serie.original_language"
				:rankingVote="voteAdjust(serie.vote_average)"
				:imgUrl="serie.poster_path"
				:starQty="voteAdjust(serie.vote_average)">
				</CardComponent>

			</div>
		</template>
	</div>
			 
	
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

</style>
