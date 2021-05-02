alert('Choose number 1 to 10\nYou have 3 heart');

var c = Math.floor(Math.random() * 10 + 1),
	n = 3;
console.log(c);

while(n > 0) {
	var p = prompt('Input your number:'),
		s = n - 1,
		h;

	if(p > c && p <= 10) {
		h = 'the numbers are too HIGHT';
	} else if(p < c && p > 0) {
		h = 'the numbers are too LOW';
	} else if(p <= 0 && p != '' || p > 10) {
		h = 'the numbers must be 1 to 10'
	} else {
		h = "you didn't enter a numbers";	
	}

	if(p == c) {
		alert('CORRECT!, the number being searched for is: ' + c);
		n = 0;
	}  else {
		if(n > 1) {
			alert(h + '\nYour heart: ' + s);
		} else {
			alert(h + '\nyour heart is gone.');
			alert('you LOSE!\nthe number being searched for is: ' + c);
		}	
	}
	n--;
}
alert('Thank you for playing.');

