function AddNewItem() {
	let doesExists = localStorage.getItem("infinite-craft-data")
	let confirmed
	let replace = '{"elements":[{"text":"Water","emoji":"💧","discovered":false},{"text":"Fire","emoji":"🔥","discovered":false},{"text":"Wind","emoji":"🌬️","discovered":false},{"text":"Earth","emoji":"🌍","discovered":false}]}'
	if (doesExists == null) {
		localStorage.setItem("infinite-craft-data", replace);
	
	}
	let initial = localStorage.getItem("infinite-craft-data");
	let array = JSON.parse(initial).elements
	let text = prompt("Item name.");
	let emoji = prompt("Emoji Press Windows + . ");
	let discovered = confirm("FD?");
	let ItemsToAdd = {
	  text: text,
	  emoji: emoji,
	  discovered: discovered
	};
	array.push(ItemsToAdd)
	let newItem = {
		elements: array
	};
	
	array = JSON.stringify(newItem)
	confirmed = confirm("Are you sure?");
	if (confirmed == true) {
		localStorage.setItem("infinite-craft-data", array);
		alert("Reloading!")
		window.location.reload();
	}
	console.log("DONE");
}
AddNewItem();
