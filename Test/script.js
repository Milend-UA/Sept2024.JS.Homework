function userFilter(users) {
    let filteredUsers = []; // Создаем массив для отфильтрованных пользователей
    for (let user of users) {
        if (user.age > 30) {
            filteredUsers.push(user); // Добавляем пользователя в массив, если возраст больше 30
        }
    }
    return filteredUsers; // Возвращаем массив отфильтрованных пользователей
}

// Пример массива пользователей
let users = [
    { name: "Alice", age: 28 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 32 },
];

// Вызов функции и сохранение результата в переменной
let result = userFilter(users); // Вызов функции
console.log(result); // Вывод результата в консоль
