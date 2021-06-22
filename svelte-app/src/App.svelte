<script>
	import Search from './Components/Search.svelte';
	import TeamsComparison from './Components/TeamsComparison.svelte';
	let name = 'world';
</script>

<div id="app">
	<img class="logo_image" src="https://logodownload.org/wp-content/uploads/2016/03/premier-league.png" alt="">
	<h1 class=title> Team Comparator Tool </h1>
	<div class="bodyy">
		<div>
			<Search />
		</div>
		<div>
			<TeamsComparison />
		</div>
	</div>
</div>

<style>
	#app {
	  font-family: Avenir, Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  margin-top: 20px;
	  background-color: #58FF84;
	}
	
	.title {
	  color: #38003C;
	  font-size: 30px;
	  font-weight: 800;
	
	}
	
	.logo_image {
	  
	  max-height: 100px;
	  max-width: 300px;
	}
	
	.bodyy {
	  background-color: #38003C;
	}
	</style>

