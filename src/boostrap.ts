import log from './logger';
import connectMongo  from './client/mongoose';
import { connectServer } from './client/express';


(async () => {
  try {
    await connectMongo();
    await connectServer();
    log.info('Prueba: Connected')
  } catch (e) {
    log.error('Prueba: Process exit with fail');
    process.exit(-1);
  }
})();
