let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const newArr = coursesAndDurationArray.map((currentElement, index) => ({
    id: index + 1,
    title: currentElement.title,
    monthDuration: currentElement.monthDuration
}));

console.log(newArr);
