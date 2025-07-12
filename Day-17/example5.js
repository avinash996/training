function displayFact(fact){
    console.log("Factorial: "+fact)
}
function findFact(n,callback){
    console.log("Start of findFact")
    setTimeout(function(){
        console.log("Started Processing of add function.....");
        let f=1;
        for(let i=1;i<=n;i++){
            f=f*i
        }
        callback(f);
    },10000
    );
console.log("end of findFact")

}
function Main(){
    console.log("start of main")
    let s= findFact(5,displayFact);
    console.log("end of main")
}
Main();