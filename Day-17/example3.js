let arr = [
    {rno:101, name:"Akarsh",marks1:100,marks2:100,total:200},
    {rno:102, name:"Sajin",marks1:1000,marks2:1000,total:2000},
    {rno:103, name:"Deepak",marks1:91,marks2:95,total:186},
    {rno:104, name:"Avinash",marks1:69,marks2:70,total:139},
    {rno:105, name:"Yeshwant",marks1:89,marks2:90,total:179}
];
// arr.map(stud=>{
//     stud.total=stud.marks1+stud.marks2;
// return stud;
// }
// // );
// let result = arr.filter(s=>s.name.startsWith("A") || s.name.startsWith("D"))
let result = arr.filter(s=>s.name.includes("e"))
console.log(result)

// arr.sort((s1,s2)=>s2.total-s1.total)
// console.log(arr)