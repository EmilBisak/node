const http = require("http");
const fs = require("fs");
const express = require("express");



const { getRandomString } = require('./shared.js'); // prvi nacin
const data = require('./data.js'); // drugi nacin

let content = fs.readFileSync('./imena.txt', 'utf8');
let names = content.split(", ");

console.log(content);


// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("Hello World ");
//     res.end(
//         `<!DOCTYPE html>
//           <html lang="en">

//           <head>
//               <meta charset="UTF-8">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <meta http-equiv="X-UA-Compatible" content="ie=edge">
//               <title>Node Server</title>
//           </head>

//           <body>
//               <h1>${getRandomString(names)}</h1>

//               <h2>Bobic ${getRandomString(data.randomString)}</h2>


//           </body>

//           </html>
//           `
//     );
// }).listen(8080)


const app = express();

// app.get('/hello', (req, res) => {
//     res.send("Hello")
// })
// app.get('/',(req, res) => res.send(getRandomString(names)))

// app.listen(8080)


app.get('/hello', (req, res) => res.send("Hello"))
    .get('/', (req, res) => res.send(getRandomString(names)))
    .listen(8080)