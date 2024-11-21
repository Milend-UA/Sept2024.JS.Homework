// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let newDiv = document.createElement('div');
//
// newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// newDiv.style.backgroundColor = 'lightblue';
// newDiv.style.color = 'darkblue';
// newDiv.style.fontSize = '20px';
// newDiv.style.padding = '20px';
// newDiv.style.border = '1px solid black';
// newDiv.style.marginBottom = '20px';
// newDiv.style.width = '300px';
// newDiv.style.height = '150px';
// newDiv.style.display = 'flex';
// newDiv.style.justifyContent = 'center';
// newDiv.style.alignItems = 'center';
//
// newDiv.innerText = 'This is a new div';
//
// document.body.appendChild(newDiv);
//
// let clonedDiv = newDiv.cloneNode(true);
// document.body.appendChild(clonedDiv);

// Solution #2

let newDiv = document.createElement('div');

newDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');

let styles = {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    fontSize: '20px',
    padding: '20px',
    border: '1px solid black',
    marginBottom: '20px',
    width: '300px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

for (let value in styles) {
    newDiv.style[value] = styles[value];
}

newDiv.innerText = 'This is a new div';

document.body.appendChild(newDiv);

let clonedDiv = newDiv.cloneNode(true);
document.body.appendChild(clonedDiv);


// #OPLI89c9G
// - Є масив:
// ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен у своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];
let ul = document.createElement('ul');
arr.forEach((arrElement) => {
    const li = document.createElement('li');
    li.textContent = arrElement;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {title: 'Java Complex', monthDuration: 6}, {
    title: 'Python Complex',
    monthDuration: 6
}, {title: 'QA Complex', monthDuration: 4}, {title: 'FullStack', monthDuration: 7}, {title: 'Frontend', monthDuration: 4}];

for (let course of coursesAndDurationArray) {
    let box = document.createElement('div');
    box.style.border = '1px solid black';
    box.style.padding = '10px';
    box.style.marginBottom = '10px';
    box.style.textAlign = 'center';
    box.style.width = '300px';
    box.style.height = '150px';
    let title = document.createElement('h3');
    title.textContent = course.title;
    let duration = document.createElement('p');
    duration.textContent = `Duration: ${course.monthDuration} months`
    box.appendChild(title);
    box.appendChild(duration);
    document.body.appendChild(box);
}


// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {title: 'Java Complex', monthDuration: 6}, {
    title: 'Python Complex',
    monthDuration: 6
}, {title: 'QA Complex', monthDuration: 4}, {title: 'FullStack', monthDuration: 7}, {title: 'Frontend', monthDuration: 4}];

let container = document.createElement('div');
container.className = 'wrapper';
for (let course of coursesAndDurationArray) {
    let box = document.createElement('div');
    box.classList.add('item');
    box.style.border = '1px solid black';
    box.style.padding = '10px';
    box.style.marginBottom = '10px';
    box.style.textAlign = 'center';
    box.style.width = '300px';
    box.style.height = '150px';
    let title = document.createElement('h1');
    title.classList.add('heading');
    title.textContent = course.title;
    let duration = document.createElement('p');
    duration.classList.add('description');
    duration.textContent = `Duration: ${course.monthDuration} months`;
    container.appendChild(box);
    box.appendChild(title);
    box.appendChild(duration);
}
document.body.appendChild(container);






