import java.util.LinkedHashSet;

public class Demo7 {
    public int removeDuplicates(int[] nums){
        LinkedHashSet<Integer> set = new LinkedHashSet<>();
        for(int i =0; i<nums.length;i++){
            set.add(nums[i]);
        }
        int i = 0;
        for(int data : set){
            nums[i] = data;
            i++;
        }
        return set.size();
    }
    
}
