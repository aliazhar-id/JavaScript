// var angka = prompt('masukkan angka:');

// switch ( angka ) {
//  	case '1':
//  		alert('anda memasukkan angka 1');
//  		break;
//  	case '2':
//  		alert('anda memasukkan angka 2');
//  	case '3':
//  		alert('anda memasukkan angka 3');
//  	default:
//  		alert('angka yang anfa masukkan salah!')
//  		break;
//  }

var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch ( item ) {
	case 'nasi':
	case 'daging':
	case 'susu':
		alert('makanan / minuman SEHAT');
		break;
	case 'hamburger':
	case 'softdrink':
		alert('makanan / minuman TIDAK SEHAT');
		break;
	default:
		alert('anda memasukkan nama makanan / minuman yang salah');
		break;
}