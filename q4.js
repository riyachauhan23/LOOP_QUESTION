/*Write a program to take two integers M, and N and print the sum of numbers in the range M to N.
*/


const input=require("readline-sync")
let m=input.questionInt("enter the number")
let n=input.questionInt("enter the number")

let i=m;
let sum=0;
while(i<=n){
    sum=sum+i;
i=i+1;
}
console.log(sum);
