/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  const initVal = init;
  return {
    increment: () => {
      return (init = init + 1);
    },
    reset: () => {
      return (init = initVal);
    },
    decrement: () => {
      return (init = init - 1);
    },
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
