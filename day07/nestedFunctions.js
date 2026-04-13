
function parent(){
    return function child(){
        return "Hello";
    }
}

let returnedVal = parent()();
console.log(returnedVal);

function parent2(val1,val2){
    return  function child2(val3,val4){
        return  (val1 + val2 )+val3+val4;
    }
}

let returnedVal2 = parent2(10,20)(40,50);
console.log(returnedVal2);