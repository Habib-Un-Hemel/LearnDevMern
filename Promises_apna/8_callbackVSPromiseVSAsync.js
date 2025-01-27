function getData2(getId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", getId);
      resolve("Success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}
//callback hell or nested callback
// console.log("getting data1.......");
// getData2(1, () => {
//   console.log("getting data2.......");
//   getData2(2, () => {
//     console.log("getting data3.......");
//     getData2(3, () => {
//       console.log("getting data4.......");
//       getData2(4);
//     });
//   });
// });

// ++++++++++++++++++++++++++++++++++++
function getData1(getId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data:", getId);
      resolve("Success");
    }, 2000);
  });
}
//promise chainning
// getData1(1).then((res) => {
//   console.log(res);
//   getData1(2).then((res) => {
//     console.log(res);
//   });
// });

// //exual promise chainning syntax
// console.log("getting data1.......");
// getData1(1)
//   .then((res) => {
//     console.log("getting data2.......");
//     return getData1(2);
//   })
//   .then((res) => {
//     console.log("getting data3.......");
//     return getData1(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });



  async function dataGetting() {
    await getData1(1);
    await getData1(2);
    await getData1(3);
  }
  dataGetting(); 