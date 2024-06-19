/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
import { readFile } from 'fs';
const fastify = require('fastify')({logger: true});
import cors from '@fastify/cors'; // обновил на @fastify/cors, так как fastify/cors устарел

fastify.register(cors, {});

fastify.get('/', async (request, reply) => {
	readFile('./users.json', 'utf8', (err, data) => {
		if (err) {
			console.log('File read failed:', err);
			return;
		}

		if (request.query.term) {
			const result = JSON.parse(data).filter(elem => elem.name.toLowerCase().includes(request.query.term.toLowerCase()));
			reply.send(result);
		} else {
			reply.send(data);
		}
	});
});

const start = async () => {
	try {
		await fastify.listen(3000);
		console.log(`Server listening at http://localhost:3000`);
	} catch (err) {
		fastify.log.error(err);
		// eslint-disable-next-line no-undef
		process.exit(1);
	}
};

start();
