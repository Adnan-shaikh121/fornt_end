
// leetcode=document.getElementById("leetcode")

// leetcode.innerHTML=(
// /**
//  * @param {number} millis
//  */
// async function sleep(millis) {

//     return new Promise((resolve) => {
  
//       setTimeout(() => {
//         resolve(millis);
//       }, millis);
//     });
//   }
  
//   /** 
//    * let t = Date.now()
//    * sleep(100).then(() => console.log(Date.now() - t)) // 100
//    */)/

async function sleep(millis) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(millis);
      }, millis);
    });
  }
  
  let t = Date.now();
  sleep(100)
    .then(() => {
      const elapsedTime = Date.now() - t;
      document.getElementById("leetcode").innerHTML = `Elapsed time: ${elapsedTime}ms`;
    });
  