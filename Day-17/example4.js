function displaySum(sm){
    console.log("Sum: "+sm)
}
function findSum(a,b,callback){
    console.log("Start of findSum")
    setTimeout(function(){
        console.log("Started Processing of add function.....");
        callback(a+b);
    },5000
    );
console.log("end of findSum")

}
function Main(){
    console.log("start of main")
    let s= findSum(10,20,displaySum);
    console.log("end of main")
}
Main();