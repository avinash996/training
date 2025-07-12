let emp = {
    empNo: 101,
    empName: "Akarsh",
    job: "Software Engineer",
    salary: 50000,
    mobileNo: "9346856837",
    emailId: "akarsh@gmial.com"
};
for (let key in emp) {
    console.log(key + " : " + emp[key]);
}
console.log(emp.empName);
