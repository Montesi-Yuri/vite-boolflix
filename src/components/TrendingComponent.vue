<script>
import CardComponent from '../components/CardComponent.vue';
import { store } from '../store.js';
import axios from 'axios';
export default{
    data(){
        return{
            store
        }
    },
    components:{
        CardComponent
    },
    mounted(){
		axios.get('https://api.themoviedb.org/3/trending/tv/week?api_key=5c7e8182494749b2f74b1f98b20d6a99')
				.then(response => {
					store.trending.series = response.data.results;
			});
		axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=5c7e8182494749b2f74b1f98b20d6a99')
			.then(response => {
				store.trending.movies = response.data.results;
		});
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
        getCastInfo(movieId, mediaType){
            console.log('trending media type:', mediaType)
            console.log('trending media id:', movieId)
			axios.get(`https://api.themoviedb.org/3/${mediaType}/${movieId}/credits?api_key=5c7e8182494749b2f74b1f98b20d6a99`)
			.then(response => {
				store.castArray = response.data.cast;
			});
		},
        hideCast(){
			store.castArray = ''
		},
        getMovieGenres(movieId){
            axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=5c7e8182494749b2f74b1f98b20d6a99`)
            .then(response => {
                store.genres = response.data.genres;
                for (let i = 0; i < store.genres.length; i++) {
                    const element = store.genres[i];
                    store.genresNames.push(element.name);
                }
            })
        },
        getSerieGenres(serieId){
            axios.get(`https://api.themoviedb.org/3/tv/${serieId}?api_key=5c7e8182494749b2f74b1f98b20d6a99`)
            .then(response => {
                store.genres = response.data.genres;
                for (let i = 0; i < store.genres.length; i++) {
                    const element = store.genres[i];
                    store.genresNames.push(element.name);
                }
            })
        },
        unfillGenres(){
			store.genresNames = []
		},
    }
}
</script>

<template>
    <div class="px-10 pb-10">
        <h2 class="text-red-500 text-center text-2xl">
            Trending Now
        </h2>
        <h3 class="text-white text-2xl pt-8">
            Movies
        </h3>
        <div class="movies">
            <div v-for="(movie, i) in store.trending.movies" :key="i">
                <CardComponent @mouseenter="showInfo(movie.id), getMovieGenres(movie.id)" @mouseleave="hideInfo(), hideCast(), unfillGenres()" @castInfo="getCastInfo(movie.id, movie.media_type)"
                :id="movie.id"
                :title="movie.title"
                :overview="movie.overview"
                :lang="movie.original_language"
                :rankingVote="voteAdjust(movie.vote_average)"
                :imgUrl="movie.poster_path"
                :starQty="voteAdjust(movie.vote_average)"
                :mediaType="movie.media_type">
                </CardComponent>
            </div>
        </div>
        <h3 class="text-white text-2xl pt-8">
            Series
        </h3>
        <div class="series">
            <div v-for="serie in store.trending.series">
                <CardComponent @mouseenter="showInfo(serie.id), getSerieGenres(serie.id)" @mouseleave="hideInfo(), hideCast(), unfillGenres()" @castInfo="getCastInfo(serie.id, serie.media_type)"
                :id="serie.id"
                :title="serie.name"
                :overview="serie.overview"
                :lang="serie.original_language"
                :rankingVote="voteAdjust(serie.vote_average)"
                :imgUrl="serie.poster_path"
                :starQty="voteAdjust(serie.vote_average)"
                :mediaType="serie.media_type">
                </CardComponent>
            </div>
        </div>
    </div>
   
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

.movies, .series{
    display: flex;
    overflow-x: auto;
    margin: 10px 0;
    h3{
        width: 100%;
    }
}
/* width */
::-webkit-scrollbar {
  width: 20px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 10px;
}
</style>