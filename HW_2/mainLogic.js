#bAUsaq6LI
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 101;

if (time >= 0 && time <= 15) {
    console.log('First quarter of the hour');
} else if (time >= 16 && time <= 30) {
    console.log('Second quarter of the hour');
} else if (time >= 31 && time <= 45) {
    console.log('Third quarter of the hour');
} else if (time >= 46 && time <= 59) {
    console.log('Fourth quarter of the hour');
} else {
    console.log('Invalid value');
}

// #UMoNq4biWGe
// У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let d = -3;
if (d >= 1 && d <= 10) {
    console.log('First decade');
} else if (d >= 11 && d <= 20) {
    console.log('Second decade');
} else if (d >= 21 && d <= 31) {
    console.log('Third decade');
} else {
    console.log('Invalid value');
}

// #KzrtqyQ
// - Скласти розклад на тиждень за допомоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

let dayId = 4;

switch (dayId) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid value');
}

// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох.
//Також потрібно врахувати коли введені рівні числа.

let num1 = 44;
let num2 = 789;
if (num1 > num2) {
    console.log('Максимальне число: ' + num1);
} else if (num1 < num2) {
    console.log('Максимальне число: ' + num2);
} else {
    console.log('Числа рівні: ' + num1);
}

// #iBvqtjEm
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно)
// . Напишіть код який, буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
// (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = '';

if (!x) {
    x = "default";
}

console.log(x);

// #awLXL6TBzg
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray[0].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[1].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[2].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[3].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[4].monthDuration > 5 ? "Супер" : "");
console.log(coursesAndDurationArray[5].monthDuration > 5 ? "Супер" : "");