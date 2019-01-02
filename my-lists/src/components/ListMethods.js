export default {
	add: function(event) {
		if (event.target.value) {
			if (this.editMode) {
				let newItems = this.items.map(item => {
					if (item.id == this.editedItemId) {
						item.text = this.workingValue;
					}
					return item;
				}, this);
				this.items = newItems;
				this.reset();
			} else {
				this.items.push({ id: this.nextItemId++, text: event.target.value, done: false, doneDate: null });
				this.reset();
			}
		}
	},
	remove: function(index) {
		this.items.splice(index, 1);
	},
	markDone: function(el) {
		let newItems = this.items.map(function(item) {
			if (item.id == el.id) {
				item.done = el.checked;
				item.doneDate = el.checked ? new Date() : null;
			}
			return item;
		});
		this.items = newItems;

	},
	hideDone: function(event) {
		this.showDone = event.target.checked;
	},
	clearDone: function() {
		let newItems = this.items.filter(item => item.done == false);
		this.items = newItems;
	},
	editLast: function(event) {
		const listLength = this.items.length;
		if (!listLength) return false;
		this.editedItemIndex = this.editedItemIndex ? this.editedItemIndex - 1 : listLength - 1;
		if (this.editedItemIndex < 0) return false;
		this.workingValue = this.items[this.editedItemIndex].text;
		this.editMode = true;
		this.editedItemId = this.items[this.editedItemIndex].id;
	},
	editModeNavigation: function(event) {
		const listLength = this.items.length;
		if (!listLength) return false;
		const keyCode = event.keyCode;
		let itemIndex = this.editedItemIndex;
		if (keyCode == 38) { 
			/* up key */
			itemIndex = this.editMode ? this.editedItemIndex - 1 : listLength - 1;
			if (itemIndex < 0) return false;

			this.editedItemIndex = itemIndex;
			this.editMode = true;
		} else {
			/* presumably the down key */
			if (!this.editMode) return false;

			if (itemIndex + 1 >= listLength) return false;
			this.editedItemIndex = itemIndex + 1;
		}
		this.workingValue = this.items[this.editedItemIndex].text;
		this.editedItemId = this.items[this.editedItemIndex].id;
	},
	reset: function() {
		this.workingValue = '';
		this.editMode = false;
		this.editedItemId = null;
		this.editedItemIndex = null;
	}
}