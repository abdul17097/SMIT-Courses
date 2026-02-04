// Promises

let flag = true;

let myPromise = new Promise((reslove, reject) => {
  if (flag) {
    reslove("Data Fetched Success!");
  } else {
    reject("Error:");
  }
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise Completed");
  });
