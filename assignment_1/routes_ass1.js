function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
    if(url === '/')
    {
        //res.setHeader('Content-Type','text/html');
        res.setHeader('Content-Type','');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<h2>This is Assignment 1. Hello Dummy Users!</h2>');
        res.write('<form action="/create-user" method="POST">');
        res.write('<p><input type="text" name="username" /></p>');
        res.write('<p><button type="submit">Submit</button></p>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url ==='/users')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('</ul>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-user' && method === 'POST')
    {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(parsedBody, username);
            
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
}

module.exports = {
    handler: requestHandler,
    notes: 'This is routes for Assignment 1'
}