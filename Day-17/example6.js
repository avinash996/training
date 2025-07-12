function displaySum(sum){
    console.log("Factorial: "+sum)
}
function findSumOfDigits(data,callback){
    console.log("Start of findSumOfDigits")
    setTimeout(function(){
        console.log("Started Processing of add function.....");
        sum =0;
        while(data!=0){
            sum = sum+data%10;
            data = Math.floor(data/10);
        }
        callback(sum);
        
    },5000
    );
console.log("end of findSumOfDigits")

}
function Main(){
    console.log("start of main")
    let s= findSumOfDigits(123,displaySum);
    console.log("end of main")
}
Main();