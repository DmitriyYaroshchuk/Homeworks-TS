"use strict";
const array = [1, 2, 'goods', 'bottle', true, undefined, null];
console.log('before: ', array);
function reverseArray(arr) {
    return arr.reverse();
}
console.log('after: ', reverseArray(array));
console.log('finally: ', array);
console.log(Array.prototype);
//# sourceMappingURL=script.js.map