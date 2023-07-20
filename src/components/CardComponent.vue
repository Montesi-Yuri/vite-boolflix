<script>
import FlagComponent from '../components/FlagComponent.vue';

export default {
	data() {
		return {
		}
  	},
	components:{
		FlagComponent
	},
	props:{
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
		<div>
			<img :src="'https://image.tmdb.org/t/p/w300/' + imgUrl" :alt="title">
		</div>
		<h3>
			{{ title }}
		</h3>
		<h3>
			{{ originalTitle }}
		</h3>
		<p>{{ lang.toUpperCase() }}
			<FlagComponent
			:nation="fixFlagImg">
			</FlagComponent>
		</p>
		<p>
			{{ rankingVote }}
			<template v-for="fullStar in starQty">
				<i class="fa-solid fa-star"></i>
			</template>
			<template v-for="emptyStar in (5 - starQty)">
				<i class="fa-regular fa-star"></i>
			</template>
		</p>
	</div>
  
</template>

<style lang="scss" scoped>

.single-card{
	width: 300px;

	img{
		width: 100%;
	}

	h3{
		text-align: center;
	}
}

</style>
