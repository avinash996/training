// let factorial = 1;
// let n = 5;

// for(let i = 1; i <= n; i++) {
//     factorial *= i;
// }

// console.log("5! = " + factorial);
// let fact = (n)=>{
//     let f = 1;
//     for(let i=1;i<=n;i++){
//         f = f*i;
//     }
//     return f;
// }
// let sum = (n)=>{
//     let s = 0;
// for(let i=1;i<=n;i++){
//     s = s+i;
// }
// return s;
// }
function displayResults(n,callback){
    let result  = callback(n);
    console.log("Result: "+result)

}
function Main(){
    displayResults(5,(n)=>{
                        let f = 1;
                        for(let i=1;i<=n;i++){
                            f = f*i;
                        }
                        return f;
                    }
                );
    displayResults(5,(n)=>{
                       let s = 0;
                       for(let i=1;i<=n;i++){
                           s = s+i;
                        }
                        return s;
                    }
                    );
                }
Main();
                