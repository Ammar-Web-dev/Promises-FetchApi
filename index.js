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
      wetherInfo.innerHTML = `
      <div class="weathercard">
      <h3>${city}</h3>
      <p> Temperature: ${data.current.temp_c}°C </p>
      <p> Feels Like: ${data.current.feelslike_c}°C </p>
      <p> Wind Speed: ${data.current.wind_kph}km/h </p>
      <p> Wind Direction: ${data.current.wind_degree}°</p>
      <p> Chance of Rain: ${data.current.chance_of_rain}%</p>
      <p> Chance of Snow: ${data.current.chance_of_snow}%</p>
      </div>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
}
