// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// var x1 = "123";
// var x2 = 7;
// console.log(+x1 + x2);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// var x = 0;
// x ? console.log("true") : console.log("falsy");

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Create an array of numbers and return only the even numbers using filter method.

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.filter((ele) => {
//   if (ele % 2 === 0) {
//     console.log(ele);
//   }
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Use the spread operator to merge two arrays, then return the merged array.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const res = [...arr1, ...arr2];
// console.log(res);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday ...., 7 = Saturday).

// let x = 2;

// switch (x) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;

//   default:
//     console.log("Saturday");
//     break;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Create an array of strings and return their lengths using map method

// const arr = ["a", "ab", "abc"];
// const output = arr.map((ele) => ele.length);
// console.log(output);

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Write a function that checks if a number is divisible by 3 and 5.

// let x = 14;

// if (x % 3 == 0 && x % 5 == 0) {
//   console.log("Divisible by both");
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 9. Write a function using arrow syntax to return the square of a number

// let output = (x) => {
//   return x * x;
// };
// console.log(output(4));
// console.log(output(5));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 10.Write a function that destructures an object to extract values and returns a formatted string.

// const person = { name: "John", age: 25 };

// function dest(obj) {
//   let { name, age } = obj;
//   return `${name} is ${age} years old`;
// }

// console.log(dest(person));

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum.

// function sum(...x) {
//   return x.reduce((sum, ele) => sum + ele);
// }

// console.log(sum(1, 2, 3, 4, 5));

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.

// function proooo() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 3000);
//   });
// }

// proooo()
//   .then((message) => console.log(message))
//   .catch((error) => console.log(error));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 13. Write a function to find the largest number in an array.

// let arr = [1, 3, 7, 2, 4];

// function MaxNum(arr) {
//   return arr.reduce((max, cur) => (cur > max ? cur : max));
// }

// console.log(MaxNum(arr));

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 14. Write a function that takes an object and returns an array containing only its keys.

// const x = { name: "John", age: 30 };

// function sayed(obj) {
//   console.log(Object.keys(obj)); //keys
//   console.log(Object.values(obj)); //values
//   console.log(Object.entries(obj)); //Keys and Values
// }
// sayed(x);

//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////   Bonus [LetCode]  //////////////////////////////////////////////////////////////

// var createCounter = function (init) {
//   const initVal = init;
//   return {
//     increment: () => {
//       return (init = init + 1);
//     },
//     reset: () => {
//       return (init = initVal);
//     },
//     decrement: () => {
//       return (init = init - 1);
//     },
//   };
// };

// const counter = createCounter(5);

// console.log(counter.increment());
// console.log(counter.reset());
// console.log(counter.decrement());

// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
