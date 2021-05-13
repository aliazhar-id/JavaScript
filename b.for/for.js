// conditional Looping
// for( var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++ ) {
// 	console.log('Hello World ' + nilaiAwal + 'x');
// }

// function Looping
function test(nilaiAwal) {
	if (nilaiAwal > 10) return;
	console.log('Hello World ' + nilaiAwal + 'x');
	return test(nilaiAwal+1);
}
test(1);