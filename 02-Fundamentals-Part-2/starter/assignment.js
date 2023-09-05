'use script';
//functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;

}

const desc1 = describeCountry('finland', 6, 'helsinki');
const desc2 = describeCountry('india', 140, 'delhi');
const desc3 = describeCountry('germany', 83, 'berlin');
console.log(desc1, desc2, desc3);

//Function Declarations vs Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;

}
const percetageOfWorld2 = function (population) {
  return (population / 7900) * 100;

}
const percIndia = percentageOfWorld1(1406);
const percChina = percentageOfWorld1(1441);
const percUSA = percentageOfWorld1(332);
console.log(percIndia, percChina, percUSA);


//Arrow functions
const percentageOfWorld3 = population =>
  (population / 7900) * 100;

const percIndia2 = percentageOfWorld3(140);
const percChina2 = percentageOfWorld3(144);
const percUSA2 = percentageOfWorld3(33);
console.log(percIndia2, percChina2, percUSA2);

//functions calling other functions
const describePopulation = function (country, population) {
  const percenatge = percentageOfWorld1(population);
  const description = `${country}has ${population}million people,which is about ${percenatge}% of the world`;
}
describePopulation('India', 1406)
describePopulation('china', 1441)
describePopulation('USA', 332)

//Arrays
/*let Populations = [1406, 1441, 331, 40];
console.log(Populations.length === 4);
const percentages = [percentageOfWorld1(Populations[0]), percentageOfWorld1(Populations[1]), percentageOfWorld1(Populations[2]), percentageOfWorld1(Populations[Populations.length - 1])];
console.log(percentages);*/

const neighbours = ['pakistan', 'nepal', 'srilanka'];
console.log(neighbours.push('Utopia'));
console.log(neighbours);
console.log(neighbours.pop());
console.log(neighbours);
if (!neighbours.includes('Germany')) {
  console.log('probably not a central european country :D');
}
neighbours[neighbours.indexOf('nepal')] = 'republic of nepal';
console.log(neighbours);

//objects
const myCountry = {
  country: 'India',
  capital: 'Delhi',
  language: 'Hindi',
  population: 1406,
  neighbours: ['pakistan', 'nepal', 'srilanka'],

  describe: function () {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland: function () {
    this.island = this.neighbours.length === 0 ? true : false;
  }
};

console.log(myCountry.population + 2);
console.log(myCountry['population'] - 2);
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);


//loop

for (voter = 1; voter <= 50; voter++) {
  console.log(`voter number ${voter} is currently voting`);
}

const Populations = [1406, 1441, 332, 40];
const percentages2 = []
for (let i = 0; i < Populations.length; i++) {
  const perc = percentageOfWorld1(Populations[i]);
  percentages2.push(perc);
}
console.log(percentages2);

const listOfneighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
for (let i = 0; i < listOfneighbours.length; i++) {
  for (let y = 0; y < listOfneighbours[i].length; y++) {
    console.log(`Neighbour:${listOfneighbours[i][y]}`);
  }
}

const percentages3 = [];
let i = 0;
while (i < Populations.length) {
  const perc = percentageOfWorld1(Populations[i]);
  percentages3.push(perc);
  i++;
}
console.log(percentages3)









