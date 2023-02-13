const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World! NodeJS</h1>');
    res.end()
});

server.listen(3000, 'localhost', () =>{
    console.log('Learning Node JS');
})