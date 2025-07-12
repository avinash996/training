function findRadius(radius){
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(radius == 0){
                console.log("Invalid radius value");
            }else{
                let area = Math.PI*radius*radius;
                resolve(area);
            }
        })
        
    })
    
return p;

}
function Main(){
    let pr = findRadius(0)
    pr.then((area)=>console.log("Area of circle: "+area))
    .catch((err)=>console.log("Error: "+err));
}
Main();