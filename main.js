const obj = [
	{
		name: 'zelda', 
		tag: $('#zelda'), 
		firstName: 'not_zelda', 
		firstTag: $('#not_zelda'), 
		secondName: 'real_zelda', 
		secondTag: $('#real_zelda'), 
		thirdName: 'ganon',
		thirdTag: $('#ganon')
	},
	{
		name: 'halo', 
		tag: $('#halo'),
		firstName: 'not_noble6',
		firstTag: $('#not_noble6'),
		secondName: 'captKeys',
		secondTag: $('#captKeys'),
		thirdName: 'elite',
		thirdTag: $('#elite')
	},
	{
		name: 'pokemon',
		tag: $('#pokemon'),
		firstName: 'not_pika',
		firstTag: $('#not_pika'),
		secondName: 'squirtle',
		secondTag: $('#squirtle'),
		thirdName: 'onyx',
		thirdTag: $('#onyx')
	},
	{
		name: 'mortick',
		tag: $('#mortick'),
		firstName: 'not_morty',
		firstTag: $('#not_morty'),
		secondName: 'morty',
		secondTag: $('#morty'),
		thirdName: 'summer',
		thirdTag: $('#summer')
	}
]

$(document).ready(function () {	

	function yourMom() {
		let ask = prompt("Please choose either Zelda, Halo, Mortick, or Pokemon.");
		let curr;
		if (ask === null || ask == '') {  //if user is doo
			alert("Ey, guy. That's not how we play, guy. Try again, budday.");
			location.reload(); 
		} else { 
			let str = ask.toLowerCase();
			console.log(str);
			for (let i in obj) {
				if (obj[i].name == str) {
					curr = obj[i].tag;
					//console.log(curr);
				}
			}
			curr.removeClass('hidden');  //display user choice
			$('#home').removeClass('hidden');  //display home btn;
		} 
		
		
	}
	
	$('#begin').click(function () {
		yourMom();
		$('.start').addClass('hidden');
	});
	
	
	$('#pickleRick').on('click', function () {
		$(this).addClass("hidden");
		$('#not_a_pic').removeClass('hidden');
	});
	
	$('#home').click(function () {
		location.reload();
	});
});