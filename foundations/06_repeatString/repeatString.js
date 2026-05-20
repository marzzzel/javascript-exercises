let resultaat = "";
let error = "ERROR!"
function repeatString(string, num) {
if (num >0){
for (i=1; i<=num; i++){
    resultaat += string;
  }
  return resultaat; 
} else {
  return error;
}
}

// Do not edit below this line
module.exports = repeatString;
