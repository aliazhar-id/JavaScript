var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
	// jika angkot kosong
		// tambah penumpang diawal array
		// kembalikan isi array dan keluar dari function
	if(penumpang.length == 0) {
		penumpang.push(namaPenumpang);
		return penumpang;
	} else { 
		// telusuri seluruh kursi dari awal
		for(var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if(penumpang[i] == undefined){
				// tambah penumpang dikursi tersebut
				penumpang[i] = namaPenumpang;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			// jika sudah ada nama yang sama
			else if(namaPenumpang == penumpang[i]) {
				// tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada didalam angkot.');
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
			// jika seluruh kursi terisi
			else if(i == penumpang.length - 1){	
				// tambah penumpang diakhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
	if(penumpang.length == 0) {
		console.log('Angkot masih kosong!'); 
	} else {
		for(var i = 0; i < penumpang.length; i++) {
			if(namaPenumpang == penumpang[i]) {
				penumpang[i] = undefined;
				return penumpang;
			} else if(i == penumpang.length - 1) {
				console.log(namaPenumpang + ' tidak ada di dalam angkot');
				return penumpang;
			}
		}
	}
	return penumpang;
}