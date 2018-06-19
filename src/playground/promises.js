const promise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve({
      name: 'Jol',
      age: 29
    });
    // reject('Something went wrong');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log('2', data);
  return 'some data';
}).then((str) => {
  console.log('does this run', str);
}).catch((error) => {
  console.log(error);
});

console.log('after');
