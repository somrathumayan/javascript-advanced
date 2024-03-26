const num = [1,2,3,4,5,6,7,8,9];
const result = num.map(x => x * x); // to square array values
console.log(result); 

const result2 = num.filter(x => x > 5); // to search some numbers.. which are greater than 5
console.log(result2);

const resul3 = num.find(x => x > 5); // to search just a number
console.log(resul3);