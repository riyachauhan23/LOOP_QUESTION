const input=require("readline-sync")
let n=input.questionInt("enter the number")

// for (let i = 1; i<=n; i++) {
//     if(n%i==0){
//         console.log(i);
//     }
// }

let i=0;
while (i<=n) {
   if(n%i==0) {
    console.log(i);
   }
   i=i+1;
    
}