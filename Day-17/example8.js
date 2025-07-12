function searchElement(arr,searchData,callback) {
    setTimeout(function () {
        // let index = arr.indexOf(searchData);
        // callback(index!=-1);
        callback(arr.includes(searchData))
    }, 3000);
}

function Main() {
    let arr = ["akarsh","avinash","sajin","deepak"];
    searchElement(arr,"akarsh",(result)=>{
        if(result){
            console.log("Data Found");
        }else{
           console.log("Data not Found"); 
        }
    })
}

Main();
