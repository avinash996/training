// function compoundIntrest(p,r,t){
//     let s = p*Math.pow(1+r/100,t)
//     return s;
// }

//  let compoundIntrest = function(p,r,t){
//     let s = p*Math.pow(1+r/100,t)
//     return s;
// }
//  let compoundIntrest = (p,r,t)=>{
//     let s = p*Math.pow(1+r/100,t)
//     return s;
// }
let compoundIntrest = (p,r,t)=>p*Math.pow(1+r/100,t)
let intrest  = compoundIntrest(20000,2,3);
console.log("Intrest: "+intrest)


