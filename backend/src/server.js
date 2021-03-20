const app = require('./app');
const { connect, connection } = require('./connection');

async function main() {
    // try {
    //     await connect()
    //     connection.query(`
    //         CREATE TABLE IF NOT EXISTS SensorValue (
    //             id INT NOT NULL AUTO_INCREMENT,
    //             timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    //             value INT NOT NULL,
    //             PRIMARY KEY (id)
    //         );
    //     `)
    // } catch (error) {
    //     console.log(error);
        // console.log("Retry connecting to database");
        // setTimeout(() => {
        //     main();
        // }, 5000);
    // }

    app.listen(app.get('port'), () => {
        console.log(`Listening on port ${app.get('port')}`);
    });
}

main();