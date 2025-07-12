import java.util.Scanner;
public class Demo8 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("ENter a New String: ");
        String s  = sc.nextLine();
        StringBuffer sb = new StringBuffer(s);
        sb.reverse();
        s = new String(sb);
        System.out.println(sb);
    }
    
}
