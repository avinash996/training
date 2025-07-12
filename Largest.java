import java.util.*;
public class Largest {
    public static void main(String[] args) {
        
    
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter 2 values: ");
    int a,b;
    a = sc.nextInt();
    b = sc.nextInt();
    if(a>b){
        System.out.println("largest: "+a);
    }
    else{
        System.out.println("largest: "+b);
    }
}
