function reverseString(str){
let array =str.split("");
array.reverse();
let string = array.join("")
return string;
}

console.log(reverseString("hello there"))
// Do not edit below this line
module.exports = reverseString;
