function getData(getID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting data", getID);
      resolve("Success");
    }, 2000);
  });
}

// async function dataGetting() {
//   await getData(1);
//   await getData(2);
//   await getData(3);
// }
// dataGetting();

(async function () {
  await getData(1);
  await getData(2);
  await getData(3);
})();
