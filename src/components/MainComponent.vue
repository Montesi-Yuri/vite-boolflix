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
		voteAdjust(){
			
			for (let i = 0; i < store.searchResult.movies.length; i++) {
				const movie = store.searchResult.movies[i];
				
			}
		}
	}
}

</script>

<template>
	<div class="container">
		<div class="cards-container">

			<div>
				<h3>Series</h3>
				<template  v-for="(movie, i) in store.searchResult.movies" :key="i">

					<CardComponent
					:title="movie.title"
					:originalTitle="movie.original_title"
					:lang="movie.original_language"
					:rankingVote="movie.vote_average"
					:imgUrl="movie.poster_path">
					</CardComponent>
					
				</template>
			</div>
			<div>
				<h3>Movies</h3>
				<template  v-for="(serie, j) in store.searchResult.series" :key="j">

					<CardComponent
					:title="serie.name"
					:originalTitle="serie.original_name"
					:lang="serie.original_language"
					:rankingVote="serie.vote_average"
					:imgUrl="serie.poster_path">
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
