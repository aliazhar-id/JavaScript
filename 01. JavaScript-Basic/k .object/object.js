// membuat object
// 1. object literal
var mhs1 = {
	nama : 'aliazhar',
	nrp : '0495874893',
	email : 'aliazhar0555@gmail.com',
	jurusan : 'Teknik Informatika'
}

var mhs2 = {
	nama : 'arisman',
	nrp : '938477839',
	email : 'arisman282019@gmail.com',
	jurusan : 'Teknik Sipil'
}

// 2. Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
	mhs = {};
	mhs.nama = nama;
	mhs.nrp = nrp;
	mhs.email = email;
	mhs.jurusan = jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('ahmad tamzil', '394857498', 'tamzil@gmail.com', 'ilmu administrasi negara');

// 3. Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
	// var this = {};
	this.nama = nama;
	this.nrp = nrp;
	this.email = email;
	this.jurusan = jurusan;
	// return this;
}

var mhs4 = new Mahasiswa('Hendra Gunawan', '2934875498', 'Hendra@yahoo.com', 'Teknik Mesin');