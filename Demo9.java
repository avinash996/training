import java.util.Scanner;
public class Demo9 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a String : ");
        String s = sc.next();
        char[] c = str.toCharArray();
        int i,j;
        char ch;
        i<j;
        for(int i = 0; j=c.length-1;i++;j--){
            ch = c[i];
            c[i] = c[j];
            c[j] = ch;
        }
        str = new String(c);
        System.out.println("Reversed String: "+str);

        
    }
    
}
