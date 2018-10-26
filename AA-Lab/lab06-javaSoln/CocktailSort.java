
/**
 * Implementation of Cocktail sort.
 * 
 * @author jefcha
 */
public class CocktailSort extends SortAlgorithm
{
	
	/**
	 * Sort array.
	 * 
	 * @param array Array to be sorted.
	 */	
    public void sort(int[] array) {
        int tmp;
        int begin = 0;
        int end = array.length - 1;
        boolean swapped;

        do
        {
            swapped = false;
            // left to right 
            for (int i = begin; i < end; i++) {
                if (array[i] > array[i+1]) {
                    swap(array, i+1, i);
                    swapped = true;
                }
            }

            // if no swap occurred, we are done
            if(!swapped) {
                break;
            }

            swapped = false;
            end--;

            // right to left 
            for (int i = end; i > begin; i--) {
                if (array[i] < array[i-1]) {
                    swap(array, i-1, i);
                    swapped = true;
                }
            }
            begin++;
        } while(swapped);
    }
}
