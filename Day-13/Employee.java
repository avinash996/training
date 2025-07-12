public class Employee{

    private int employeeNumber;
    private String employeeName;
    private int employeeSalary;

    public int getEmployeeNumber() {
        return employeeNumber;
    }
    public void setEmployeeNumber(int employeeNumber) {
        if(employeeNumber<=0)
        {
            System.out.println("Invalid employee number");
        }else{
        this.employeeNumber = employeeNumber;
        }
    }
    public String getEmployeeName() {
        return employeeName;
    }
    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }
    public int getEmployeeSalary() {
        return employeeSalary;
    }
    public void setEmployeeSalary(int employeeSalary) {
        if (employeeSalary<0) {
            System.out.println("Invalid Employee Salary");
        }else{
            this.employeeSalary = employeeSalary;
        }

    } 

    public String toString(){
        String str="Empno: "+employeeNumber+"Name: "+employeeName+"Salary: "+employeeSalary;
        return str;
    }

}