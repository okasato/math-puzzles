/*
math puzzle 3
translate Arabic into Roman
*/

const ARABIC_TO_ROMAN = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

const convertArabicIntoRoman = number => {
  let output = '';
  const convert = (number, digit) => {
    for (let i = 0; i < Math.floor(number / digit); i += 1) {
      output += ARABIC_TO_ROMAN[digit];
    }
  }

  convert(number, 1000);
  number = number % 1000;

  if (number >= 900 && number <= 999) {
    output += ARABIC_TO_ROMAN[900];
  } else if (number >= 400 && number <= 499) {
    output += ARABIC_TO_ROMAN[400];
  } else {
    convert(number, 500);
    number = number % 500;
    convert(number, 100);
  }

  number = number % 100;

  if (number >= 90 && number <= 99) {
    output += ARABIC_TO_ROMAN[90];
  } else if (number >= 40 && number <= 49) {
    output += ARABIC_TO_ROMAN[40];
  } else {
    convert(number, 50);
    number = number % 50;
    convert(number, 10);
  }

  number = number % 10;

  if (number === 9) {
    output += ARABIC_TO_ROMAN[9];
  } else if (number === 4) {
    output += ARABIC_TO_ROMAN[4];
  } else {
    convert(number, 5);
    number = number % 5;
    convert(number, 1);
  }

  return output;
}