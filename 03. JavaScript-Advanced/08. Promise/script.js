// vanilla JS ajax

// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open('get', 'http://www.omdbapi.com/?apikey=71647e0c&s=avengers');
// xhr.send();

// JQuery Ajax
// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=71647e0c&s=avengers',
//   success: response => console.log(response)
// });

// Fetch
// fetch('http://www.omdbapi.com/?apikey=71647e0c&s=avengers')
//   .then(response => response.json())
//   .then( response => console.log(response));

// Promise
// Object yang merepresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang.
// janji (terpenuhi / ingkar)
// states ( fullfilled / rejected / pending)
// callback ( resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve('Janji telah ditepati');
//   } else {
//     reject('Ingkat janji...')
//   }
// });

// janji1
//   .then(response => console.log(`OK : ${response}`))
//   .catch(response => console.log(`NOT OKAY: ${response}`));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa waktu');
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       reject('Tidak ditepati setelah beberapa waktu')
//     }, 5000);
//   }
// });

// console.log('mulai');
// console.log(janji2.finally(() => console.log('selesai menunggu')).then(response => console.log(response)));
// console.log('selesai');

// Promise.all()

const film = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'aliazhar',
      pemeran: 'jeki, sopyan, arif'
    }]);
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: 'pekanbaru',
      temp: 40,
      kondisi: 'Kiamat'
    }]);
  }, 500);
});

// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

Promise.all([film, cuaca])
  // .then(response => console.log(response));
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
