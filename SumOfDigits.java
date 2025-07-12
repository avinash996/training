import java.util.Scanner;

public class SumOfDigits {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num,sm,digit;
        num = sc.nextInt();
        sm = 0;
        while(num != 0){
            digit = num%10;
            sm = sm + digit;
            num = num / 10;
        }
        System.out.println("Sum of Digits: "+sm);
}
}