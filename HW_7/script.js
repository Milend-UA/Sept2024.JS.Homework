// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, firstName, lastName, email, phone) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
}

let users = [];
for (let i = 1; i <= 10; i++) {
    let user = new User(i, `John${i}`, `Smith${i}`,
        `john${i}@example.com`, `123-456-789 + ${i}`);
    users.push(user);
}

console.log(users);

// #2ikXsE2WiKZ
// - Взяти масив з User[] з попереднього завдання, та відфільтрувати,
//  залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = users.filter(function(user) {
//     return user.id % 2 === 0;
// });

let filteredUsers = users.filter(user => user.id % 2 === 0)
console.log(filteredUsers);

// #pOeHKct
// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortedUsers = users.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname,
// email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

let clientData = [
    {id: 1, name: 'Jenna', surname: 'Jameson', email: 'jenna.jameson@example.com', phone: '012-345-6789', order: ['Cereal', 'Milk', 'Apples']},
    {id: 2, name: 'Mia', surname: 'Malkova', email: 'mia.malkova@example.com', phone: '789-012-3456', order: ['Pasta']},
    {id: 3, name: 'Adella', surname: 'Danger', email: 'abella.danger@example.com', phone: '123-456-7890', order: ['Bananas', 'Juice', 'Cheese', 'Tomatoes']},
    {id: 4, name: 'Stormy', surname: 'Daniels', email: 'stormy.daniels@example.com', phone: '456-789-0123', order: ['Chicken', 'Rice']},
    {id: 5, name: 'Tera', surname: 'Patrick', email: 'tera.patrick@example.com', phone: '901-234-5678', order: ['Fish', 'Vegetables', 'Eggs']},
    {id: 6, name: 'Sunny', surname: 'Leone', email: 'sunny.leone@example.com', phone: '890-123-4567', order: ['Butter']},
    {id: 7, name: 'Sasha', surname: 'Grey', email: 'sasha.grey@example.com', phone: '234-567-8901', order: ['Bread', 'Milk', 'Honey', 'Cheese']},
    {id: 8, name: 'Riley', surname: 'Reid', email: 'riley.reid@example.com', phone: '678-901-2345', order: ['Yogurt', 'Honey']},
    {id: 9, name: 'Lisa', surname: 'Ann', email: 'lisa.ann@example.com', phone: '345-678-9012', order: ['Tomatoes', 'Cheese']},
    {id: 10, name: 'Eva', surname: 'Angelina', email: 'eva.angelina@example.com', phone: '567-890-1234', order: ['Juice', 'Butter', 'Eggs', 'Cereal']}
];

for (let data of clientData) {
    let client = new Client(data.id, data.name, data.surname, data.email,
        data.phone, data.order);
    clients.push(client);
}

for (const client of clients) {
    console.log(`ID: ${client.id}`);
    console.log(`Name: ${client.name}`);
    console.log(`Surname: ${client.surname}`);
    console.log(`Email: ${client.email}`);
    console.log(`Phone: ${client.phone}`);
    console.log(`Order: ${client.order.join(', ')}`);
    console.log(` `);
}
console.log(`------------------------ NEXT TASK ------------------------------`);
console.log(` `);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedOrderProducts = clients.sort((a, b) => a.order.length - b.order.length);
for (const client of sortedOrderProducts) {
    console.log(`ID: ${client.id}`);
    console.log(`Name: ${client.name}`);
    console.log(`Surname: ${client.surname}`);
    console.log(`Email: ${client.email}`);
    console.log(`Phone: ${client.phone}`);
    console.log(`Order: ${client.order.join(', ')}`);
    console.log(` `);
}

// #vV9a6584I5
//Створити функцію конструктор яка дозволяє створювати об'єкти car,
//з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
function Car(model, manufacturer, yearOfManufacture, topSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.topSpeed = topSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = {};
}

//drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
};
//info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function () {
    console.log(`Model - ${this.model}`);
    console.log(`Manufacturer - ${this.manufacturer}`);
    console.log(`Year of Manufacture - ${this.yearOfManufacture}`);
    console.log(`Top Speed - ${this.topSpeed}`);
    console.log(`Engine Capacity - ${this.engineCapacity}`);
};
//increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.topSpeed += newSpeed;
};
//changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue) {
    this.yearOfManufacture = newValue;
};
//addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver) {
    this.driver = driver;
};

// #5kla3yMpgp
//Створити клас який дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна.
class Car {
    constructor(model, manufacturer, yearOfManufacture, topSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.topSpeed = topSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = {}; // Инициализация пустым объектом
    }

    // drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Їдемо зі швидкістю ${this.topSpeed} на годину`);
    }

    // info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`Model - ${this.model}`);
        console.log(`Manufacturer - ${this.manufacturer}`);
        console.log(`Year of Manufacture - ${this.yearOfManufacture}`);
        console.log(`Top Speed - ${this.topSpeed}`);
        console.log(`Engine Capacity - ${this.engineCapacity}`);
    }

    //increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.topSpeed += newSpeed;
    }

    //changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.yearOfManufacture = newValue;
    }

    //addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
    // і додає його в поточний об'єкт car
    addDriver(driver) {
        this.driver = driver;
    }
}

// #zg6Fifnqig
//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let arrayOfCinderellas = [];
for (let i = 1; i <= 10; i++) {
    let cinderella = new Cinderella(`Cinderella ${i}`, i + 16, i + 35);
    arrayOfCinderellas.push(cinderella);
}
console.log(arrayOfCinderellas);

//Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}

let prince = new Prince("Prince Vasya", 25, 45);
console.log(prince);
//За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let cinderella of arrayOfCinderellas) {
    if (cinderella.footSize === prince.foundShoeSize) {
        console.log(`Принц знайшов свою Попелюшку: ${cinderella.name}`);
        break;
    }
}
//Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let findCinderella = arrayOfCinderellas.find(cinderella =>
    cinderella.footSize === prince.foundShoeSize);
if (findCinderella) {
    console.log(`Принц знайшов свою Попелюшку: ${findCinderella.name}`);
}

// #gsKLAsNWM
//Через Array.prototype. створити власний foreach
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let numbers = [1, 2, 3, 4, 5];

numbers.myForEach(function (element, index, array) {
    console.log(`Элемент: ${element}, Индекс: ${index}, Массив: [${array}]`);
});

//Через Array.prototype. створити власний filter
Array.prototype.myFilter = function (callback) {
    let filteredArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.myFilter(function (element) {
    return element % 2 === 0;
});
console.log(evenNumbers);
