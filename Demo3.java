import java.util.Scanner;
public class Demo3{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the num of elements: ");
        int n = scan.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter the array of elements: ");
        for(int i=0; i<arr.length;i++){
            arr[i] = scan.nextInt();
        }
        int L = arr[0];
        for(int i = 1; i<arr.length;i++){
            if(arr[i]>L){
                L = arr[i];
            }
        }
        System.out.println("Largest: "+L);
    }
}
