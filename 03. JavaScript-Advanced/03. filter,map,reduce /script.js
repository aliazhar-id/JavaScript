const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >= 3
// for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// } 

// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan dua
// const newAngka = angka.map(a => a * 2);

// reduce
// jumlah seluruh element pada array
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5)

// Method Chaining
// Cari angka > 5
// Kalikan 3
// Jumlahkan
const hasil = angka.filter(x => x > 5) // 8, 9, 9
  .map(x => x * 3) // 24, 27, 27
  .reduce((acc, curr) => acc + curr); // 78