// promise vs callbacks

// callback example
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my fetch error!', undefined);
    callback(undefined, [1, 2, 3]);
  }, 1000);
}

doWorkCallback((error, response) => {
  if(error) {
    return console.log(`CB ${error}`);
  }
  console.log(`CB - ${response}`);
});

// Promise example
const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('Reject error!');
    resolve([7,8,9]);
  }, 2000);
});

doWorkPromise.then((result) => {
  console.log(`Promise Success - ${result}`);
}).catch((err) => {
  console.log(`Promise Error - ${err}`);
});

// Benefits
// 1. Promise has to seperate methods resolve and reject which makes the code easier to 
// understand but with callback method we have to rely on the order of the arguments passed 
// to the callbacl function.

// 2. Once the async task is finished developer has to handle error / response correctly in the
// function but with promises we have 2 seperate function availabel to us and only 1 will run based on
// if the promise is resolved or rejected

// 3. Promises only allow either reject or resolve to be called and they can't be called twice.
// Even if you try promise will only accept the first call and will igmore the rest. With CB you can 
// call a method twice or can also call bpth methods, there are no rules.

//                                
//                              ----- = fulfilled
//                            /
//  Promise   ----- = Pending 
//                            \
//                              ----- = rejected
//