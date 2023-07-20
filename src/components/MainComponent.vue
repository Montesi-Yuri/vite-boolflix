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
    CardComponent
  }
}

</script>

<template>
	<div class="container">
		<div class="cards-container">
			<template  v-for="(item, i) in store.searchResult" :key="i">

				<CardComponent
				:title="item.title"
				:originalTitle="item.original_title"
				:lang="item.original_language"
				:rankingVote="item.vote_average">

				</CardComponent>
				
			</template>
			
		</div>
</div>
	
</template>

<style lang="scss" scoped>

.cards-container{
	display: flex;
	flex-wrap: wrap;

	.single-card{
		width: 300px;
	}
}
</style>
