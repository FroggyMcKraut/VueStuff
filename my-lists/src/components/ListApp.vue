<template>
	<div class="component">
		<div class="list-outer">
			<ul class="item-list" v-if="items.length">
				<transition-group name="list-trans">
					<ListItem 
						v-for="(item, index) in items" 
						:item="item" 
						:class="{done: item.done, current: editMode && (item.id == editedItemId)}" 
						:key="item.id" 
						@remove="remove(index)" 
						@mark-done="markDone($event)" 
						v-show="!item.done || (item.done && showDone)" />
				</transition-group>
			</ul>
			<p v-else>You have no to-do items</p>
		</div>
		<ListInput
			v-model="workingValue"
			:placeholder="placeholder"
			@add="add($event)"
			@edit-mode-navigation="editModeNavigation($event)"
			@reset="reset()" />

		<ListOptions
			:show-done="showDone"
			delete-button-text="Delete All Completed Items"
			@hide-done="hideDone($event)"
			@clear-done="clearDone($event)" /> 
	</div>
</template>

<script>
	import ListInput from './ListInput'
	import ListItem from './ListItem'
	import ListOptions from './ListOptions'
	import ListMethods from './ListMethods'
	//
	
	export default {
		name: 'ListApp',
		components: {
			ListInput,
			ListItem,
			ListOptions
		},
		data() {
			return {
				items: [
					{ id: 0, text: "Item 1", done: false, doneDate: null },
					{ id: 1, text: "Item 2", done: true, doneDate: null }
				],
				nextItemId: 2,
				placeholder: 'Add an item...',
				workingValue: '',
				showDone: true,
				editMode: false,
				editedItemId: null,
				editedItemIndex: null
			}
		},
		methods: ListMethods
	}
	

</script>

<style>
	.component {
		height: 300px;
		border: 1px solid #ccc;
	}
	.list-outer {
		height: calc(100% - 25px);
		overflow: auto;
	}
	.list-outer > p {
		margin-top: 120px;
		text-align: center;
	}
	.item-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.list-trans-enter-active, .list-trans-leave-active {
		transition: all .25s;
	}
	.list-trans-enter, .list-trans-leave-to {
		opacity: 0;
		transform: scaleY(0);
	}
</style>