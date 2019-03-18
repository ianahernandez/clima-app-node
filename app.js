const lugar = require('./lugar/lugar.js')

const clima = require('./clima/clima.js')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima'
    }
}).argv;

// lugar.getLugarLatLong(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.long);

        return `El clima de ${coordenadas.direccion} es de ${temperatura}`;
    } catch (error) {
        throw new Error(`No se pudo determinar el clima de ${direccion}`);
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)