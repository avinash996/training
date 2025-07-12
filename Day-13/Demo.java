interface ICircle {
    public void setRadius(int radius);
    public int getRadius();
    public float getArea();
}
class Circle implements ICircle{
    private int radius;
    private float area;
    private static float PI = 3.124f;
    @Override
    public void setRadius(int radius){
        this.radius=radius;
    }
    @Override
    public int getRadius(){
        return radius;
    }
    @Override
    public float getArea(){
        area = PI * radius * radius;
        return area;
    }
}
class Demo{
    public static void main(String[] args) {
        ICircle circle = new Circle();
        circle.setRadius(15);
        System.out.println("\nArea of circle: "+circle.getArea());
    }
}