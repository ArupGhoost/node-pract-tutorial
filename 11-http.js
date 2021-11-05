const http = require('http');
const { runInNewContext } = require('vm');

const server = http.createServer((req, res) => {
     if(req.url === '/'){
         res.end('This is Home Page');
     }
     if(req.url === '/about'){
         res.end('This is About Page');
     }
     res.end(`
     <h1>This Error Page</h1>
     <p>To get back to home page click Below</p>
     <a href='/'>Back</a>
     `)
});

server.listen(5000);