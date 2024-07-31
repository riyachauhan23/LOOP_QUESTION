/*Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N
*/


const input=require("readline-sync")
let n=input.questionInt("enter the number")

let i=1;
let sum=0;
while(i<=n){
    sum=sum+1/i;
    i=i+1;
}
console.log(sum);