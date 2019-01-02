<template>
    <input type="text" 
        class="new-item" 
        autofocus
        :placeholder="placeholder" 
        :value="value" 
        @input="$emit('input', $event.target.value)" 
        @keyup.enter="$emit('add', $event)" 
        @keyup.up="$emit('edit-mode-navigation', $event)" 
        @keyup.down="$emit('edit-mode-navigation', $event)" 
        @keyup.esc="$emit('reset')">
</template>

<script>
    export default {
		props: {
			value: String,
			placeholder: String
		}
    }
</script>

<style>
    .new-item {
        width: 100%;
        height: 26px;
        padding-left: 8px;
        padding-bottom: 2px;
        font-size: 1rem;
    }
</style>
