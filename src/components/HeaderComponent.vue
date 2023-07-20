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

	<header>

		<h1>Boolflix</h1>
		<nav>
			<ul>
				<li><a href="" class="text-primary">Home</a></li>
				<li><a href="">Series</a></li>
				<li><a href="">Movies</a></li>
				<li><a href="">New and Popular</a></li>
				<li><a href="">My favorites</a></li>
				<li><a href="">Search by language</a></li>
			</ul>
		</nav>
	
		<div>
			<label for=""><i class="fa-solid fa-magnifying-glass"></i></label>	
			<input type="text" v-model="store.userSearchInput" placeholder="titles, genres, people, ...">
			<button @click="$emit('searchMovie')">
				Search
			</button>
		</div>
		
	</header>

</template>

<style lang="scss" scoped>

header{
	display: flex;
	align-items: center;
	padding: 20px;
	h1{
		color: red;
		text-transform: uppercase;
		margin-right: 50px;
	}
	nav{
		margin-left: 0;

		ul{
			display: flex;

			li{
				margin: 0 10px;
			}
			a{
				color:white;
				text-decoration: none;
				font-size: small;
			}
		}
	}
	i{
		color: white;
	} 
	
}
</style>
