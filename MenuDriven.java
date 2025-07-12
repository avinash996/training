import java.util.*;
public class MenuDriven{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int ch;
        do{
            System.out.println("1->Check even/odd 2-> Exit");
            ch = scan.nextInt();
            if(ch==1){
                System.out.println("Enter data: ");
                int data = scan.nextInt();
                if(data %2 == 0){
                    System.out.println( data+"is a even number");   
                } 
                else{
                    System.out.println(data+"its a odd number");
            }
        }
    }while(ch!=2);
}
}