// object destructuring

// const person = {
//   name: 'Jol',
//   age: 30,
//   location: {
//     city: 'Canberra',
//     temp: -1
//   }
// };
//
// // const name = person.name;
// // const age = person.age;
// const {name: firstName = 'Anonymous', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
//
// const {city, temp: temperature} = person.location;
// if (city && temperature){
//   console.log(`It's ${temperature} in ${city}.`);
// }

//
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
//
// const {name: publisherName = 'Self-Published'} = book.publisher;
//
// console.log(publisherName);


// array destructuring

const address = ['26 Weld Street', 'Canberra', 'ACT', '2600'];

const [, city, state = 'NSW'] = address;

console.log(`You are in ${state}.`);

const item = ['coffee', '$2.00', '$2.50', '$2.75'];

const [coffee, , medium] = item;

console.log(`A medium ${coffee} costs ${medium}.`);
