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

let sortedUsers = users.sort((a,b) => a.id - b.id);
console.log(sortedUsers);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname,
// email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

let clientData = [
    { id: 1, name: 'Jenna', surname: 'Jameson', email: 'jenna.jameson@example.com', phone: '012-345-6789', products: ['Cereal', 'Milk', 'Apples'] },
    { id: 2, name: 'Mia', surname: 'Malkova', email: 'mia.malkova@example.com', phone: '789-012-3456', products: ['Pasta'] },
    { id: 3, name: 'Adella', surname: 'Danger', email: 'abella.danger@example.com', phone: '123-456-7890', products: ['Bananas', 'Juice', 'Cheese', 'Tomatoes'] },
    { id: 4, name: 'Stormy', surname: 'Daniels', email: 'stormy.daniels@example.com', phone: '456-789-0123', products: ['Chicken', 'Rice'] },
    { id: 5, name: 'Tera', surname: 'Patrick', email: 'tera.patrick@example.com', phone: '901-234-5678', products: ['Fish', 'Vegetables', 'Eggs'] },
    { id: 6, name: 'Sunny', surname: 'Leone', email: 'sunny.leone@example.com', phone: '890-123-4567', products: ['Butter'] },
    { id: 7, name: 'Sasha', surname: 'Grey', email: 'sasha.grey@example.com', phone: '234-567-8901', products: ['Bread', 'Milk', 'Honey', 'Cheese'] },
    { id: 8, name: 'Riley', surname: 'Reid', email: 'riley.reid@example.com', phone: '678-901-2345', products: ['Yogurt', 'Honey'] },
    { id: 9, name: 'Lisa', surname: 'Ann', email: 'lisa.ann@example.com', phone: '345-678-9012', products: ['Tomatoes', 'Cheese'] },
    { id: 10, name: 'Eva', surname: 'Angelina', email: 'eva.angelina@example.com', phone: '567-890-1234', products: ['Juice', 'Butter', 'Eggs', 'Cereal'] }
];
