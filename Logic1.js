function printArray(arr) {
	for(var y=0; y < arr.length; y++){
		for (var x = 0; x< arr.length; x++) {
			process.stdout.write(arr[y][x]);
		}
		process.stdout.write("\n");
	}
}

// -------------------
// Soal 1
// -------------------
console.log('soal1');
function soal1(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];

	for(var column = 0; column < batas; column = column + 1) {
		isi[column] = [];
		for(var row = 0; row < batas; row = row + 1) {
			if( row == column ) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal1(10);

// -------------------
// Soal 2
// -------------------
console.log('Soal 2');
function soal2(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if( row == batas - column - 1 ) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal2(10)

// -------------------
// Soal 3
// -------------------
console.log('Soal 3');
function soal3(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if(row == column || row == batas - column - 1) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal3(10);

// -------------------
// Soal 4
// -------------------
console.log('Soal 4');
function soal4(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if(row == column || row == batas - column - 1) {
				isi[column][row] = '* ';
			} else if(row == Math.floor(batas/2) || column == Math.floor(batas/2)) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal4(10);

// -------------------
// Soal 5
// -------------------
console.log('Soal 5');
function soal5(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if(row <= column) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi)
}

soal5(10);

// -------------------
// Soal 6
// -------------------
console.log('Soal 6');
function soal6(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if(row >= batas - column - 1) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal6(10);

// -------------------
// Soal 7
// -------------------
console.log('Soal 7');
function soal7(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if(row <= column && row <= batas - column - 1) {
				isi[column][row] = '* ';
			} else if(row >= column && row >= batas - column - 1) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal7(10);

// -------------------
// Soal 8
// -------------------
console.log('Soal 8');
function soal8(range) {
	var batas = range % 2 == 1 ? range : range - 1;
	var isi = [];
	for(var column = 0; column < batas; column++) {
		isi[column] = [];
		for(var row = 0; row < batas; row++) {
			if(row >= column && row <= batas - column - 1) {
				isi[column][row] = '* ';
			} else if(row <= column && row >= batas - column -1) {
				isi[column][row] = '* ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
}

soal8(10);
