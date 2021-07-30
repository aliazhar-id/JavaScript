// const thumbs = document.querySelectorAll('.thumb');
// const jumbo = document.querySelector('.jumbo');

// thumbs.forEach(function(i) {
// 	i.addEventListener('click', function(e) {
// 		jumbo.setAttribute('src', e.target.attributes[0].nodeValue)
// 	})
// })

// thumbs.forEach(function(x, i) {
// 	x.addEventListener('click', function(e) {
// 		jumbo.setAttribute('src', 'img/' + (i + 1) + '.jpg');
// 	})
// });

// for (let i = 0; i < thumbs.length; i++) {
// 	thumbs[i].addEventListener('click', function() {
// 		jumbo.setAttribute('src', 'img/' + (i+1) + '.jpg');
// 	})
// }


const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
	if ( e.target.className == 'thumb') {
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function() {
			jumbo.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(thumb) {
			if ( thumb.classList.contains('active') ) {
				thumb.target.classList.add('active');
			}
		});

		e.target.classList.add('active');
	}
});