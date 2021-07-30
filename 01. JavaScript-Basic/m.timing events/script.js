// setTimeout()
// setInterval()

// const test = setTimeout(() => {
// 	console.log('ok');
// }, 5000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', () => {
// 	clearTimeout(test);
// 	console.log('selesai')
// })
// let i = 0;
// const test = setInterval(() => {
// 	i += 1;
// 	console.log('ok ' + i);
// }, 2000);

// const tombol = document.getElementById('tombol');
// tombol.addEventListener('click', () => {
// 	clearInterval(test);
// 	console.log('selesai')
// })




// Program Hitung Mundur
const tanggalTujuan = new Date('june 14, 2021 15:00:00').getTime();

const hitungMundur = setInterval(() => {
	const sekarang = new Date().getTime();
	const selisih = tanggalTujuan - sekarang;

	const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
	const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
	const detik = Math.floor(selisih % (1000 * 60) / 1000);

	const teks = document.getElementById('teks');
	teks.innerHTML = 'Waktu anda tinggal : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik lagi.';
	if (selisih < 0) {
		clearInterval(hitungMundur);
		teks.innerHTML = 'Waktu Anda Habis'
	}
}, 1000);