const obj = {
	'link': $('#not_zelda'),
	'master chief': $('#not_noble6'),
	'vaporeon': $('#not_pika'),
	'pr': $('#not_morty')
}

$(document).ready(function () {	

	function yourMom() {
		let ask = prompt("Please choose either Link, Master Chief, PR, or Vaporeon.");
		let curr, str = ask.toLowerCase();
		
		console.log(str);
		curr = obj[str];
		
		if (curr == null) {  //if user is doo
			alert("Ey, guy. That's not how we play, guy. Try again, budday.");
			location.reload(); 
		} else { 
			curr.removeClass('hidden');  //display user choice
			$('#home').removeClass('hidden');  //display home btn
		} 
	}
	
	$('#begin').click(function () {
		$('#startBtn').addClass('hidden');
		yourMom();
	});
	
	
	$('#pickleRick').on('click', function () {
		$(this).addClass("hidden");
		$('#not_a_pic').removeClass('hidden');
	});
	
	$('#home').click(function () {
		$('.col-sm-6').each(function() {
			$(this).addClass('hidden');
			console.log($(this).hasClass('hidden'));
		});
		yourMom();
	});
});