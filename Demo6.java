import java.util.Scanner;
public class Demo6{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter the num of elements: ");
        int n = scan.nextInt();
        int[] arr = new int[n];
        int totalSum = 0;
        System.out.println("Enter the array of elements: ");
        for(int i=0; i<arr.length;i++){
            arr[i] = scan.nextInt();
            totalSum  = totalSum + arr[i];
        }
        int index  = -1;
        int leftSum = 0;
        for(int i = 0; i<arr.length; i++){
            int rightSum = totalSum - leftSum - arr[i];
            System.out.println("Index: " +i+ "leftSum: "+leftSum + "RightSum: "+rightSum);
            if(leftSum==rightSum){
                index = i;
                break;
            }
            leftSum = leftSum + arr[i];

        }
        System.out.println("Index: "+index);
    }
}
