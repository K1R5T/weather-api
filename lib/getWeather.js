const fetch = require('node-fetch');

const getWeather = async (city, code) => {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&units=metric&appid=${process.env.APPID}`);
    
    return await data.json();
}

module.exports = getWeather;