const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Nodejs HTML</title></head>')
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form> ');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(parsedBody);
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node JS Page</title></head>');
    res.write('<body>');
    res.write('<h2>My First Node JS page is here!</h2>');
    res.write('</body>');
    res.write('<html>');
}

//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: `Hard Coded Handler`
// }

module.exports.handler = requestHandler;
module.exports.someText = `Hard Coded Handler`;