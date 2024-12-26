const UserName ='Wasim'
let age= 22
var isEmployed = "bhag bhosdike";
isIndian='Or nhi to kya saale';
isGrilfriend='tere jaise nalla thodi hun';

const data ={
    Name: UserName,
    Age: age,
    IsEmployed: isEmployed,
    IsIndian: isIndian,
  Girlfriend: isGrilfriend
};
console.table(data);
console.log("5"-2)
/*
prefeer not to use var as it is not block scoped
and also not to use let as it can be reassigned
and use const as it is block scoped and cannot be reassigned
without const , let and var it will be a global variable which is not a good practice
*/