<template>
	<div class="column">
		<ListApp/>
	</div>
</template>

<script>
	import ListApp from './components/ListApp'

	export default {
		name: 'App',
		components: {
			ListApp
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
	}
	html { 
		font-size: .875rem; 
	}
	body { 
		padding: 20px 0 0 20px; 
		font-family: sans-serif; 
		line-height: 1.5; 
		color: #222; 
	}
	.grid-container { 
		display: grid; 
		grid-gap: 30px; 
		grid-template-columns: 1fr 1fr; 
	}
	.column {  }
</style>


<!--
<template>
    <div id="app">
        <img src="./assets/logo.png">
        <HelloWorld/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
    name: 'App',
    components: {
        HelloWorld
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
-->
