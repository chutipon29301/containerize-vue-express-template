const app = require('./app');

async function main() {
    app.listen(app.get('port'), () => {
        console.log(`Listening on port ${app.get('port')}`);
    });
}

main();