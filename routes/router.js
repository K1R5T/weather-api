const {Router} = require('express');
const router = Router();

const getWeather = require('../lib/getWeather');

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/', async(req, res) => {
    let city = req.body.city;
    let code = req.body.code;
    
    let data = await getWeather(city, code);
    console.log(data);
    
    if (data.code == "404") {
        res.render('index', {error: data.message});
        return;
    }
    
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let wind = data.wind.speed;
    let humidity = data.main.humidity;


    res.render('index', {data:{city, code, description, temp, wind, humidity}});
});



module.exports = router;