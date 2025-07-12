let arr = [
    {empNo:101, name:"Akarsh",salary:40000},
    {empNo:102, name:"Avinash",salary:30000},
    {empNo:103, name:"Deepak",salary:50000},
    {empNo:104, name:"Yeshwant",salary:60000},
    {empNo:105, name:"Sajin",salary:70000}
];
// let data = arr.find((data) => data.name=="Arjun");
// let data = arr.filter((data) => data.name.startsWith("A"));
// for(let i=0;i<arr.length;i++){
//     arr[i].salary=arr[i].salary+arr[i].salary*0.1;
// }
arr = arr.map(e=>{
    e.salary=e.salary+e.salary*0.1;
    return e;
})
// let data = arr.filter((data) => data.name.includes("p"));
// console.log(data)
console.log(arr)