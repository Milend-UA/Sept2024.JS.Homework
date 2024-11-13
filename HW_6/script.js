// #dFeorS3m7u
// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

console.log(str1.length);
console.log(str2.length);
console.log(str3.length);

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str4 = 'hello world';
let str5 = 'lorem ipsum';
let str6 = 'javascript is cool';

// console.log(str1.toUpperCase() + ' ' + str2.toUpperCase() + ' ' + str3.toUpperCase());
console.log(`${str4.toUpperCase()}, ${str5.toUpperCase()}, ${str6.toUpperCase()}`);

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str7 = 'HELLO WORLD';
let str8 = 'LOREM IPSUM';
let str9 = 'JAVASCRIPT IS COOL';
console.log(`${str7.toLowerCase()}, ${str8.toLowerCase()}, ${str9.toLowerCase()}`);

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str10 = ' dirty string   ';
console.log(str10.trim());

// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let stringToArray = str => str.split(' ');
let arr = stringToArray(str);
console.log(arr);

// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] за допомоги map
// перетворити всі об'єкти в масиві на стрінгові.

let arrayOfNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let arrayOfStrings = arrayOfNumbers.map(arrayElement => arrayElement.toString());
console.log(arrayOfStrings);

// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка приймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності від значення
// аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(array, direction) {
    if (direction === 'ascending') {
        array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        array.sort((a, b) => b - a);
    }
    return array;
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending'));  // [3, 11, 21]
console.log(sortNums(nums, 'descending')); // [21, 11, 3]

// #yo06d74c1C
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

