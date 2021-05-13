var tanya = true;
while ( tanya ) 
{
	// Menangkap pilihan player

	var p = prompt('pilih: gajah, semut, orang');

	// Menangkap pilihan computer
	// Membangkitkan bilangan random
	var comp = Math.random();

	if(comp < 0.34) {
		comp = 'semut';
	} else if (comp >= 0.34 && comp < 0.67) {
		comp = 'orang';
	} else {
		comp = 'gajah';
	}
	// Menentukan rules

	var hasil = '';

	if( p == comp ) {
		hasil = 'SERI!';
	} else if( p == 'gajah') {
		// if( comp == 'orang' ) {
		// 	hasil = 'MENANG!';
		// } else {
		// 	hasil = 'KALAH!'
		// }
		hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
	} else if( p == 'orang' ) {
		hasil = ( comp == 'semut' ) ? 'MENANG!' : 'KALAH!';
	} else if ( p == 'semut' ) {
		hasil = ( comp == 'gajah' ) ? 'MENANG!' : 'KALAH!';
	} else {
		hasil = 'Memasukkan pilihan yang salah!';
	}


	// Tampilkan hasilnya
	alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nMaka hasilnya: Kamu ' + hasil);

	tanya = confirm('lagi?');
}

alert('Terima Kasih Sudah Bermain! :)');