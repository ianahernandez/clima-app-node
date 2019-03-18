const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=26a0e69be1e88f0787140de3f4ea3dd4&units=metric`)
    return resp.data.main.temp
}


module.exports = {
    getClima
}