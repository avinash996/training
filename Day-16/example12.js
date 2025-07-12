// let findGreatest = (num1,num2,num3)=>{
//  if(num1>num2 && num1>num3){
//     return num1
//  } else if(num2>num1 && num2>num3){
//   return num2
//  }
//  else{
//    return num3
//  }
// }
// let greatest = findGreatest(1,2,3)
// console.log(greatest)
// let findGreatest = (num1,num2,num3)=>{
//  if(num1>num2 && num1>num3){
//     return num1
//  } else if(num2>num1 && num2>num3){
//   return num2
//  }
//  else{
//    return num3
//  }
// }
function displayResults(num1,num2,num3,callback){
    let result  = callback(num1,num2,num3);
    console.log("Result: "+result)
}
function Main(){
    displayResults(5,1,3,(num1,num2,num3)=>{
 if(num1>num2 && num1>num3){
    return num1
 } else if(num2>num1 && num2>num3){
  return num2
 }
 else{
   return num3
 }

}
    );
}
    Main();