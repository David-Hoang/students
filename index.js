import chalk from 'chalk';

let students = [
    'daphnée',
    'lucie',
    'maxime',
    'toni'
]

let chalkColor = [
    "green",
    "blue",
    "red",
]

students.forEach(student => {
    let randomColor = chalkColor[Math.floor(Math.random() * chalkColor.length)];
    console.log(chalk[randomColor](student))
})
