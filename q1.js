/*Take the number N and the name from the user as inputs, and print the name N times.
*/


const input= require("readline-sync")
let n=input.questionInt("enter the number")

let i = 1;
let c = "riya"
while(i<=n){
    console.log(c);
    i=i+1;
}

// let numberOfDays = parseInt(prompt("Enter the number of days:"));
// let temperatures = [];

// // Input temperatures
// for (let i = 0; i < numberOfDays; i++) {
//     temperatures.push(parseFloat(prompt("Enter temperature for day " + (i + 1) + ":")));
// }

// // Find highest and lowest temperatures
// let highestTemperature = temperatures[0];
// let lowestTemperature = temperatures[0];

// for (let i = 1; i < temperatures.length; i++) {
//     if (temperatures[i] > highestTemperature) {
//         highestTemperature = temperatures[i];
//     }
//     if (temperatures[i] < lowestTemperature) {
//         lowestTemperature = temperatures[i];
//     }
// }

// // Output results
// console.log("Highest temperature recorded: " + highestTemperature);
// console.log("Lowest temperature recorded: " + lowestTemperature);
