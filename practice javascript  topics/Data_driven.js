// const colorHexCode = {
//     "red":"#FF0000",
//     "green":"#00FF00",
//     "blue":"#0000FF",
//     "yellow":"#ffff00",
//     "purple":"#800080"
// }
// function getColorHex(colorName) {
//     return colorHexCode[colorName];
// }
// console.log(getColorHex("red"));    
// console.log(getColorHex("green"));   
// console.log(getColorHex("cyan"));   
// console.log(getColorHex("unknown"));


// Traditional:

// Your turn - with functions as values!
// const operations = {
//   "add":function(a,b){ return a+b},
//   "subtract":function(a,b){ return a-b},
//   "multiply":function(a,b){ return a*b},
//   "divide":function(a,b){ if(b===0){
//     return "Division by Zero error"
//   }else{ return a/b}},
// };

// function calculateClean(a,b,operation) {
//     return operations[operation](a,b);
// }

// console.log(calculateClean(10, 5, "add"));
// console.log(calculateClean(10, 5, "multiply")); 
// console.log(calculateClean(0, 10, "divide")); 


// javascrip.info excercise filter method
// let arr = [5, 3, 8, 1];

// const filterRange =(arr,a,b) =>{
//    return arr.filter((el) => { return (el >= a) && (el <= b)})
// };

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); 
// console.log( arr );

// javascript.info toSorted method 

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {  return arr.toSorted()}

let sorted = copySorted(arr);

console.log( sorted ); 
console.log( arr ); 