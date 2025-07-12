function add(a, b, ...c){
    console.log("c: ",c);
    return a+b;
    
}
result = add(10,20)
console.log(result);
result = add(10,2,30)
console.log(result);
result = add(10,100,30,4)
console.log(result);


// function add(a, b, ...c){
//     console.log("c: ",c);
//     let tot = a+b;
//     for(x of c){
//         tot = tot+x;
//     }
//     return tot;
// }
// result = add(10,20)
// console.log(result);