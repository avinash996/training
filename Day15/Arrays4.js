let arr = [1,4,5,6,7];
function displayElement(element, index,x){
    console.log("Index: "+index+" Element: "+element+" Arrays: "+x)
}
// for(let i = 0;i<arr.length;i++){
//     displayElement(arr[i])
// }
arr.forEach(displayElement)  