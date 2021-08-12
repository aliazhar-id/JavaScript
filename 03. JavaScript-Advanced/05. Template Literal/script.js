// Template Literals / Template Strings
const nama = 'aliazhar';
const umur = 18;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Ekspression
console.log(`${10 * 10}`);
console.log(`${alert('Hello World!')}`);
const x = 10;
console.log(`${(x % 2 == 0) ? 'Genap' : 'Ganjil'}`);

// HTML Fragments
const mhs = {
  nama: 'aliazhar',
  umur: 18,
  nrp: '3984738',
  email: 'aliazhar0555@gmail.com',
};

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class='nrp'>${mhs.nrp}</span>
</div>`;

console.log(el);
document.body.innerHTML = el;
