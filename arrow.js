// function dubleIt(num){
//     return num*2;
// }
// const result = dubleIt(10);
// console.log(result);

// const dubleIt = function(num){
//     return  num*2;
// }
// const result = dubleIt(100);
// console.log(result);

// arrow function
const dubleIt = num =>num * 2;
const result = dubleIt(30);
console.log(result);

// add function
const add = (number1, number2)=> number1 + number2;
const result2 = add(100, 200);
console.log(result2);

// give30
const give = () =>30;
const result3 = give();
console.log(result3);

//do math
const doMath = (x, y) =>{
    const sum = x + y;
    const dff = x - y;
    const result = sum * dff;
    return result;
}
const result4 = doMath(7, 5);
console.log(result4);