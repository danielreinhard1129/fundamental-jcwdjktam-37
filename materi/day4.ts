// ================== ARRAY ==================

const arr = []; // cara 1
const arr2 = new Array(); // cara 2

// array of string
const arrString: string[] = ["A", "B", "C", "D"];

// array of number
const arrNumber: number[] = [1, 2, 3, 4, 5];

console.log(arrString[1]);
console.log(arrNumber[3]);

interface Student {
  age: number;
  address: string;
  name: string;
  hobby: string[];
}

const student: Student = {
  age: 17,
  address: "Jl. Setiabudi 10",
  name: "Budi",
  hobby: ["badminton", "futsal", "mancing"],
};

console.log(student.name); // cara 1 mengakses object
console.log(student["name"]); // cara 2 mengakses object

const students: Student[] = [
  {
    name: "Budi",
    age: 17,
    address: "Jl. Setiabudi 10",
    hobby: ["badminton", "futsal", "mancing"],
  },
  {
    name: "Siti",
    age: 17,
    address: "Jl. Setiabudi 11",
    hobby: ["membaca", "ngoding"],
  },
];

console.log(students.length);
console.log(students[1].name);

// ================== FOR OF ==================
/* 
    for(value of variables){
        // add logic here
    }

*/

const fruits: string[] = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}

// ================== FUNCTION ==================
// 1. Function Declaration
/* 
    function namaFunction(parameter){
        // logic
    }
*/

function square(angka: number) {
  return angka * angka;
}

console.log(square(10));
console.log(square(5));
console.log(square(90));

// 2. Function Expression
const square2 = function (angka: number) {
  return angka * angka;
};

console.log(square2(10));
console.log(square2(5));
console.log(square2(90));

// ================== FUNCTION SCOPE ==================
// variable yang di define di dalam function, hanya bisa diakses di dalam func tsb

function greeting() {
  const hello: string = "Hello";

  console.log(hello);

  return hello;
}

// console.log(hello); // ini gak bakalan bisa

// ================== PARAMETER & ARGUMENT ==================
// parameter -> variable yg mewakili value dari argument yang dimasukkan
// argument -> value yang dimasukkan saat pemanggilan function

//         parameter 👇
function greeting2(name: string) {
  const hello: string = "Hello ";
  return hello + name;
}

// argument 👇
greeting2("Budi");

// ================== DEFAULT PARAMETER ==================
function multiply(a: number, b: number = 4) {
  console.log(a);
  console.log(b);

  return a * b;
}

console.log(multiply(2, 10));

// ================== REST PARAMETER ==================
// mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a: number, b: number, ...manyMoreArgs: number[]) {
  console.log(a);
  console.log(b);
  console.log(manyMoreArgs);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8);

// ================== NESTED FUNCTION ==================
// fungsi yang berada di dalam fungsi
// inner function bisa mengakses parameter dari outer function
// outer function tidak bisa mengakses parameter dari inner function

// outer function
function getMessage(firstName: string) {
  // inner function
  function sayHello() {
    return "Hello " + firstName + ", ";
  }

  // inner function
  function welcome() {
    return "Welcome to purwadhika";
  }

  return sayHello() + welcome();
}

console.log(getMessage("budi"));

// ================== RECURSIVE ==================
// fungsi yang memanggil dirinya sendiri

function countdown(number: number) {
  console.log(number);

  let nextNumber = number - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

// ================== ARROW FUNCTION ==================
// shortcut untuk menuliskan function expression

// contoh function expression
const square3 = function (angka: number) {
  return angka * angka;
};

// syntax : (parameter) => {}
// contoh jika diubah ke arrow function
const square4 = (angka: number) => {
  return angka * angka;
};

// kalo misalnya cuman 1 line bisa di singkat kaya gini
const square5 = (angka: number) => angka * angka;

// ================== ARRAY BUILT IN METHOD ==================
// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["hello", "world", "test"];
console.log(words2);
console.log(words2.pop());
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["hello", "world", "test"];
console.log(words3);
console.log(words3.shift());
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["hello", "world", "test"];
words4.unshift("joko");
console.log(words4);

// PUSH -> menambahkan value ke urutan paling akhir array
const words5: string[] = ["hello", "world", "test"];
words5.push("siti");
console.log(words5);

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumus -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "mar", "apr", "jun"];
// menambahkan data
months.splice(1, 0, "feb");
console.log(months);

// menghapus data
months.splice(4, 1);
console.log(months);

// mengedit data
months.splice(3, 1, "may");
console.log(months);

// SLICE -> mereturn array baru berdasarkan start index dan end index
// rumus -> slice(startIndex, endIndex)
const fruits2: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits2.slice(1, 4));

// INDEXOF -> mencari index dari value yang kita cari, kalo tidak ditemukan akan me return -1
const fruits3: string[] = ["apple", "banana", "orange", "mango", "lemon"];
console.log(fruits3.indexOf("orange"));
console.log(fruits3.indexOf("pepaya"));

// SORT -> mengurutkan isi array berupa string atau number
const fruits4: string[] = ["banana", "orange", "apple", "mango", "lemon"];
fruits4.sort();
console.log(fruits4);

const points: number[] = [2, 5, 3, 10, 8];
points.sort((a, b) => a - b); // asc (kecil ke besar)
console.log(points);

points.sort((a, b) => b - a); // desc (besar ke kecil)
console.log(points);

// REVERSE -> membalikkan urutan element dalam array
const points2: number[] = [2, 5, 3, 10, 8];
points2.reverse();
console.log(points2);

// INCLUDES -> mengecek value pada array ada atau tidak. Hasil returnya adalah boolean
const fruits5: string[] = ["banana", "orange", "apple", "mango", "lemon"];
console.log(fruits5.includes("apple"));
console.log(fruits5.includes("test"));

// MAP -> melakukan looping pada array dan akan mereturn array baru
const points3: number[] = [1, 2, 3, 4, 5];

const result = points3.map((point, index) => {
  console.log(index);
  return point * 2;
});

console.log(result);

// FOREACH -> melakukan looping pada array tapi tidak mereturn array baru
const fruits6: string[] = ["banana", "orange", "apple", "mango", "lemon"];
fruits6.forEach((fruit, index) => {
  console.log(index);
  console.log(fruit);
});

// FILTER -> melakukan looping pada array dan menghasilkan array baru berdasarkan kondisi pada return functionnya
const ages: number[] = [32, 15, 41, 22, 31];

const result2 = ages.filter((age) => {
  return age > 22;
});

console.log(result2);

// FIND -> mencari value yang ditemukan pertama kali dalam array
const ages2: number[] = [32, 15, 41, 22, 31, 41];

const result3 = ages2.find((age) => {
  return age === 41;
});

console.log(result3);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3: number[] = [32, 15, 41, 22, 31, 41];

const result4 = ages2.findIndex((age) => {
  return age === 41;
});

console.log(result4);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers: number[] = [200, 50, 100, 50];

const result5 = numbers.reduce((a, b) => {
  return a + b;
});

console.log(result5);
