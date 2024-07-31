/*Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
*/


const input = require("readline-sync")
let n = input.questionInt("enter the number")

let s=0;
let i=1;
while(i<n){
    if(n%i==0){
        s=s+i;
    }
 i++;   
}
if(s==n){
    console.log("yes");
}
else{
    console.log("no");
}