
/**
 * Implementation of Quicksort, same as the lecture notes.
 * Use first element as pivot.
 * 
 * @author jefcha
 */
public class QuickSort extends SortAlgorithm
{
	
	/**
	 * Sort array.
	 * 
	 * @param array Array to be sorted.
	 */
    public void sort(int[] array) {
    	sort(array, 0, array.length-1);
    } // end of sort()
    
    
    /**
     * In-place sort, used leftIndex and rightIndex to specify the partition in question.
     * 
     * @param array Array to be sorted.
     * @param leftIndex The leftmost position to sort from (inclusive).
     * @param leftIndex The rightmost position to sort to (inclusive).
     */
    protected void sort(int[] array, int leftIndex, int rightIndex) {
        if (leftIndex < rightIndex) {
            int split = partition(array, leftIndex, rightIndex);
//            System.out.println("l = " + leftIndex + " r = " + rightIndex + " split = " + split);

            // sort each partition
            if (split -1 > leftIndex) {
            	sort(array, leftIndex, split-1);
            }
            if (split + 1 < rightIndex) {
            	sort(array, split+1, rightIndex);
            }
        }
    } // end of sort()


    /**
     * Quicksort partition function.  Swap and divide into two partitions.
     * 
     * @param array Array to be sorted.
     * @param leftIndex The leftmost position to sort from (inclusive).
     * @param leftIndex The rightmost position to sort to (inclusive).
     *
     * @return Index where pivot is placed.
     */
    protected int partition(int[] array, int leftIndex, int rightIndex) {
        // pivot is at first element
        int pivot = array[leftIndex];
        int i = leftIndex + 1;
        int j = rightIndex;
        
        while (i <= j) {
        	while (array[i] < pivot && i < rightIndex) {
                i++;
            } 
        	while (array[j] > pivot) {
                j--;
            } 

            // swap array[i] and array[j], which are in the incorrect partitions
            // with respect to the pivot
        	if (i <= j) {
        		swap(array, i, j);
        		i++;
//        		j--;
        	}
        } 

        // swap pivot into its correct position in array
        swap(array, leftIndex, j);

        return j;
    } // end of partition()
    
    
    /**
     * Median of three.
     *
     * @param array Array to take median form.
     * @param leftIndex The leftmost position to take median from (inclusive).
     * @param leftIndex The rightmost position to take median from (inclusive).
     */
    protected void medianPivot(int[] array, int leftIndex, int rightIndex) {
    	if (rightIndex - leftIndex < 3) {
    		return;
    	}
    	
    	int midIndex = (int) Math.floor((rightIndex + leftIndex) / 2);
    	
    	// find median
    	int medianIndex;
    	if (array[leftIndex] <= array[midIndex]) {
    		if (array[midIndex] <= array[rightIndex]) {
    			medianIndex = midIndex;
    		}
    		else if (array[leftIndex] <= array[rightIndex]) {
    			medianIndex = rightIndex;
    		}
    		else {
    			medianIndex = leftIndex;
    		}
    	}
    	else if (array[leftIndex] <= array[rightIndex]) {
    		medianIndex = leftIndex;
    	}
    	else if (array[midIndex] <= array[rightIndex]) {
    		medianIndex = rightIndex;
    	}
    	else {
    		medianIndex = midIndex;
    	}
    	
    	// move median to array[leftIndex], which will become the pivot.
    	swap(array, medianIndex, leftIndex);
    } // end of medianPivot()

    
} // end of class QuickSort
