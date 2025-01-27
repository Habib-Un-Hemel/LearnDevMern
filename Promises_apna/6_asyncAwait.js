function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather Data");
      resolve("200");
    }, 2000);
  });
}

async function getWeather(){
    await api();
    await api();
}
getWeather();