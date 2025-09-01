console.log("Hello World");

// ini adalah comment 1
// ini adalah comment 1

/* 
    ini
    adalah
    comment 2
*/

// ================== VARIABLE ==================
// storage / panampungan data
// var, let, const

var person = "Budi";
console.log(person);

let person2 = "Siti";
person2 = "Joko";

const person3 = "Jack";
// person3 = "Test"; // ini gak bisa

// windows : ctrl + k + q
// mac : cmd + k + q

// ================== VARIABLE NAMING ==================
/*
    - must contain only letters, digit, or symbol "$" and "_"
    - the first character must not digit
    - case sensitive
*/

const companyProfile = "Purwadhika"; // camel case
const CompanyProfile = "Purwadhika"; // pascal case
const company_profile = "Purwadhika"; // snake case

// ================== DATA TYPES ==================
// primitive data types: string, number, boolean, null dan undefined
// non primitive data types: object dan array

// string -> "" '' ``
console.log("Hello");
console.log("Hello");
console.log(`Hello`);

// number -> 1 2 3 100 500 1000
console.log(1);
console.log(10);
console.log(40);

// boolean -> true or false
console.log(true);
console.log(false);

// null -> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

// undefined -> js tidak tau isinya
let orang2 = undefined;

console.log(typeof companyProfile);
console.log(typeof 1000);
console.log(typeof true);
console.log(typeof orang2);
