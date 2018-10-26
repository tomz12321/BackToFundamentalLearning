
/**
 * Implementation of Mergesort.
 * 
 * @author jefcha
 */
public class MergeSort extends SortAlgorithm
{
	
	/**
	 * Sort array.
	 * 
	 * @param array Array to be sorted.
	 */
    public void sort(int[] array) {

    	// we only merge sort if length of array is greater than 1
        if (array.length > 1) {
            int mid = (int) Math.floor(array.length / 2); 
            
            // Create new sub-arrays
            int[] left = new int[mid];
            int[] right = new int[array.length - mid];

            // copy elements array into the left and rigth sub-arrays
            System.arraycopy(array, 0, left, 0, left.length);
            System.arraycopy(array, left.length, right, 0, right.length);

            // sort the sub-arrays
            sort(left);
            sort(right);

            // skip merge step optimisation.
            if (left[mid-1] < right[0]) {
                System.arraycopy(left, 0, array, 0, left.length);
                System.arraycopy(right, 0, array, mid, right.length);
            }
            // normal merging 
            else {
                merge(left, right, array);
            }
            // tell garbage collector we no longer need these
            left = null;
            right = null;
        }
    } // end of sort()


    /**
     * Merge left and right into array.
     * 
     * @param left Left sub-array.
     * @param right Right sub-array.
     * @param array Merged array.
     */
    protected void merge(int[] left, int[] right, int[] array) {
        int i = 0;
        int j = 0;
        int k = 0;

        // while there are elements in both left and right to be merged
        while (i < left.length && j < right.length) {
            if( left[i] <= right[j] ) {
                array[k] = left[i];
                i++;
            } else {
                array[k] = right[j];
                j++;
            }
            k++;
        }

        // if one of the sub-arrays is exhausted append the rest of the other one to array
        if (i == left.length) {
            while (j < right.length) {
                array[k] = right[j];
                k++;
                j++;
            }
        }
        else if (j == right.length) {
            while (i < left.length) {
                array[k] = left[i];
                k++;
                i++;
            }
        }
    } // end of merge()

} // end of class MergeSort
