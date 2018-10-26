function printArray(arr) {
	for(var y = 0; y < arr.length; y++) {
		for(var x = 0; x < arr.length; x++) {
			process.stdout.write(arr[y][x]);
		}
		process.stdout.write('\n');
	}
}

function printFibo(val) {
	for(var a = 0; a < val.length; a++) {
		process.stdout.write(val[a] + ', ');
	}
	process.stdout.write('\n');
}

function gjl(val) {
	return val * 2 + 1;
}

function gnp(val) {
	return val * 2;
}

// -------------------
// Soal 1
// -------------------
console.log('Soal 1');
function fib(val) {
	if(val < 2) {
		return 1;
	} else {
		return fib(val - 1) + fib(val - 2);
	}
}

function soal1(val) {
	var batas = val;
	var isi = [];
	for(var a = 0; a < batas; a++) {
		isi[a] = fib(a).toString();
	}
	printFibo(isi);
	console.log('\n');
}

soal1(10);

// -------------------
// Soal 2
// -------------------
console.log('Soal 2');
function fib3(val) {
	if(val < 3) {
		return 1;
	} else {
		return fib3(val - 1) + fib3(val - 2) + fib3(val - 3);
	}
}

function soal2(val) {
	var batas = val;
	var isi = [];
	for(var a = 0; a < batas; a++) {
		isi[a] = fib3(a).toString();
	}
	printFibo(isi);
	console.log('\n');
}

soal2(10);

// -------------------
// Soal 3
// -------------------
function fpb(a, b) {
	if(b == 0) {
		return a;
	} else {
		return fpb(b, a % b);
	}
}

console.log('FPB dari 20 dan 15 adalah ' + fpb(20, 15));

function kpk(a, b) {
	return Math.floor(a * b / fpb(a, b));
}

console.log('KPK dari 20 dan 15 adalah ' + kpk(20, 15));
console.log('\n');

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
			if(row == column) {
				isi[column][row] = gjl(column).toString();
			} else if(row == batas - column - 1) {
				isi[column][row] = gnp(row).toString();
			} else if(row < column && row < batas - column - 1) {
				isi[column][row] = 'D ';
			} else if(row > column && row < batas - column - 1) {
				isi[column][row] = 'A ';
			} else if(row < column && row > batas - column - 1) {
				isi[column][row] = 'C ';
			} else if(row > column && row > batas - column - 1) {
				isi[column][row] = 'B ';
			} else {
				isi[column][row] = '- ';
			}
		}
	}
	printArray(isi);
	console.log('\n')
}

soal4(10);

// -------------------
// Soal 5
// -------------------
console.log('Soal 5');
function soal5(range) {
	var i = 0;
	var j = 0;
	var batas = range % 2 == 1 ? range - 1 : range;
	var isi = [];
	for(var column = -batas; column <= batas; column++) {
		isi[i] = [];
		for(var row = -batas; row <= batas; row++) {
			j++;
			var absc = Math.abs(column);
			var absr = Math.abs(row);
			var hasil = absc > absr ? absc : absr;
			hasil = batas - hasil + 1;
			isi[i][j] = (batas+1) - hasil.toString();
		}
		i++;
	}
	console.log(isi);
}

soal5(4);

// -------------------
// Soal 6
// -------------------
console.log('Soal 6');
function soal5(range) {
	var i = 0;
	var j = 0;
	var batas = range % 2 == 1 ? range - 1 : range;
	var isi = [];
	for(var column = -batas; column <= batas; column++) {
		isi[i] = [];
		for(var row = -batas; row <= batas; row++) {
			j++;
			var absc = Math.abs(column);
			var absr = Math.abs(row);
			var hasil = absc > absr ? absc : absr;
			hasil = batas - hasil + 1;
			if(hasil % 2 == 1) {
				isi[i][j] = (batas+1) - hasil.toString();
			} else {
				isi[i][j] = '';
			}
		}
		i++;
	}
	console.log(isi);
	console.log('\n');
}

soal5(4);

// -------------------
// Soal 5
// -------------------
console.log('Soal 7');
function soal5(range) {
	var i = 0;
	var j = 0;
	var batas = range % 2 == 1 ? range - 1 : range;
	var isi = [];
	for(var column = -batas; column <= batas; column++) {
		isi[i] = [];
		for(var row = -batas; row <= batas; row++) {
			j++;
			var absc = Math.abs(column);
			var absr = Math.abs(row);
			var hasil = absc > absr ? absc : absr;
			hasil = batas - hasil + 1;
			if(hasil % 2 == 1) {
				isi[i][j] = fib(batas - hasil.toString());
			} else {
				isi[i][j] = '';
			}
		}
		i++;
	}
	console.log(isi);
	console.log('\n');
}

soal5(4);