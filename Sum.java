import java.util.Scanner;
public class Sum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = scan.nextInt();
        int sm = 0;
        for(int i = 0; i<=n;i++){
            sm = sm+i;
        }
        System.out.println("Sum"+sm);
    }
}
