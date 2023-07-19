<script>
import { store } from '../store.js';

export default {
  data() {
    return {
		store
    }
  },
}

</script>

<template>
	<section>
		<h1>Boolflix</h1>
	</section>
	<section>

		<input type="text" v-model="store.userSearchInput">
		<button @click="$emit('searchMovie')">
			Search
		</button>
		
	</section>
</template>

<style lang="scss" scoped>

section{
	background-color: salmon;
}
</style>
