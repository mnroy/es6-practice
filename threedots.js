// const class6Age = [12, 13, 14, 15, 16, 17];
// const class7Age = [22, 23, 24, 25, 26, 27];
// const class8Age = [34, 35, 36, 37, 38, 39];
// const addAge = class6Age.concat(class7Age).concat(class8Age).concat([9]);
// console.log(addAge);

//next upai
const class6Age = [12, 13, 14, 15, 16, 17];
const class7Age = [22, 23, 24, 25, 26, 27];
const class8Age = [34, 35, 36, 37, 38, 39];

const addclassAge = [...class6Age, ...class7Age, 90, ...class8Age];
console.log(addclassAge);

//max number
const jesonDeo = 200;
const jastin = 500;
const neimar = 300;

const numberMax = Math.max(jesonDeo, jastin, neimar);
console.log("highest number: ",  numberMax);

// arrey max amount
const amount = [444, 555, 333, 222, 900, 324,];
const highestAmount = Math.max(...amount);
console.log("highest Amount is: " , highestAmount);



