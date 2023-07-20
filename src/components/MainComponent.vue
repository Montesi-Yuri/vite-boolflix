<script>
import CardComponent from '../components/CardComponent.vue';
import TrendingComponent from '../components/TrendingComponent.vue';
 
import { store } from '../store.js';

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
		}
	}
}

</script>

<template>

	<TrendingComponent></TrendingComponent>

		<!-- <div>
				<template  v-for="(movie, i) in store.searchResult.movies" :key="i">

					<CardComponent @mouseenter="showInfo(movie.id)" @mouseleave="hideInfo()"
					:id="movie.id"
					:title="movie.title"
					:overview="movie.overview"
					:lang="movie.original_language"
					:rankingVote="voteAdjust(movie.vote_average)"
					:imgUrl="movie.poster_path"
					:starQty="voteAdjust(movie.vote_average)">
					</CardComponent>
					
				</template>
			</div>
			<div>
				<template  v-for="serie in store.searchResult.series">

					<CardComponent @mouseenter="showInfo(serie.id)" @mouseleave="hideInfo()"
					:id="serie.id"
					:title="serie.name"
					:overview="serie.overview"
					:lang="serie.original_language"
					:rankingVote="voteAdjust(serie.vote_average)"
					:imgUrl="serie.poster_path"
					:starQty="voteAdjust(serie.vote_average)">
					</CardComponent>

				</template>
			</div> -->
			 
	
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

</style>
