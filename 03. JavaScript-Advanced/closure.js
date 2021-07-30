// function init() {
//   return function (nama) {
//     console.log(nama);
//   }
// }
// const panggilNama = init();
// panggilNama('aliazhar');

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`)
//   }
// }

// immediately invoked function
// ucapkanSalam('Pagi')('aliazhar')

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('ali');

// let add = (function () {
//   counter = 0;
//   return function () {
//     return ++counter;
//   };
// })();

// console.log(add());
// console.dir(add());
// console.log(add());
// console.log(add());