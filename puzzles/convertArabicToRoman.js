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

const convertArabicToRoman_1 = number => {
  
  const convert = (number, digit) => {
    let result = '';
    for (let i = 0; i < Math.floor(number / digit); i += 1) {
      result += ARABIC_TO_ROMAN[digit];
    }
    return result;
  };

  let result = '';
  result += convert(number, 1000);
  number = number % 1000;

  if (number >= 900 && number <= 999) {
    result += ARABIC_TO_ROMAN[900];
  } else if (number >= 400 && number <= 499) {
    result += ARABIC_TO_ROMAN[400];
  } else {
    result += convert(number, 500);
    number = number % 500;
    result += convert(number, 100);
  }

  number = number % 100;

  if (number >= 90 && number <= 99) {
    result += ARABIC_TO_ROMAN[90];
  } else if (number >= 40 && number <= 49) {
    result += ARABIC_TO_ROMAN[40];
  } else {
    result += convert(number, 50);
    number = number % 50;
    result += convert(number, 10);
  }

  number = number % 10;

  if (number === 9) {
    result += ARABIC_TO_ROMAN[9];
  } else if (number === 4) {
    result += ARABIC_TO_ROMAN[4];
  } else {
    result += convert(number, 5);
    number = number % 5;
    result += convert(number, 1);
  }

  return result;
};


const convertArabicToRoman_2 = number => {

  const convert = (number, i, v, x) => {
    let result = '';
    if (number === 9) {
      result += i + x;
    } else if (number === 4) {
      result += i + v;
    } else {
      for (let j = 0; j < Math.floor(number / 5); j += 1){
        result += v;
      }
      number = number % 5;
      for (let j = 0; j < number; j += 1){
        result +=  i;
      }
    }
    return result;
  };

  let result = '';
  
  for (let i = 0; i < Math.floor(number / 1000); i += 1){
    result += 'M';
  }

  number = number % 1000;
  result += convert(Math.floor(number / 100), 'C', 'D', 'M');

  number = number % 100;
  result += convert(Math.floor(number / 10), 'X', 'L', 'C');

  number = number % 10;
  result += convert(number, 'I', 'V', 'X');

  return result;
}