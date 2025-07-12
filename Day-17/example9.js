// to find sum of all array elements
function sumArray(arr,callback) {
    setTimeout(()=> {
        // let sum=0;
        // for(let i=0;i<arr.length;i++){
        //     sum += arr[i];
        // }
        let sum = arr.reduce((total,val)=>total+val,0);
        callback(sum);
    }, 3000);
}

function Main() {
    let arr = [1,2,3,4,5,6];
    sumArray(arr,(sum)=>console.log("Sum: "+sum))
}

Main();
  