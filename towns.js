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


function addTown() {
	let townName = document.getElementById("townNameForAdd").value;
	if (townName != "") {	
		document.getElementById("townNameForAdd").value = "";
		let option = document.createElement("option");
		option.textContent = townName;
		document.getElementById("towns").appendChild(option);
		showMessage(townName + " added.");
	}
}

function showMessage(msg) {
	let resultElement = document.getElementById("result");
	resultElement.textContent = msg;
	resultElement.style.display = "block";

	setTimeout(function () {
		resultElement.style.display = "none";
	}, 3000);
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("btnAdd").addEventListener("click", addTown);
});



document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("btnAdd").addEventListener("click", addTown);
});

function shuffleTowns() {
	let towns = $('#towns option');
	for (let i = 0; i < towns.length; i++) {
		let j = Math.floor(Math.random() * towns.length);
		let temp = towns[i].textContent;
		towns[i].textContent = towns[j].textContent;
		towns[j].textContent = temp;
	}
}