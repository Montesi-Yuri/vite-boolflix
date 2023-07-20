<script>

export default {
	data() {
		return {
		}
  	},
	props:{
		title: String,
		originalTitle: String,
		
		lang: String,
		rankingVote: Number,

	}
}

</script>

<template>

	<div class="single-card">
		<!-- <div>
			<img src="" :alt="title">
		</div> -->
		<h3>
			{{ title }}
		</h3>
		<h3>
			{{ originalTitle }}
		</h3>
		<p>{{ lang }}</p>
		<p>{{ rankingVote }}</p>
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
