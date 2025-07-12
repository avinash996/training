import java.util.Scanner;
public class Demo2{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the num of elements: ");
        int n = scan.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter the array of elements: ");
        for(int i=0; i<arr.length;i++){
            arr[i] = scan.nextInt();
        }
        int sm = 0;
        for(int data: arr){
            sm = sm+data;
        }
        System.out.println("Sum: "+sm);
    }
}