$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

///get shuffle btn and add click event
$(document).ready(function() {
	$('#btnShuffle').click(shuffleTowns)
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}

function shuffleTowns() {
	let towns = $('#towns option');
	for (let i = 0; i < towns.length; i++) {
		let j = Math.floor(Math.random() * towns.length);
		let temp = towns[i].textContent;
		towns[i].textContent = towns[j].textContent;
		towns[j].textContent = temp;
	}
}