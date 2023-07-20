<script>
import CardComponent from '../components/CardComponent.vue';

 
import { store } from '../store.js';

export default {
	data() {
		return {
			store
		}
	},
	components:{
		CardComponent,
		
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
		}
	}
}

</script>

<template>
	<div class="container">
		<div class="cards-container">

			<div>
				<h3>Series</h3>
				<template  v-for="movie in store.searchResult.movies">

					<CardComponent
					:title="movie.title"
					:originalTitle="movie.original_title"
					:lang="movie.original_language"
					:rankingVote="voteAdjust(movie.vote_average)"
					:imgUrl="movie.poster_path"
					:starQty="voteAdjust(movie.vote_average)">
					</CardComponent>
					
				</template>
			</div>
			<div>
				<h3>Movies</h3>
				<template  v-for="serie in store.searchResult.series">

					<CardComponent
					:title="serie.name"
					:originalTitle="serie.original_name"
					:lang="serie.original_language"
					:rankingVote="voteAdjust(serie.vote_average)"
					:imgUrl="serie.poster_path"
					:starQty="voteAdjust(serie.vote_average)">
					</CardComponent>

				</template>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>

.cards-container{
	
	> div{
		display: flex;
		flex-wrap: wrap;


		h3{
			width: 100%;
		}
	}

	.single-card{
		width: 300px;
	}
}
</style>
