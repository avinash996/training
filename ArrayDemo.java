import java.util.Scanner;
public class ArrayDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int[] arr = new int[5];
        System.out.println("Enter 5 Array elements : ");
        for(int i =0; i<arr.length; i++){
            arr[i] = scan.nextInt();
        }
        System.out.println("Array elemnts are: ");
        for(int data: arr){
            System.out.println(data);
        }
    }
}
          