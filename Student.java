public class Student {
    private int rollno;
    private String name;
    private int marks1, marks2, total;

    public int getRollno() {
        return rollno;
    }

    public void setRollno(int rollno) {
        this.rollno = rollno;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMarks1() {
        return marks1;
    }

    public void setMarks1(int marks1) {
        this.marks1 = marks1;
    }

    public int getMarks2() {
        return marks2;
    }

    public void setMarks2(int marks2) {
        this.marks2 = marks2;
    }

    public int getTotal() {
        total = marks1 + marks2;
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }
}

class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.setRollno(101);
        student.setName("Avinash");
        student.setMarks1(85);
        student.setMarks2(90);

        System.out.println("Roll No: " + student.getRollno());
        System.out.println("Name   : " + student.getName());
        System.out.println("Marks1 : " + student.getMarks1());
        System.out.println("Marks2 : " + student.getMarks2());
        System.out.println("Total  : " + student.getTotal());
    }
}
