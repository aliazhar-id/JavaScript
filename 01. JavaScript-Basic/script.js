// var pola1 = '',
// 	pola2 = '',
// 	pola3 = '',
// 	pola4 = '',
// 	i, j, k;

// //pola 1
// // *
// // **
// // ***
// // ****
// // *****

// for( i = 0; i < 5; i++ ) {
// 	for( j = 0; j <= i; j++ ) {
// 		pola1 += '*';
// 	}
// 	pola1 += '\n';
// }

// console.log(pola1);

// // pola 2
// // *****
// // ****
// // ***
// // **
// // *

// for( i = 5; i > 0; i-- ) {
// 	for( j = 0; j < i; j++ ) {
// 		pola2 += '*';
// 	}
// 	pola2 += '\n';
// }

// console.log(pola2);

// // pola 3
// //*****
// // ****
// //  ***
// //   **
// //    *

// for( i = 5; i > 0; i-- ) {
// 	for( j = i; j < 5; j++ ) {
// 		pola3 += ' ';
// 	}
// 	for( k = 0; k < i; k++ ) {
// 		pola3 += '*';
// 	}
// 	pola3 += '\n';
// }

// console.log(pola3);

// // pola 4
// //    *
// //   **
// //  ***
// // ****
// //*****

// for ( i = 0; i < 5; i++ ) {
// 	for( j = 4; j > i; j-- ) {
// 		pola4 += ' ';
// 	}
// 	for( k = 0; k <= i; k++ ) {
// 		pola4 += '*';
// 	}
// 	pola4 += '\n';
// }

// console.log(pola4);

// var pola12 = pola1 + pola2,
// 	pola43 = pola4 + pola3;
// 	pola4132 = '';

// // pola1 + pola2
// //*
// //**
// //***
// //****
// //*****
// //*****
// //****
// //***
// //**
// //*

// for( i = 0; i < 5; i++ ) {
// 	for( j = 0; j <= i; j++ ) {
// 		pola1 += '*';
// 	}
// 	pola1 += '\n';
// }

// for( i = 5; i > 0; i-- ) {
// 	for( j = 0; j < i; j++ ) {
// 		pola2 += '*';
// 	}
// 	pola2 += '\n';
// }

// console.log(pola12);

// // pola4 + pola 3
// //    *
// //   **
// //  ***
// // ****
// //*****
// //*****
// // ****
// //  ***
// //   **
// //    *

// for ( i = 0; i < 5; i++ ) {
// 	for( j = 4; j > i; j-- ) {
// 		pola4 += ' ';
// 	}
// 	for( k = 0; k <= i; k++ ) {
// 		pola4 += '*';
// 	}
// 	// pola4 += '\n';
// }

// for( i = 5; i > 0; i-- ) {
// 	for( j = i; j < 5; j++ ) {
// 		pola3 += ' ';
// 	}
// 	for( k = 0; k < i; k++ ) {
// 		pola3 += '*';
// 	}
// 	pola3 += '\n';
// }

// console.log(pola43);