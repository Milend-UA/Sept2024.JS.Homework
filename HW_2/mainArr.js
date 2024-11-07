// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
let arr = ['my', 'ex', 'was', 345, -234, 'true', 'bad', 1973, 2024, 'false'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'Title_1',
    pageCount: 202,
    genre: 'Genre_1',
}
let book2 = {
    title: 'Title_2',
    pageCount: 303,
    genre: 'Genre_2',
}
let book3 = {
    title: 'Title_3',
    pageCount: 404,
    genre: 'Genre_3',
}

console.log(book3.pageCount); //LOL

// #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//     Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book1 = {
    title: 'Title_1',
    pageCount: 202,
    genre: 'Genre_1',
    authors: [
        {
            name: 'John',
            age: 45
        }
    ],
}
let book2 = {
    title: 'Title_2',
    pageCount: 567,
    genre: 'Genre_2',
    authors: [
        {
            name: 'Peter',
            age: 76
        }
    ],
}
let book3 = {
    title: 'Title_3',
    pageCount: 100,
    genre: 'Genre_3',
    authors: [
        {
            name: 'Mary',
            age: 30
        }
    ],
}
#jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутність "користувач".
// Поля: name, username, password.
// Вивести в консоль пароль кожного користувача

let arr = [
    {name:'Name1',username:'username1', password:'password1'},
    {name:'Name2',username:'username2', password:'password2'},
    {name:'Name3',username:'username3', password:'password3'},
    {name:'Name4',username:'username4', password:'password4'},
    {name:'Name5',username:'username5', password:'password5'},
    {name:'Name6',username:'username6', password:'password6'},
    {name:'Name7',username:'username7', password:'password7'},
    {name:'Name8',username:'username8', password:'password8'},
    {name:'Name9',username:'username9', password:'password9'},
    {name:'Name10',username:'username10', password:'password10'},
]
console.log(arr[0].password);
console.log(arr[1].password);
console.log(arr[2].password);
console.log(arr[3].password);
console.log(arr[4].password);
console.log(arr[5].password);
console.log(arr[6].password);
console.log(arr[7].password);
console.log(arr[8].password);
console.log(arr[9].password);

#coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці,
// вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати.
// Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив
// з 21 значенням виключаємо одразу

let temperature = [
    {Sunday: {Morning: 't -10', Afternoon: 't', Evening: 't'},},
    {Monday: {Morning: 't', Afternoon: 't', Evening: 't'},},
    {Tuesday: {Morning: 't', Afternoon: 't', Evening: 't'},},
    {Wednesday: {Morning: 't', Afternoon: 't', Evening: 't'},},
    {Thursday: {Morning: 't', Afternoon: 't', Evening: 't'},},
    {Friday: {Morning: 't', Afternoon: 't', Evening: 't'},},
    {Saturday: {Morning: 't', Afternoon: 't', Evening: 't'},},
];

console.log(temperature[0].Sunday.Morning);