function findVolume(l,b,h){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(l == 0||b==0||h==0){
                console.log("Invalid dimensions");
            }else{
                let volume = l*b*h;
                resolve(volume);
            }
        },2000)
    })
    return p;
}
function Main(){
    let pr = findVolume(1,2,3)
    pr.then((volume)=>console.log("Volume of Box: "+volume))
    .catch((err)=>console.log("Error: "+err))
}
Main();