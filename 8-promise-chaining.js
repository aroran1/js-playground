// Promise Chaining

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000)
  })
}

// 1- simple promise example
add(1,2).then(sum => {
  console.log('1 = ', sum);
}).catch(e => {
  console.log(e);
})

// 2 - chained methods to get the results same nested as callbacks
add(1,2).then(sum => {
  console.log('2.1 = ', sum);

  // using sum to add another number
  // ie, chaining methods causes repition of code
  add(sum, 5).then(sum2 => {
    console.log('2.2 = ', sum2);
  }).catch(e => {
    console.log(e);
  })

}).catch(e => {
  console.log(e);
})


// 3 - Opimised solution - Promise Chaining
// This is promise chaing as the first then method returns the promise
// which is received by the second then and so on
// the good this about this approach is the code doesn't have to be nested
add(1,1).then(sum => {
  console.log('3.1 = ', sum);

  // return the promise from here
  // and add additional .then() method outside
  return add(sum, 4)
}).then(sum2 => {

  console.log('3.2 = ', sum2);
}).catch(e => {
  console.log(e);
})