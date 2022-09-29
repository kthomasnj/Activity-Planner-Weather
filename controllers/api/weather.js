const router = require('express').Router();
const axios = require('axios');
const path = require('path');

// var currentCity="Chicago";
// var url="https://api.openweathermap.org/data/2.5/weather?q="+currentCity+"&appid=bafc9bc5cbe15365eb44950399041328";



// axios.get(url)
//     .then((res)=> {getData(res)})
//     .catch((err)=> console.log(err))


// function getData (data){
//         return (data);
// }


router.get('/', async (req, res) => {
    try {
      //const data = await getData();
      res.status(200).json({"X":"Y"});
      console.log("hello");
    } catch (err) {
      res.status(500).json('it worked', err);
    }
  });
  
  
  module.exports = router;