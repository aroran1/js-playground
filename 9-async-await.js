// Async await - makes it easier to use Promise based code

// 1
const doWork = () => {
  // does nothing function by default return undefined
}
// should log what's returned from the called function - function that doesn't return anything by default return undefined
console.log(doWork()); // returns undefined


// 2
// changing this to async function which by default returns Promise
const doWorkAsync = async() => {
  // does nothing function by default return undefined
}
// should log what's returned from the called function  - async() functions always returns Promise
// async function returns Promise which is fulfilled with value undefined by not explicity returning anything
console.log(doWorkAsync()); // returns Promise { undefined } 


// 3
// changing this to async function which by default returns Promise
const doWorkAsyncVal = async() => {
  // fulfilling the promise with String value by setting the return
  return 'Andy';
}
// should log what's returned from the called function - async() functions always returns Promise
// async function returns Promise which is fulfilled with value Andy by not explicity returning String value
console.log(doWorkAsyncVal()); // returns Promise { 'Andy' }


// 4 async with then / catch
const doWorkAsyncWithThen = async() => {
  // throw new Error('Something went wrong!');
  return 'Andy';
}
doWorkAsyncWithThen().then(val => {
  console.log('val', val);
}).catch(e => {
  console.log('e', e);
});

// with await you can reduce te number of then methods used for Promise Chaining 
// example of teh chained promise methoid but can be use witjout chaining as well
const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        // any failed call will be caught in the error catch function down below
        return reject('non negative numbers required');
      }
      resolve(a + b);
    }, 1000)
  })
};

const doAdd = async () => {
  // with async/await no more chained then with return promise required anymore
  const sum1 = await add(1, -99);
  const sum2 = await add(sum1, 50);
  const sum3 = await add(sum2, 3);
  return sum3; // returns the total to the then below
}

doAdd().then(result => {
  console.log('result', result);
}).catch(e => {
  console.log(e);
})