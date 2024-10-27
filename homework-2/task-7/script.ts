const array : unknown[] = [1, 2, 'goods', 'bottle', true];
function reverseArray(arr : unknown[]) : unknown[] {
    return arr.reverse();
}
const reversedArr : unknown[] = reverseArray(array);
console.log(array === reversedArr);