const { Router } = require('express');
const { asyncifyHandler } = require('../utils/async-handler');
const { connection } = require('../connection');

const router = Router();

router.get(
    '',
    asyncifyHandler(async (_, res) => {
        try {
            const result = await new Promise((resolve, reject) => {
                connection.query(`
                    SELECT * FROM SensorValue;
                `, (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                });
            })
            res.status(200).send(result)
        } catch(error) {
            res.status(500).send(error)
        }
    }),
);

router.post(
    '',
    asyncifyHandler(async (req, res) => {
        try {
            const result = await new Promise((resolve, reject) => {
                connection.query(`
                    INSERT INTO SensorValue (value) VALUES (?)
                `, req.body.value, (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                });
            });
            res.sendStatus(201);
        } catch(error) {
            res.status(500).send(error);
        }
    })
)

module.exports = router;