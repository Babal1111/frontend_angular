

let k = new Promise((resolve,rejected)=>{
    resolve("this promise is fullfiled");

})

console.log(k);
k.then((data)=>{
    console.log(data)
}).catch((errorMessage)=>{console.log(errorMessage)}).finally(()=>console.log("im not relying on the settelment of promises."))