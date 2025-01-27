//api will give me promise ....
function asyncFun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 4000);
  });
}
//my task
console.log("fetching data1.......");
let p1 = asyncFun1();
p1.then((res) => {
  console.log(res);
});
