let arr = [
    {empNo:101, name:"Akarsh",salary:40000},
    {empNo:102, name:"Avinash",salary:30000},
    {empNo:103, name:"Deepak",salary:50000},
    {empNo:104, name:"Yeshwant",salary:60000},
    {empNo:105, name:"Sajin",salary:70000}
];
let names = arr.map(e=>e.name)
console.log(names)
 names.join("-");
 let data  = names.join("-")
 console.log(data)
// let empNo= arr.join(e=>e.empNo);
// console.log(empNo)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i].name)
// }
// arr = arr.map(e=>{
//     e.salary=e.salary+e.salary*0.1;
//     return e;
// })
