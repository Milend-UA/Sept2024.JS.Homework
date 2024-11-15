// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
for (let i = 1; i <= 10; i++) {
    let user = new User(i, `Вася${i}`, `Пупкiн${i}`,
        `мило${i}@гугле.com`, `123-456-789 + ${i}`);
    users.push(user);
}
console.log(users);