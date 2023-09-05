// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 22;
const calcAge = birthyear => 2023 - birthyear;
console.log(calcAge(1999));

const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAltitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAltitude(temperature);
console.log(amplitude);

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1}day ... `;
  }
  console.log('...' + str);
};
printForecast(data1);
