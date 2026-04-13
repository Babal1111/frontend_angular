let api1 = "https://api.escuelajs.co/api/v1/products"
function fetchDataFromBackend(){
    let promise = fetch(api1);
    console.log(promise);
    promise.then((Response)=>console.log(Response)).catch((errorMessage)=>console.log(errorMessage)).finally(()=> console.log())
}

fetchDataFromBackend();