function findPerfectNumbers(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n <= 0) {
                reject("Invalid Number");
                return;
            }
            let perfect = 0;
            for (let i = 1; i <= n / 2; i++) {
                if (n % i === 0) {
                    perfect += i;
                }
            }
            if (n === perfect) {
                resolve(true);
            } else {
                resolve(false);
            }
        }, 1000); 
    });
}

function Main() {
    let pr = findPerfectNumbers(5);
    pr.then((flag) => {
        if (flag) {
            console.log("Given Number is a Perfect Number");
        } else {
            console.log("Given Number is Not a Perfect Number");
        }
    })
    .catch((error) => console.log("Invalid: " + error));
}
async function Main() {
    console.log("starts processing")
    try{
    let flag = await findPerfectNumbers(6);
        if (flag) {
            console.log("Given Number is a Perfect Number");
        } else {
            console.log("Given Number is Not a Perfect Number");
        }
    }catch(err){
        console.log(err)
    }
     console.log("ends processing")
}
Main();
