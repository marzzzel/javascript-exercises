function removeFromArray(arr, ...theArgs){

    for (const arg of theArgs){
    let index = arr.indexOf(arg);
arr.splice(index,1);

}
return arr;
}


// Do not edit below this line
module.exports = removeFromArray;
