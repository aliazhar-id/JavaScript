// JavaScript array multidimensional
// var sifatBenda = ['cair',['air','lava','susu'],'padat',['kertas','batu','kayu'],'gas',['asap','oksigen','uap',]];
// console.log('sifatBenda ' + sifatBenda[0] + ' dengan indeks 2: ' + sifatBenda[1][2]);
// console.log('sifatBenda ' + sifatBenda[2] + ' dengan indeks 1: ' + sifatBenda[3][1]);
// console.log('sifatBenda ' + sifatBenda[4] + ' dengan indeks 0: ' + sifatBenda[5][0]);

// 1.menambah isi array
// var arr = [];
// arr[0] = 'kucing';
// arr[1] = 'domba';
// arr[4] = 'sapi';
// arr.unshift('aaaa');
// console.log(arr);

// 2.menghapus isi array(manual)
// var arr = ['kucing', 'domba', 'sapi'];
// arr[1] = undefined;
// console.log(arr);

// 3.menampilkan isi array
// var arr = ['kucing', 'domba', 'sapi'];
// for(var i = 0; i < arr.length; i++) {
// 	console.log('nama binatang ke ' + (i+1) + ': ' + arr[i]);
// }







// method pada array
// var arr = ['kucing', 'domba', 'sapi'];

// 1.join
// console.log(arr.join(' '));

// 2.push & pop
// arr.push('kelinci','keledai');
// arr.pop();
// console.log(arr.join(' '));

// 3.unshift & shift
// arr.unshift('kelinci');
// arr.shift();
// console.log(arr.join(' - '));


// 4.splice
// var arr = ['kucing', 'domba', 'sapi'];
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(0, 3, 'kelinci', 'kodok');
// console.log(arr.join(' - '));

// 5.slice
// slice(awal,ahir);
// var arr = ['kucing', 'domba', 'sapi', 'kelinci', 'kodok'];
// var arr2 = arr.slice(2,5);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));

// 6. foreach
// var angka = [1,2,3,4,5,6,7,8,9,10];
// var hewan = ['kucing', 'domba', 'sapi', 'kelinci', 'kodok'];

// var cetak = function(e) {
// 	console.log(e);
// }
// angka.forEach(cetak);

// angka.forEach(function (e) {
// 	console.log(e);
// });

// hewan.forEach(function(e, i){
// 	console.log('Nama Binatang indeks ke-' + (i+1) + ' adalah ' + e);
// });

// 7. map
// var angka = [1,2,5,7,8,2,5,6];
// var angka2 = angka.map(function(e){
// 	return e + 1;
// });

// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1,2,5,70,8,20,5,6];
// angka.sort(function(a,b){
// 	return a-b;
// });
// console.log(angka.join(' - '));

// 9. filter & find
// var angka = [1,2,5,70,8,20,5,6];
// var angka2 = angka.filter(function(x){
// 	return x < 8;
// });
// console.log(angka2.join(' - '));

// var angka = [1,2,20,5,70,8,5,6];
// var angka2 = angka.find(function(x){
// 	return x == 2;
// });
// console.log(angka2);