const https = require('http');

const server = https.createServer((req, res) => {
    if (req.url === '/') {
        res.end("HELLO NODE");
    }
    else if (req.url === '/about') {
        res.end("HEY abouts WHATS UP NODE");
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Cant find the page</p>
    <a href="/">Back Home</a>
    `)
});
server.listen(5000);