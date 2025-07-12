import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Shape shape;
        Scanner sc=new Scanner(System.in);
        System.out.println("1-rect, 2-tri");
        int ch = sc.nextInt();
    
    
        if(ch == 1){
            shape = new Rectangle();
        }
        else{
            shape = new Triangle();
        }
        shape.setDimension1(sc.nextInt());
        shape.setDimension2(sc.nextInt());
        System.out.println("area: "+shape.getArea());
    }
}






//         Triangle tri = new Triangle();
//         tri.setDimension1(sc.nextInt());
//         tri.setDimension2(sc.nextInt());
//          System.out.println("Area of the Triangle: "+tri.getArea());
//     }
// }
        
// //         Box box= new Box();
//         box.setDimension1(sc.nextInt());
//         box.setDimension2(sc.nextInt());
//         box.setDim3(sc.nextInt());
//         System.out.println("Area of the box: "+box.getArea());
//         System.out.println("Volume of the box: "+box.getVolume());
//         System.out.println("Volume of the box: "+triangle.getArea());

        
//     }
// }















        // Rectangle rectangle = new Rectangle();
         
        // rectangle.setDimension1(sc.nextInt());
        // rectangle.setDimension2(sc.nextInt());
        // System.out.println("Area of rectangle: "+rectangle.getArea());






        // Circle circle= new Circle(sc.nextInt());
        // System.out.println("Circle Details "+circle);

        // System.out.println(circle.getRadius());
        // Circle.displayPI();






    //     Employee emp=new Employee();

    //     System.out.println("Enter Employee Details");
    //     emp.setEmployeeNumber(sc.nextInt());
    //     sc.nextLine();
    //     emp.setEmployeeName(sc.nextLine());
    //     emp.setEmployeeSalary(sc.nextInt());
    //     // System.out.println("Employee Number: "+emp.getEmployeeNumber());
    //     // System.out.println("Employee Name: "+emp.getEmployeeName());
    //     // System.out.println("Employee Salary: "+emp.getEmployeeSalary());
    //     System.out.println(emp);
    //
//         Rectangle rectangle = new Rectangle();
//         rectangle.setDimension1(sc.nextInt());
//         rectangle.setDimension1(sc.nextInt());
//         System.out.println("Area of Rectangle: "+rectangle.getArea());
//     }
// }//