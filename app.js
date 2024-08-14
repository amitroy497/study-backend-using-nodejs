const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
});

server.listen(3000, () => {
	console.log('Server is running on port 3000');
});
