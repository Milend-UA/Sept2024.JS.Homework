// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б

function calculateRectangleArea(a, b) {
    if (a > 0 && b > 0) {
        return a * b;
    } else {
        return 'Sides must be positive!';
    }
}

console.log(calculateRectangleArea(5, 7));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function calculateCircleArea(r) {
    const pi = 3.14;
    if (r > 0) {
        return pi * r * r;
    } else {
        return 'R must be > 0';
    }
}
let result = calculateCircleArea(5);
console.log('Площа кола: ' + result);


// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
//S=2πr(r+h)

function calculateCylinderArea(h, r) {
    const pi = 3.14;
    if (r > 0 && h > 0) {
        return 2 * pi * r * (r + h);
    } else {
        return 'R or H must be > 0';
    }
}

let result = calculateCylinderArea(5, 10);
console.log('Площа циліндру: ' + result);

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function printArrayElements(array) {
    for (let element of array) {
        console.log(element);
    }
}

let array = [1, 34, -516];
printArrayElements(array);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. 
// Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p> ${text} </p>`);
}

createParagraph(`Параграф з текстом`);

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li
// та виводить його через document.write.
// Текст li задати через аргумент всім однаковий

function createUnorderedList(text) {
    let ul = `<ul>`;
    for (let i = 0; i < 3; i++) {
        ul += `<li>${text}</li>`;
    }
    ul += '</ul>';
    document.write(ul);
}

createUnorderedList(`Текст li задати через аргумент всім однаковий`);

// #0Kxco1edSN
// - створити функцію яка створює ul з елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл) та виводить його через document.write

function createUL(text, counter) {
    let ul = '<ul style="list-style-type:none">';
    for (let i = 1; i <= counter; i++) {
        ul += `<li>${text}</li>`;
    }
    ul += '</ul>';
    document.write(ul);
}

createUL('Текст li задати через аргумент всім однаковий', 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві),
// та будує для них список (ul li) та виводить його через document.write

function createAndWriteListFromArray(array) {
    let ul = `<ul>`;
    for (let i = 0; i < array.length; i++) {
        ul += `<li>${array[i]}</li>`;
    }
    ul += '</ul>';
    document.write(ul);
}

let someArray = [12345, '#gEFoxMMO', false];
createAndWriteListFromArray(someArray);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function displayUsers(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(
            `<div>
                 <p> id: ${array[i].id} </p>
                 <p> name: ${array[i].name} </p>
                 <p> age: ${array[i].age} </p>
                 <p>&nbsp;</p>
            </div>`
        );
    }
}

const usersArray = [
    {id: 1, name: "Michael", age: 22},
    {id: 2, name: "Emily", age: 23},
    {id: 3, name: "James", age: 24}
];
displayUsers(usersArray);

// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

function minArrayElement(array) {
    let min = array[0];
    for (const element of array) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

let exampleArray = [3, 7, 2, 5, 9];
console.log(minArrayElement(exampleArray));

// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел,
// сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

let array = [1, 2, 10];
console.log(sum(array));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2).
// Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    if (index1 < arr.length && index2 < arr.length && index1 !== index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    } else {
        return 'Invalid value';
    }
}

console.log(swap([11, 22, 33, 44], 0, 1)); // => [22, 11, 33, 44]
console.log(swap([11, 22, 33, 44], 0, 4)); // => Invalid value
console.log(swap([11, 22, 33, 44], 1, 1)); // => Invalid value

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

// let currencyValues = [
//     {currency:'USD', value:25},
//     {currency:'EUR', value:42}
// ];

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     let selectedCurrency;
//
//     for (let item of currencyValues) {
//         if (item.currency === exchangeCurrency && sumUAH > 0) {
//             selectedCurrency = item;
//             break;
//         }
//     }
//
//     if (selectedCurrency) {
//         return sumUAH / selectedCurrency.value;
//     } else {
//         return 'Currency not found';
//     }
// }

// OR

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency && sumUAH > 0) {
            return sumUAH / item.value;
        }
    }
    return 'Currency not found';
}


console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')); // => 250
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR')); // => 238.0952380952381