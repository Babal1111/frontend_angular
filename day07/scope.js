// global scope - var
// function scope - var, let, const
// block scope- let, const21`

var msg = "hello";

function sum(){
    
}

if(true){
var msg2 = "keep silent";
}
console.log(msg2);

let interval1 = setInterval(()=>{
    console.log("Modi");
},2000)
clearInterval(interval1);

let count = 0;
let interval2 = setInterval(()=>{
    count++;
    console.log("Modi");
    if(count==5){
        clearInterval(interval2);
    }
},2000)
// if(count==5){
//     clearInterval(interval2);
// }

setTimeout(()=>{
    console.log("Give response after 3 seconds")
},3000); // time dedo2014 tak, 2030,2040, 
// ;promises


