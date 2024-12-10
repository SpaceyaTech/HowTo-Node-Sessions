import { createServer } from 'node:http';
import os from 'node:os';
import colors from 'colors';

const port = 3000;

const server = createServer((req, res) => {
	console.log('Request received');
	res.writeHead(200, {
		'Content-type': 'text/plain',
	});
	res.end(`Hello there, your operating system is ${os.platform()}`);
});

server.listen(port, '127.0.0.1', () => {
	console.log(`Server is running on port ${port}`.yellow);
	console.log(`Hello there, your operating system is ${os.platform()}`);
});


