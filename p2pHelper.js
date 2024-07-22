p2pHelper = {
	mkdToInt: function(node) {
		return parseInt(node.innerText.slice(0,-7).replace(',', ''));
	},
	
	mkdIznos: function(iznos) {
		return parseInt(iznos).toLocaleString('de-DE');
	}
}
