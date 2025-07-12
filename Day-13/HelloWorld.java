import java.util.Scanner;
public class HelloWorld {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Your Name: ");
        String name = sc.nextLine();
        System.out.println("Enter Your age: ");
        int age = sc.nextInt();
        
        System.out.println("Enter your details"+"name:"+name+"age: "+age);
    }
    
}
