const country = "India";
const continent = "Asia";
let population = 140;
const isIsland = false;
const language = "kannada";
const avgPopulation = 33;
const finlandPopulation = 6;




let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
let newDescription = `${country} is in ${continent},and its ${population} million people speak ${language}`;

console.log(country);
console.log(continent);
console.log(population);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof language);
console.log(population / 2);
population++;
console.log(population);
console.log(population > finlandPopulation);
console.log(population < avgPopulation);
console.log(description);
console.log(newDescription);



if (population > 33) {
  console.log(`${country}'s population is above average`);
}
else {
  console.log(`${country}'s population is 22 million below average`)
}
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

/*const numNeighbours = Number(prompt('how many neighbour countries does your country have?'));
if (numNeighbours === 1) {
  console.log('only 1 border!');
} else if (numNeighbours > 1) {
  console.log('more than 1 border')
} else {
  console.log('no borders')
}*/
if (language === 'english' && population < 50 && isIsland) {
  console.log(`you should live in ${country}:)`)
} else {
  console.log(`${country} does not meet your criteria:(`)
}


/*const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins win the trophy');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas win the trophy');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both win the trophy')

}
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 112 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);
*/
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('great language too:D');

}

