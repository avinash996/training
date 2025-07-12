function findGreatest(a,b,c){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a>b&&a>c){
               resolve(a);
            }else if(b>a&&b>c){
                resolve(b);
            }else{
                resolve(c);
            }
        },2000);
    })
    return p;
}
// function Main(){
//     let pr = findGreatest(9,4,3)
//     pr.then((greatest)=>console.log("Greatest of 3 Numbers is: "+greatest))
//     // .catch((err)=>console.log("Error: "+err))
// }
async function Main(){
    let large = await findGreatest(9,4,3);
    console.log("Largest: "+large);
    
}
Main();