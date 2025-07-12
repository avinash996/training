public class Circle {
    private float radius;
    private float area;
    private final float PI = 3.124f;

    public float getArea() {
        return area;
    }

    public void setArea(float area) {
        this.area = area;
    }

    public float getRadius() {
        return radius;
    }

    public void setRadius(float radius) {
        this.radius = radius;
    }

    public float getPI() {
        return PI;
    }

    // Method to calculate area
    public void calculateArea() {
        area = PI * radius * radius;
    }
}

class Main {
    public static void main(String[] args) {
        Circle cs = new Circle();
        cs.setRadius(5);
        cs.calculateArea();

        System.out.println("Radius: " + cs.getRadius());
        System.out.println("Area  : " + cs.getArea());
    }
}
