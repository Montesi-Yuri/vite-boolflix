<script>
import FlagComponent from '../components/FlagComponent.vue';
import { store } from '../store.js';

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
		}
	}
}

</script>

<template>

	<div class="single-card">
		
		<img :src="'https://image.tmdb.org/t/p/w300/' + imgUrl" :alt="title">

		<div class="card-info" v-show="store.displayInfo == id">
			<template>
				{{ id }}
			</template>

			<h3>
				{{ title }}
			</h3>
			<h3>
				{{ originalTitle }}
			</h3>
			<div>
				<span class="font-bold">
					Language:
				</span>
				{{ lang.toUpperCase() }}
				<FlagComponent
				:nation="fixFlagImg">
				</FlagComponent>
			</div>
			<div class="flex">
				<span class="font-bold">
					Rating:
				</span>
				<template v-for="fullStar in starQty">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
						<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
					</svg>
				</template>
				<template v-for="emptyStar in (5 - starQty)">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
					</svg>
				</template>
			</div>
		</div>
	</div>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
.single-card{
	width: 300px;
	color: salmon;
	position: relative;
	margin-bottom: 20px;
	

	img{
		width: 100%;
		height: 450px;
	}

	.card-info{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 40%;
		background-color: rgba($color: white, $alpha: 0.8);

		> *{
			padding-bottom: 5px;
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
