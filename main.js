const obj = {
	'link': $('#not_zelda'),
	'master chief': $('#not_noble6'),
	'vaporeon': $('#not_pika')
}

$(document).ready(function () {
	
	let ask = prompt("Please choose either Link, Master Chief, or Vaporeon.");
	
	if (obj[ask] == null) {
		alert("Ey, guy. That's not how we play, guy. Try again, budday.");
		location.reload();
	} else {
		//let ans = ask.toLowerCase();
		console.log(ask);
		obj[ask].removeClass('hidden');
		$('#home').removeClass('hidden');
	}
	
	$('#home').click(function () {
		location.reload();
	});
	
});