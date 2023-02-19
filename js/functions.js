//функиция, которая проверяет длину строки

function getStringLength (word, length) {
  if(word.length - 1 < length){
    return true;
  }
  return false;
}

getStringLength('проверяемая строка', 20);
getStringLength('проверяемая строка', 18);
getStringLength('проверяемая строка', 10);

//Функция для проверки, является ли строка палиндромом.

function getPalindrom (string) {
  let upperString = string.toUpperCase();
  upperString = upperString.replaceAll(' ', '');
  for (let i = 0; i <= upperString.length - 1; i++) {
    if(upperString.at(-i - 1) !== upperString.at(i)) {
      return false;
    }
  }
  return true;
}

getPalindrom('топот'); // Результат: true - строка является палиндромом
getPalindrom('ДовОд'); // Результат: true - несмотря на разный регистр, тоже палиндром
getPalindrom('Кекс'); // Результат: false - это не палиндром

getPalindrom('Лёша на полке клопа нашёл ');

//функция принимающая строку и извлекающая из неё целые числа
function getNumber (string) {
  let newString = String(string);
  newString = newString.replace(/[^\d]/g, '');
  if(newString === ''){
    return NaN;
  }
  return parseInt(newString, 10);
}
//проверка если приходит строка
getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир 05 батона');
//проверка строки без чисел
getNumber('а я томат');
//проверка если приходит число
getNumber(2023);
getNumber(-1);
getNumber(1.5);

//функция с тремя параметрами
function getFileAddres (string, minLength, finishing) {
  let newString = String(string);
  const finishingString = String(finishing);
  if(newString.length >= minLength){
    return newString;
  }
  if(newString.length < minLength){
    while(newString.length < minLength){
      const differenceLength = Number(newString.length + finishingString.length);
      if(differenceLength > minLength){
        const minus = differenceLength - minLength;
        newString = finishingString.slice(0, -minus) + newString;
        return newString;
      }
      newString = finishingString + newString;
    }
    return newString;
  }
}

//рабочая функция через padStart
/*function getFileAddres (string, targetLength, padString) {
  const newString = string.padStart(targetLength, padString);
  return newString;
}*/

getFileAddres('1', 2, '0'); // Результат: строка '01'
getFileAddres('1', 4, '0'); // Результат: строка '0001'
getFileAddres('q', 4, 'werty'); // Результат: строка 'werq'
getFileAddres('q', 4, 'we'); // Результат: строка 'wweq'
getFileAddres('qwerty', 4, '0'); // Результат: строка 'qwerty'
