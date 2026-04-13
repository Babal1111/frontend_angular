

function add3(a,b){
    return new Promise((resolve,reject)=>{
        try{
            if(( typeof(a)=='string')){
            throw("Cant add other than numbers")
        }
        let c= a+b;
        resolve(c);
        }
        catch(err){
            reject(err);
        }
        
    })
}
add3(4,5).then(res=> console.log("sum = "+res)).catch(err=>{});
add3("hilo",5).then(res=> console.log("sum = "+res)).catch(err=>{});
