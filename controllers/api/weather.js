const router = require('express').Router();
const axios = require('axios');
const path = require('path');
require('dotenv').config();

var DATA=[];

var currentCity="Chicago";
var url1="https://api.openweathermap.org/data/2.5/weather?q="+currentCity+"&appid="+process.env.APIKEY;



axios.get(url1)
    .then((res)=> {getData(res)})
    .catch((err)=> console.log(err))



function getData (res){

       var data=res.data;
       var lat=data.coord.lat;
       var long=data.coord.lon;
       getForecastData(lat,long)

}

function getForecastData(lat,long){
  var url2="https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+long+"&appid="+process.env.APIKEY;
  axios.get(url2)
      .then((res)=> {printForecastData(res)})
      .catch((err)=> console.log(err))
}

function printForecastData(res){
    for(var i=0;i<6;i++){
    weatherDesc=res.data.daily[i].weather[0].description;
    weatherAvgTemp=(res.data.daily[i].temp.max+res.data.daily[i].temp.min)/2;

    weatherAvgTemp=Math.round(1.8*(weatherAvgTemp-273)+32);

    DATA.push([weatherDesc,weatherAvgTemp]);
    }
}


router.get('/', async (req, res) => {
    try {
      //const data = await getData();
      res.status(200).json({DATA});
    } catch (err) {
      res.status(500).json('it did not work', err);
    }
  });
  
  
  module.exports = router;