// ================== IF STATEMENT ==================
// syntax
/* 
    if(condition){
        code block
    }
*/

const age: number = 10;

if (age >= 17) {
  console.log("Anda bisa buat KTP");
}

// ================== ELSE STATEMENT ==================
// backup plan dari if statement

const age2: number = 20;

if (age2 >= 17) {
  console.log("Anda bisa buat KTP");
} else {
  console.log("Anda belum bisa buat KTP");
}

// ================== ELSE IF STATEMENT ==================

const grade: string = "A";

if (grade === "A") {
  console.log("Nilai bagus");
} else if (grade === "B") {
  console.log("Nilai lumayan");
} else if (grade === "C") {
  console.log("Nilai buruk");
} else {
  console.log("Nilai tidak diketahui!");
}

// ================== SWITCH CASE ==================
// syntax
/* 
    switch(value){
        case value1:
            // add code here
            break;
        case value2:
            // add code here
            break;
        case value3:
            // add code here
            break;
        default:
            // add code here
            break;
    }
*/

const day: string = "senin";

switch (day) {
  case "senin":
    console.log("Hari senin");
    break;
  case "selasa":
    console.log("Hari selasa");
    break;
  case "rabu":
    console.log("Hari rabu");
    break;
  default:
    console.log("Hari tidak ditemukan");
    break;
}

// ================== LOGICAL OPERATOR ==================
// && -> and
// || -> or
// ! -> not

// AND -> harus kedua kondisinya bernilai true agar menghasilkan nilai true
const umur: number = 20;
const punyaSIM: boolean = true;
//     true.       false
if (umur >= 17 && punyaSIM) {
  console.log("Boleh bawa kendaraan");
} else {
  console.log("Belum boleh bawa kendaraan");
}

// OR -> kalau salah satu ada yang nilainya true, akan menghasilkan nilai true
const car: string = "bmw";
//.     true.             false
if (car === "bmw" || car === "mercy") {
  console.log("Mobil eropa");
} else {
  console.log("Mobil jepang");
}

// NOT -> membalikkan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// ================== TERNARY OPERATOR ==================
// shortcut untuk if else condition
// condition ? true : false

const str: string = "javascript";

// cara panjang
if (str === "javascript") {
  console.log("javascript");
} else {
  console.log("not javascript");
}

// cara pendek
console.log(str === "javascript" ? "javascript" : "not javascript");

if (str === "javascript") {
  console.log("javascript");
} else if (str === "typescript") {
  console.log("not javascript");
} else {
  console.log("not found");
}

console.log(
  str === "javascript"
    ? "javascript"
    : str === "typescript"
    ? "typescript"
    : "not found"
);

// ================== LOOP STATEMENT (perulangan) ==================
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi

// tipe loop : for loop, while loop, do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi diakhir setiap iterasi

/* 
    for(statement1;statement2;statement3){
        code block yang akan diulang
    }
*/

for (let i = 0; i < 10; i++) {
  console.log("hello world");
}

// WHILE
/* 
    while(condition){
        code block yang akan diulang
    }

*/

let i: number = 12;

while (i < 10) {
  console.log("Hello world");

  i++;
}

// DO WHILE
/* 
    do {
        code block yang akan diulang
    } while (condition);

*/

let count: number = 1;

do {
  console.log("ini iterasi ke : " + count);
  count++;
} while (count <= 5);

// EXERCISE
// Cetak angka genap dari 2 sampai 20 menggunakan looping

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}

// ================== BREAK ==================
// untuk menghentikan looping

let sum: number = 0;

while (true) {
  console.log(sum);

  if (sum >= 5) {
    break;
  }

  sum++;
}

// ================== CONTINUE ==================
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
