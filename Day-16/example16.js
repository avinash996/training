let arr = [1,2,3,4,5,6]
// let i;
// for(let i=1;i<=arr.length;i++){
//     if(i%5==0){
//         console.log(i)
//     }
// }
function display(data){
    if(data%5==0)
        console.log(data)
}
arr.forEach(display)