/*Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.
*/


const input=require("readline-sync")
let n=input.questionInt("enter the number")
 
let m=1;
let i=1;
while(i<=n){
    if(n%i==0)
    {

    m=m*i;
    }
    i=i+1;
    
}
if(m==n){
    console.log("yes");
}
  else{
    console.log("no")
  }

