// const coba = new Promise(resolve => {
//       setTimeout(() => {
//           resolve('selesai');
//         }, 2000);
//       });

//     console.log(coba);

function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve('selesai');
      }, waktu);
    } else {
      reject('kelamaan');
    }

  });
}

// const coba = cobaPromise();
// coba
// .then((coba) => console.log(coba))
// .catch((coba) => console.log(coba));

async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch(err) {
    console.error(err);
  }

}

cobaAsync();