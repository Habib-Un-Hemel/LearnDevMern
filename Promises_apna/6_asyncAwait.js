function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather Data");
      resolve("200");
    }, 2000);
  });
}

async function getWeather() {
  await api();
  await api();
}
// getWeather();

//task2
function getData(getID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data", getID);
      resolve("Success");
    }, 2000);
  });
}

async function dataGetting() {
  await getData(1);
  await getData(2);
  await getData(3);
}
dataGetting(); 