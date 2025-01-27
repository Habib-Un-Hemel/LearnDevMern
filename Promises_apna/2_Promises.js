/*
1. promise is a object
2. promise is for eventual completion of task
3. solve the callback hell
4. we dont create promise, api will give us promise, we only deal with it
5. promise has 3 state -> pending , resolved, rejected
6. promise take function with 2 handler(resolve and reject)
7. resolve and reject are callback provided by JS
*/

//task1: promise create (which is not out task)
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("success");
// });

//task2:
//  we will get data from api and we will handle it
// storyLine: Api will istant give me a promise, pending, after 2 sec => reject or resolve with success message
function getData(getID, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", getID);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 2000);
  });
}
getData(1000);



//task3: resolve and reject korai thake, now amra dekhbo amra kaaj korbo
//fullfill hoile then and reject korle  catch use 

//promise function aghe theke created by others

const getPromise= ()=>{
    return new Promise((resolve, reject)=>{
        console.log("I am promise");
        resolve("Solved ")
        // reject("error too many")
    });
}

let promise = getPromise();
promise.then((res)=>{
    console.log("then", res);
});
promise.catch((err) => {
  console.log("then", err);
});