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

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

let filteredArray = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredArray);

let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(transformedArray);

// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)

let suits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
let deck = [];
for (let suit of suits) {
    for (let value of values) {
        deck.push(`${value} of ${suit}`);
    }
}
console.log(deck);
//  - знайти піковий туз
let filteredDeck = deck.filter(card => card === 'ace of spades');
console.log(filteredDeck);
//  - всі шістки
let sixes = deck.filter(card => card.includes('6'));
console.log(sixes);
//  - всі червоні карти
let redCards = deck.filter(card => card.includes('diamonds') || card.includes('hearts'));
console.log(redCards);
// - всі буби
let diamondsCards = deck.filter(card => card.includes('diamonds'));
console.log(diamondsCards);
//  - всі трефи від 9 та більше
let clubsCards = deck.filter(card => card.includes('clubs') && (card.includes('9') || card.includes('10') || card.includes('jack') || card.includes('queen') || card.includes('king') || card.includes('ace')));
console.log(clubsCards);

// #EP5I1UUzAX
//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let reducedDeck = deck.reduce((accumulate, card) => {
    let suit = card.split(' ')[2];
    accumulate[suit].push(card);
    return accumulate;
}, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reducedDeck);

// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let coursesWithSass = courses.filter(course => course.modules.includes('sass'));
console.log(coursesWithSass);
let coursesWithDocker = courses.filter(course => course.modules.includes('docker'));
console.log(coursesWithDocker);