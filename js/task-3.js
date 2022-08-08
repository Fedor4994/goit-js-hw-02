// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную
// строку(в строке будут только слова и пробелы) и возвращает
// самое длинное слово в этой строке.

const findLongestWord = function (string) {
  // делаем из строки массив
    const stringArray = string.split(' ');
    let biggestWord = stringArray[0];
    // перебераем элементы массива и сравниваем длину каждого
    for (let elem of stringArray) {
        if (elem.length > biggestWord.length) {
            biggestWord = elem;
        }
    }
    // возвращем самое длинное слово
    return biggestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'