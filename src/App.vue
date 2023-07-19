<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import CardComponent from './components/CardComponent.vue';

export default {
	data() {
		return {
		}
	},
	components:{
		HeaderComponent,
		MainComponent,
		CardComponent
	}
}

</script>

<template>

	<HeaderComponent>

	</HeaderComponent>

	<MainComponent>

		<CardComponent>
		
		</CardComponent>

	</MainComponent>

</template>

<style lang="scss" scoped>
@use './assets/scss/main.scss';

</style>
