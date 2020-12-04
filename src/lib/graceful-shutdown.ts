export default function gracefulShutdown(callback: () => void) {
  process.on('SIGINT', function onSigint () {
    console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString());
    callback();
  });
  
  // quit properly on docker stop
  process.on('SIGTERM', function onSigterm () {
    console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString());
    callback();
  })
}

