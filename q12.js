/*Write a program to create a pyramid of numbers consisting of a given number of lines. For example, if the given number is 5, then we should see the following:

Test Case1:
Input:
3
Output:
1
1 2 1
1 2 3 2 1

		Test Case2:
		Input:
		5
		Output:
		1
*/


const input=require("readline-sync")
let n=input.questionInt("enter the number")

let i=1;
let j;
let k;
let str="";
while(i<=n){
    j=1;
    while(j<=i){
        console.log(j);
        j=j+1;
    }
    i=i+1;
}

    k=i-1;
    while(k>0){
        console.log(k);
        k=k-1;
    }
    
