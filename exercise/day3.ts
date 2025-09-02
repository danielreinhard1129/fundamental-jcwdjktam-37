// No 1
const angka: number = 4;

for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}

// No 2

// [0] = m
// [1] = a
// [2] = d
// [3] = a
// [4] = m
// [5] = undefined

const kata: string = "madam";
let result: string = "";

for (let i = kata.length - 1; i >= 0; i--) {
  result += kata[i]; // result = result + kata[i]
}

console.log(kata.length);
console.log(result);
console.log(result === kata);

// No 3
const cm: number = 100_000;
const km: number = cm / 100_000;
console.log(`${km} km`);

// No 4
const harga: number = 4000;
const hasil: string = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  //   maximumFractionDigits: 0,
}).format(harga);

console.log(hasil);

// No 5
const kalimat: string = "Hello World";
const search: string = "ell";
const result2: string = kalimat.replace(search, "");
console.log(result2);

// No 6
const inputString: string = "hello world";
let words = inputString.split(" ");
console.log(words.length);
console.log(words[0]);
console.log(words[1]);
console.log(words[0][0]);
console.log(words[1][0]);

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

console.log(words.join(" "));

// No 7
const inputString2: string = "The QuiCk BrOwN Fox";
let swappedString: string = "";

for (let i = 0; i < inputString2.length; i++) {
  if (inputString2[i] === inputString2[i].toUpperCase()) {
    swappedString += inputString2[i].toLowerCase();
  } else {
    swappedString += inputString2[i].toUpperCase();
  }
}

console.log(swappedString);

// No 8
const num1: number = 42;
const num2: number = 27;

// condition ? true : false
console.log(num1 > num2 ? num1 : num2);

// No 9
const number1: number = 42;
const number2: number = 27;
const number3: number = 18;

const smallest: number = Math.min(number1, number2, number3);
const largest: number = Math.max(number1, number2, number3);
const middle: number = number1 + number2 + number3 - smallest - largest;

console.log(`${smallest} ${middle} ${largest}`);

// No 10
const input: any = undefined;

if (typeof input === "string") {
  console.log(1);
} else if (typeof input === "number") {
  console.log(2);
} else {
  console.log(3);
}

// No 11
// Cara 1
const input2: string = "An apple a day keeps the doctor away".toLowerCase();
const replaceWord: string = "a";
let modifiedString: string = "";

for (let i = 0; i < input2.length; i++) {
  if (input2[i] === replaceWord) {
    modifiedString += "*";
  } else {
    modifiedString += input2[i];
  }
}

console.log(modifiedString);

// Cara 2
console.log(input2.replaceAll("a", "*"));

// win : shift + alt + F
// mac : shift + opt + F
