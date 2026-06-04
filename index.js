//Promise
const weatherPromise = new Promise((resolve, reject) => {
  resolve(true);
  reject(false);
});
console.log(weatherPromise);
//.then excutes fullfiled
//.catch excutes rejected
weatherPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//JSON Object
const user = {
  name: "Ammar",
  age: "16",
  city: "Lahore",
};
const userJSON = JSON.stringify(user);
//JSON String Format
console.log(userJSON);
//Simple object format
console.log(JSON.parse(userJSON));

//dynamic string
//bactics
function getWeather() {
  const cityRef = document.getElementById("cityName");
  const city = cityRef.value;
  console.log(city);
  const weatherRes = fetch(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`,
  );
  weatherRes
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const wetherInfo = document.getElementById("weatherResult");
      wetherInfo.innerText = `Cureent temperature in ${city} is ${data.current.temp_c} degree celcius.
      feels like in ${city} is ${data.current.feelslike_c} degree ceclcius 
      WindChill  in ${city} is ${data.current.windchill_c} degree celcius, 
      HeatIndex in ${city} Is ${data.current.heatindex_c} degree celcius, 
      Speed of wind in ${city} is ${data.current.wind_kph} Km/h, 
      Direction of Wind in ${city} is ${data.current.wind_degree} degree, 
      Chance of rain in ${city} is ${data.current.chance_of_rain}%, 
      Chance of snow in ${city} is ${data.current.chance_of_snow}%`;
    })
    .catch((err) => {
      console.log(err);
    });
}
