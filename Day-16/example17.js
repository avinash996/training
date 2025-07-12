let arr = [1,2,3,4,5,6,7,9]
arr.forEach(data => {
    if(isPrime(data))
        console.log(data)
})
function isPrime(data){
    if(data<2)
        return false
    for(let i =2;i<=Math.sqrt(data);i++){
        if(data%i==0){
            return false
        }
    }
    return true  
}
