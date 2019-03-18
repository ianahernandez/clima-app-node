const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encondeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encondeUrl}`,
        headers: { 'X-RapidAPI-Key': 'a8c2220606msh1c1ce21fc5c742dp1f7269jsn89e24e11c0f8' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) throw new Error(`No se encontraron datos pàra "${dir}"`)

    const data = resp.data.Results[0];

    const { name: direccion, lat, lon: long } = data;
    // const direccion = data.name;
    // const lat = data.lat;
    // const long = data.lon;

    return {
        direccion,
        lat,
        long
    }
}

module.exports = {
    getLugarLatLong
}