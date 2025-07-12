// function findArea(radius){
//     let area = Math.PI * Math.pow(radius,2);
//     return area;
// }
// let findArea = function(radius){
//     let area = Math.PI * Math.pow(radius,2);
//     return area;
// }
// let findArea = (radius)=>{
//     let area = Math.PI * Math.pow(radius,2);
//     return area;
// }
let findArea = (radius)=>Math.PI * Math.pow(radius,2);
let call = findArea(2);
console.log("Area: "+call)