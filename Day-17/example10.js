function findSum(a,b){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let sm =a+b;
            resolve(sm);
        },3000
    );
    });
    return p;
}
function Main(){
    let pr = findSum(10,20)
    pr.then((s)=>console.log("Sum: "+s));
}
Main();
