<script>
import CardComponent from '../components/CardComponent.vue';

export default {
  data() {
    return {
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
			<CardComponent>
			</CardComponent>
		</div>

	</div>
	
</template>

<style lang="scss" scoped>

.cards-container{
	display: flex;
	flex-wrap: wrap;
}
</style>
