//Promise
const weatherPromise = new Promise((resolve, reject) => {
  resolve();
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
      wetherInfo.innerText = `Cureent temperature in ${city} is ${data.current.temp_c} degree celcius`;
    })
    .catch((err) => {
      console.log(err);
    });
}
