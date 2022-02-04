import config from "../config/default";
import express, { Express } from "express";
import log from "../logger";
import routes from "../routes/user.router";


const port = config.port as number;
const host = config.host as string;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', routes);

export async function connectServer() {
   return new Promise<Express>((resolve, reject) => {
        app.listen(port, async () => {
            log.info(`Server listing at http://${host}:${port}`);
            resolve(app);
        }).on('error', (error) => reject(error));
    });
};