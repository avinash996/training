// let findLOrS = (num1,num2)=>{
//  if(num1>num2){
//     return num1
//  } else if(num2>num1){
//   return num2
//  }
// }

//  if(num1<num2){
//     return num1
//  } else if(num2<num1){
//   return num2
//  }
function displayResults(num1,num2,callback){
    let result  = callback(num1,num2);
    console.log("Result: "+result)
}
function Main(){
    displayResults(5,1,(num1,num2)=>{
 if(num1>num2){
    return num1
 } else if(num2>num1){
  return num2
 }
}
    );

displayResults(5,1,(num1,num2)=>{
 if(num1<num2){
    return num1
 } else if(num2<num1){
  return num2
 }
    
}
);
}
    Main();