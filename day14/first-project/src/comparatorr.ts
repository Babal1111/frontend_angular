// interface Comparator<T>{
//     compare(obj1: T,obj2 :T): number;
// }

// function sort<T>(a:T[],comp: Comparator<T>){
//     let n = a.length;
//     for(let i=n-1;i>0;i--)
//     {
//         for(let j=0;j<i;j++){
//             if(comp.compare(a[j],a[j+1])>0)
//             {
//                 let temp = a[j];
//                 a[j] = a[j+1];
//                 a[j+1] = temp;
//             }
//         }
//     }

// }

// interface User{
//     id:number,
//     name:string
// }
// var ar: User[] = {
//     {
//         id:1,
//         name:"babal"
//     }
// }

// var comp: Comparator<User>={
//     compare:(obj1,obj2)=>obj1.id-obj2.id;
    

// }