const http = require('http');

const port = 3000;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const currentDate = new Date();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify({ Date: currentDate.toISOString() }));
    } else if (req.url === '/hello') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
})

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}/`);
});


