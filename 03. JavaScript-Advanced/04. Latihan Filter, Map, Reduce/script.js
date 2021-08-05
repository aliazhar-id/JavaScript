// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang hanya 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN'))

  // ambil durasi masing-masing video
  .map(item => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit mejadi detik
  .map(waktu => {
    const parts = waktu.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// const menit = Math.floor((jsLanjut % (60 * 60)) / 60);
// const detik = (jsLanjut % (60 * 60)) % 60;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = document.querySelector('.jumlah-video');
jmlVideo.innerHTML = `${videos.filter(video => video.innerHTML.includes('JAVASCRIPT LANJUTAN')).length} Video`;