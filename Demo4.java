import java.util.Scanner;
public class Demo4{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the num of elements: ");
        int n = scan.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter the array of elements: ");
        for(int i=0; i<arr.length;i++){
            arr[i] = scan.nextInt();
        }

        int fl, sl;

        
        if (arr[0] > arr[1]) {
            fl = arr[0];
            sl = arr[1];
        } else {
            fl = arr[1];
            sl = arr[0];
        }

        for (int i = 2; i < arr.length; i++) {
            if (arr[i] > fl) {
                sl = fl;
                fl = arr[i];
            } else if (arr[i] > sl) {
                sl = arr[i];
            }
        }

        System.out.println("First Largest: " + fl);
        System.out.println("Second Largest: " + sl);
    }
}
