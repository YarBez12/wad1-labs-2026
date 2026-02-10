'use strict'

import express from 'express';
import router from './routes.js'
import logger from "./utils/logger.js";
import { create } from 'express-handlebars';

const app = express();
const port = 3000;

const handlebars = create({extname: '.hbs'});
app.engine('.hbs', handlebars.engine);
app.set("view engine", ".hbs");

app.use("/", router);

app.listen(port, () => logger.info(`Express app running on port ${port}!`))