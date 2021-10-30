const person = {name: "Jon Smrith", Phone: 01500334454, Address: "indea", GfName: "jeson lery", Favourit: "Pizza", BestFriend : ["jasten", "minar", "neimar", "mesi"]};

// const address = person.Address;
// const gfName = person.GfName;

const {Phone, Favourit, GfName, Address} = person;
console.log(Phone, Favourit, GfName, Address);

const superStar = ["sakib Khan","amir Khan", "salman Khan", "saruk khan", "arman khan"];
const [firstName, ...next] = superStar;
console.log(firstName, ...next);