import chalk from 'chalk';
import http from 'http';
import fs from 'fs';

let students = ['daphnée','lucie','maxime','toni']
let chalkColor = ['green','blue','red']

students.forEach(student => {
    let randomColor = chalkColor[Math.floor(Math.random() * chalkColor.length)];
    console.log(chalk[randomColor](student))
})

const server = http.createServer((request, response) => {
    response.end('<h1>Hello World !</h1>')
});

const port = 8000;
const domainName = "localhost"

let path = process.cwd();
let fileContent = "Hello World !";
let fileName = "Hello-World";
let fileExtension = "txt";

fs.writeFile(`${path}\\${fileName}.${fileExtension}`, fileContent, (err) => {
    if (err) console.log(err);
    else {
        console.log("Le fichier a été créer avec succès, le fichier contient : " + fs.readFileSync(`${path}\\${fileName}.${fileExtension}`, "utf8"));
    }
    });

server.listen(port, domainName, () => {
    console.log(`Le serveur tourne sur le port ${port} !`);
})