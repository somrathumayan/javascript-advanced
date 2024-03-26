const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5); // 2 theke 5 er vetorer num thakbe baki gula nai hoye jabe
console.log(part);

const removed = nums.splice(2,5); // 2 theke 5 nai hobe bakigula thakbe
console.log(removed);
console.log(nums);


const together = nums.join("+");  // comma remove kore + sign bosbe
console.log(together);