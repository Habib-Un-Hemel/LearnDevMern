//api will give me promise ....
function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 4000);
  });
}
//my task
// console.log("fetching data1.......");
// let p1 = asyncFun1();
// p1.then((res) => {
//   console.log(res);
// });
// //my task
// console.log("fetching data2.......");
// let p2 = asyncFun2();
// p2.then((res) => {
//   console.log(res);
// });

/*
output:
            fetching data1.......
            fetching data2.......
            Data1
            success
            Data1
            success
*/

//task2 Promise chainning ++++++++++++++++ one then , abr then
console.log("fetching data1.....")
asyncFun1().then((res)=>{
    console.log("fetching data2.....");
    asyncFun2().then((res)=>{
    });
})
