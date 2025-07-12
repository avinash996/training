public class Triangle extends Shape{
    private float area;

    public float getArea() {
        area = 0.5f*dimension1*dimension2;
        return area;
    }
    
    
}
