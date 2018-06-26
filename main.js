const obj = {
	'link': $('#not_zelda'),
	'master chief': $('#not_noble6'),
	'vaporeon': $('#not_pika')
}

$(document).ready(function () {
	
	let ask = prompt("Please choose either Link, Master Chief, or Vaporeon."),
		str = '';
	
	for (let i in ask) {
		str += ask[i].toLowerCase();
	}
	
	if (obj[str] == null) {
		alert("Ey, guy. That's not how we play, guy. Try again, budday.");
		location.reload();
	} else {
		console.log(str);
		obj[str].removeClass('hidden');
		$('#home').removeClass('hidden');
	}
	
	$('#home').click(function () {
		location.reload();
	});
	
});