/*Write a program to take a number from the user and print the number of digits in the given number. (can you do it without loop O(1) )
*/

const input=require("readline-sync")
let n=input.questionInt("enter the number")

let s=0;
while(n>0){
    a=n%10;
    s=s+1;
    n=Math.floor(n/10);
}
console.log(s);