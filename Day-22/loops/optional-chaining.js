 emp={}
//  console.log(emp.empName);
//  console.log(emp.address);
// //  console.log(emp.address.city);
 
 emp= undefined
 emp = {
    empNO: 101,
    empName:"Anil",
    address: {
        street: "Nagar",
        city: "Hyderabad"
    }

 }
 console.log(emp.empName);
 console.log(emp.address);
 console.log(emp.address.city);

 console.log("checking data availablity: using regular approach")
 if(emp && emp.address && emp.address.city)
 console.log(emp.empName);
 console.log(emp.address.city);

 console.log("checking data availablity: using optional chaining")
 console.log(emp?.address?.city);
 console.log(emp?.address?.job);
 
 
