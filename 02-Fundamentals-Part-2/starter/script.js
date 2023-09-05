'use strict';
/*function logger() {
  console.log('my name is shashank');
}

logger();
logger();

//fuction declaration
function fruitProcessor(apples, oranges) {

  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const yearUntilRetirement = birthyear => {
  const age = 2023 - birthyear;
  const retirement = 60 - age;
  return retirement;
}

console.log(yearUntilRetirement(1999))

const calcage = function (year) {
  return 2023 - year;
}


const yearUntilRetirement = function (birthyear) {
  const age = 2023 - birthyear;
  const retirement = 60 - age;
  if (retirement > 0) {
    return retirement;
  }
  else {
    return -1;
  }
}

console.log(yearUntilRetirement(1999))*/

const shashank = [
  'shashank',
  'nagabhushan',
  23,
  'student',
  ['Tarun', 'dan', 'sanjay']

];
const types = []
for (let i = 0; i < shashank.length; i++) {
  console.log(shashank[i], typeof shashank[i]);
}

const years = [1999, 2008, 1968, 1930]
const ages = [];



for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);


//continue and break
console.log(`===onlystring===`);
for (let i = 0; i < shashank.length; i++) {
  if (typeof shashank[i] !== 'string') continue;
  console.log(shashank[i], typeof shashank[i]);
}
console.log(`===onlybreak===`);
for (let i = 0; i < shashank.length; i++) {
  if (typeof shashank[i] === 'number') break;
  console.log(shashank[i], typeof shashank[i]);
}

let rep = 1;
while (rep <= 10) {
  console.log(`lifting weight repetition ${rep}`);
  rep++;
}


let dice = Math.trunc(Math.random() * 6 + 1);
while (dice !== 6) {
  console.log(`you rolled a ${dice} `);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log(`loop is about to end`);
  }
}
