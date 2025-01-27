function getData(getID) {
//2 sec delay
  setTimeout(()=>{
    console.log("Data:", getID)}, 2000);
}
getData(123);
