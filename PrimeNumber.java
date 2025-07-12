import java.util.Scanner;

public class PrimeNumber{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number: ");
        int num = sc.nextInt();
        boolean prime = true;
        int i = 2;
        if(num == 1){
            System.out.println("its a prime number");
            return;
        }
        while(i<=(num/2)){
            if(num % i ==0){
                prime = false;
                break;
            }
            i++;

        }
        if(prime){
            System.out.println("its a prime num");

        }
        else{
            System.out.println("its not a prime num");

        }
    }
}
