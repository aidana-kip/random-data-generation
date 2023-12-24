const express = require('express');
const cors = require('cors');
const { router } = require('./router/router');

const app = express();
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use((req, res, next) => res.status(404).send('Resource not found'));
app.listen(process.env.PORT || 3001);