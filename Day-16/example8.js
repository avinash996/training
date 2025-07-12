function calcInterest(p,t,r,interset){
    let i = interset(p,t,r);
console.log("Interset: "+i);
}
calcInterest(2000,2,14.5,(p,t,r)=>(p*t*r/100));
calcInterest(1000,2,14.5,function (p,t,r){
                                return p * Math.pow(1+r/100,t);
                            }
            )                
// calcInterest(1000,2,14.5,(p,t,r)=> p * Math.pow(1+r/100,t));