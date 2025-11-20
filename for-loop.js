// For Loop
/*
for(i = 1; i<=5 ; i++ ){
    // console.log(i);
    output += i + " ";
   
}
*/
//console.log(output);


// Arrays
/*
output = " ";
arr = [1,2,3]

for(index =0; index <arr.length; index++){
    //console.log(arr[i]);
    output += arr[index]  + " ";
}

console.log(output);

*/

output = " ";
arr = [1,2,3]
console.log("Array length: "+ arr.length);

for(index = arr.length -1; index>=0; index--){
    //console.log(arr[index]);
    output += arr[index]  + " ";
}

console.log(output);