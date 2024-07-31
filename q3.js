/*Write a program to print the sum of odd numbers up to N.
*/


const input = require("readline-sync")
let n=input.questionInt("enter the number")

let i=1;
let sum=0;
while(i<=n){
    if(i%2!==0){
        sum=sum+i;
    }
    i=i+1;
}
console.log(sum);