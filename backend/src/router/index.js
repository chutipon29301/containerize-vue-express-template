const { Router } = require('express');
const { asyncifyHandler } = require('../utils/async-handler');

const router = Router();

router.get(
    '/ping',
    asyncifyHandler((req, res) => {
        res.status(200).send('pong');
    }),
);

module.exports = router;