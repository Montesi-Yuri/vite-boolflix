<script>
import FlagComponent from '../components/FlagComponent.vue';
import { store } from '../store.js';
import axios from 'axios';

export default {
	data() {
		return {
			store
		}
  	},
	components:{
		FlagComponent
	},
	props:{
		id: Number,
		title: String,
		originalTitle: String,
		lang: String,
		rankingVote: Number,
		imgUrl: String,
		starQty: Number,
		overview: String,
	},
	computed:{
		fixFlagImg(){
			if(this.lang == 'en'){
				return 'gb'
			}
			else if(this.lang == 'ja'){
				return 'jp'
			}
			else if(this.lang == 'ru'){
				return 'ru'
			}
			else if(this.lang == 'pt'){
				return 'pt'
			}
			else{
				return this.lang
			}
		},
		cardImg(){
			let img = 'https://image.tmdb.org/t/p/w300' + this.imgUrl;
			if( img == 'https://image.tmdb.org/t/p/w300null'){
				img = '../assets/img/disappointment.jpg';
				return new URL(`${img}`, import.meta.url).href
			}
			else{
				return img
			}
		}
	},
		
}

</script>

<template>

	<div class="single-card">
		
		<img :src="cardImg" :alt="title">

		<div class="card-info" v-show="store.displayInfo == id">
			<template>
				{{ id }}
			</template>

			<h3 class="text-center text-2xl font-bold">
				{{ title }}
			</h3>
			<h4 class="text-center text-sm">
				{{ overview }}
			</h4>
			<div class="mx-5">
				<span class="font-bold text-sm">
					Language:
				</span>
				{{ lang.toUpperCase() }}
				<FlagComponent
				:nation="fixFlagImg">
				</FlagComponent>
			</div>
			<div class="ratings flex mx-5">
				<span class="font-bold text-sm">
					Rating:
				</span>
				<template v-for="fullStar in starQty">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-yellow-400">
						<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
					</svg>
				</template>
				<template v-for="emptyStar in (5 - starQty)">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
					</svg>
				</template>
			</div>

			<div class="flex justify-center">
				<button @click="$emit('castInfo')" class="btn bg-orange-200">Cast</button>
			</div>
			<ul>
				<li v-for="(castMember, i) in store.castArray">
					<template v-if=" i < 6 ">
						<p>
						{{ castMember.name }} - {{ castMember.character }}
						</p>
					</template>
					
				</li>
			</ul>
		</div>
	</div>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.single-card{
	width: 300px;
	height: calc(100% - 20px);
	position: relative;
	margin: 10px 10px;
	
	img{
		height: 100%;
		display: block;
	}

	.card-info{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		min-height: 40%;
		max-height: 100%;
		overflow-y: auto;
		background-color: rgba($color: white, $alpha: 0.8);
		> *{
			padding: 5px 0px;
		}
		h3{
		text-align: center;
	
		}
		p{
			text-align: center;
		}
	}
}

</style>
