import * as http from 'http';
import gracefulShutdown from './lib/graceful-shutdown';

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end('Hello world!');
});

server.listen(PORT, () => {
  console.log('server started at port:', PORT);
});

gracefulShutdown(() => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  });
});
