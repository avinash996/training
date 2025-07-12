let arr = [
    {empNo:101, name:"Akarsh",salary:40000},
    {empNo:102, name:"Sajin",salary:30000},
    {empNo:103, name:"Deepak",salary:50000},
    {empNo:104, name:"Avinash",salary:70000},
    {empNo:105, name:"Yeshwant",salary:60000}
];
// function compareSalary(e1,e2){
//     if(e1.salary>e2.salary){
//         return -1;
//     }else if(e2.salary>e1.salary){
//         return 1;
//     }
//     else{
//          return 0;
//     }
// // }
// let compareSalary = (e1,e2) => e2.salary-e1.salary;

// arr.sort((e1,e2)=> e2.salary-e1.salary);
// console.log(arr)
arr.sort((e1,e2)=>e2.name.localeCompare(e1.name));
console.log(arr)