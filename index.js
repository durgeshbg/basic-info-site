const fs = require('fs');
const http = require('http');

http
  .createServer((req, res) => {
    const paths = ['/index', '/about', '/contact-me'];

    let path = req.url === '/' ? '/index' : req.url;
    
    if (!paths.includes(path)) path = '/404';

    fs.readFile('.' + path + '.html', (err, data) => {

      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        console.error(err);
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });

  })
  .listen(8080);
