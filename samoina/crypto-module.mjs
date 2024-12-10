import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import colors from 'colors';

const port = 3000;

const server = createServer((req, res) => {
	if (req.method === 'POST' && req.url === '/password') {
		let data = '';

		//data sent to the server arrives in chunks and .on()is a method that allows us to listen for data being sent to the server. all of the data is stored in the data variable
		req.on('data', (chunk) => {
			data += chunk;
		});

		//when the response is complete, get the PW, validate it nd hash it
		req.on('end', () => {
			const userPassword = JSON.parse(data).password;

			if (!userPassword) {
				res.writeHead(400, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify({ message: 'Password is required' }));
				return;
			}

			if (userPassword.length < 5) {
				res.writeHead(400, { 'Content-Type': 'application/json' });
				res.end(
					JSON.stringify({ message: 'Password must be at least 5 characters' })
				);
				return;
			}

			//Hashing the user password
			//1. createHash uses the sha256 algorithm to hash the password others are like 'sha1', 'md5', etc
			//2. update() takes the password and updates it with the sha256 algorithm
			//3. digest() returns the hashed password specifying that it should be in hex
			const hash = createHash('sha256').update(userPassword).digest('hex');

			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify({ message: 'Password is valid.', hash }));
		});
	} else {
		res.writeHead(404, { 'Content-Type': 'application/json' });
		res.end(JSON.stringify({ message: 'Not found' }));
	}
});

server.listen(port, '127.0.0.1', () => {
	console.log(`Server is running on port ${port}`.yellow);
});
