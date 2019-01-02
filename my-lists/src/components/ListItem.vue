<template>
    <li class="list-item">
        <input type="checkbox" 
            :id="item.id" 
            :checked="item.done" 
            @click="$emit('mark-done', $event.target)">
        <span :title="title">{{ item.text }}</span>
    </li>
</template>

<script>
    export default {
		name: 'ListItem',
		props: {
			item: Object, 
			title: String
		}
    }
</script>

<style scoped>
    .list-item {
        padding: 5px 10px;
        background-color: #f6f6f6;
        border-bottom: 1px dotted #ccc;
        display: grid;
        grid-gap: 10px;
        justify-content: space-between;
        align-content: space-around;
        grid-template-columns: 25px 1fr;
    }
	.done > span {
		text-decoration: line-through;
		color: #afafaf;
		text-decoration-color: black;
	}
	.current {
		outline: 1px #abc solid;
		background-color: #ddeeff;
	}
</style>
