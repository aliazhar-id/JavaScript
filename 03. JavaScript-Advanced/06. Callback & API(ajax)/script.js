function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if ( xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  }

  xhr.open('get', url);
  xhr.send()
}

getDataMahasiswa('data/mahasiswa.json', (results) => {
  const mhs = JSON.parse(results);
  console.log('mulai');
  mhs.forEach(({nama}) => console.log(nama));
  console.log('selesai');
}, () => {

})


// JQuery
// console.log('mulai');
// $.ajax({
//   url: 'data/mahasiswa.json',
//   succes: (mhs) => {
//     console.log(mhs);
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   },
// });
// console.log('selesai');