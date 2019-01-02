<template>
    <div class="options">
        <label>
            <input type="checkbox"  
                checked="checked"  
                @click="$emit('hide-done', $event)"> 
            Show completed items
        </label>
        <span class="right">
            <button class="delete-all" @click="$emit('clear-done', $event)">{{ deleteButtonText }}</button>
        </span>
    </div>
</template>

<script>
    export default {
		name: 'ListOptions',
		props: {
			deleteButtonText: String
		},
		data() {
			return {
				checked: true
			}
		}
    }
</script>

<style>
    .options {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px;
    }
    .options .right {
        text-align: right;
    }
    .options .delete-all {
        color: red;
    }
</style>
