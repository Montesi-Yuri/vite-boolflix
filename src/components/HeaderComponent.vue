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

		<h1 class="text-3xl font-bold">Boolflix</h1>
		<nav>
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="">Series</a></li>
				<li><a href="">Movies</a></li>
				<li><a href="">New and Popular</a></li>
				<li><a href="">My favorites</a></li>
				<li><a href="">Search by language</a></li>
			</ul>
		</nav>
	
		<div class="flex items-center">
			<label class="px-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
					<path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
				</svg>
			</label>	
			<input type="text" v-model="store.userSearchInput" placeholder="titles, genres, people, ...">
			<button class="btn" @click="$emit('searchMovie')">
				Search
			</button>
		</div>
		
	</header>

</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;

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
