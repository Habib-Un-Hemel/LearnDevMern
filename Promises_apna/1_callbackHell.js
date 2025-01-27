// suppose database theke data aste late hoitese 2sec
function getData(getId) {
  //2 sec delay
  setTimeout(() => {
    console.log("Data:", getId);
  }, 2000);
}
// getData(213);
// +++++++++++++++++++++++++++++++++++++++++++


//task2: 2bar call
//  create a code where after getting a data , i need to wait for 2 sec then will get another data
function getData2(getId, getNextData) {
  setTimeout(() => {
    console.log("Data:", getId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
////callback diye solve korlam
// getData2(1, ()=>{
//     getData2(2);
// });
// +++++++++++++++++++++++++++++++++++++++++++
//task3: 4bar call
function getData2(getId, getNextData) {
  setTimeout(() => {
    console.log("Data:", getId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}
//callback hell or nested callback
getData2(1, () => {
  console.log("getting data2.......");
  getData2(2, () => {
    console.log("getting data3.......");
    getData2(3, () => {
      console.log("getting data4.......");
      getData2(4);
    });
  });
});
// +++++++++++++++++++++++++++++++++++++++++++
