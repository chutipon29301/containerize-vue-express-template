const { Router } = require('express');
const { asyncifyHandler } = require('../utils/async-handler');
const template = require('./template');
const sensor = require('./sensor');

const router = Router();

router.get(
    '/ping',
    asyncifyHandler(async (_, res) => {
        res.status(200).send('pong');
    }),
);

router.use('/sensor', sensor);

module.exports = router;