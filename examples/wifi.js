
const { Wifi } = require('../src/index');

async function init () {
    const wifi = new Wifi({
        verbose: true
    });

    await wifi.connect({ ipAddress: '192.168.4.1' });
    await wifi.start();

    wifi.stream.subscribe(sample =>
        console.log('sample', sample)
    );
}

init();
