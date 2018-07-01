const obj = {
	'link': $('#not_zelda'),
	'master chief': $('#not_noble6'),
	'vaporeon': $('#not_pika')
}

let curr, str;

$(document).ready(function () {	
	
	function yourMom() {
		/*curr = */
		let ask = prompt("Please choose either Link, Master Chief, or Vaporeon."), //response from user
		str = '';
		
		for (let i in ask) {
			str += ask[i].toLowerCase();//convert to lowercase
		}
		curr = obj[str];
		if (curr == null) {  //if user is doo
			alert("Ey, guy. That's not how we play, guy. Try again, budday.");
			location.reload();  //try again
		} else {  //otherwise
			//console.log(str);
			curr.removeClass('hidden');  //display user choice
			$('#home').removeClass('hidden');  //display home btn
		}
		ask = '';
	}
	
	yourMom();
	
	$('#home').click(function () {
		
		yourMom();
		
		for (let x in obj) {
			
			curr = obj[x]
			if (!curr.hasClass('hidden')){
				obj[x].addClass('hidden');
				
			}			
			
		}
		
	});
	
});