// public class Circle {
//     private int radius;
//     private float area;
//     static private float PI;
//     static{
//         System.out.println("Intialising PI");
//         PI=3.124f;
//     }
//     public Circle() {
//         radius=0;
//         area=0;
//         PI=3.142f;
//     }


//     public Circle(int radius) {
//         this.radius = radius;
//         area=0;
//         PI=3.142f;
        
//     }


//     public int getRadius() {
//         return radius;
//     }


//     public void setRadius(int radius) {
//         this.radius = radius;
//     }


//     public float getArea() {
//         area=PI*radius*radius;
//         return area;
//     }


//     @Override
//     public String toString() {
//         getArea();
//         return "Circle [radius=" + radius + ", area=" + area + "]";
//     }
//     static public void displayPI(){
//         System.out.println("PI: "+PI);
//     }
// }