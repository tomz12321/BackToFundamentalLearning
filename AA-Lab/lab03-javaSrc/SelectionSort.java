
/**
 * Implementation of SelectionSort.
 * 
 * @author jefcha
 */
public class SelectionSort extends SortAlgorithm
{
	
	/**
	 * Sort array.
	 * 
	 * @param array Array to be sorted.
	 */
    public void sort(int[] array) {
        // IMPLEMENT ME
    		// a[n-1] means last item
    		// a[array.length-1]
    		
    		//My Implement
    		//for (i = 0; i < array.length; i++)
    		//{
    		//	int minNumPosition = 0
    			//wrong, you should use for(j=1..) to implement instead of if/else
    		//	if (array[i-1] < array[i])
    		//	{
    		//		minNumPosition = i-1;
    		//	} else if (array[minNumPosition] > array[i-1])
    		//	{
    		//		minNumPosition = i-1
    		//	}
    		//	return array;
    		//}
    	
    		for(int i=0; i<=array.length-1;i++)
    		{
    			int min = i;
    			for (int j=i+1; j<= array.length-1;j++)
    			{
    				if(array[j] < array[min])
    					min = j;
    			}
    			int temp = array[i];
    			array[i] = array[min];
    			array[min] = temp;
    		
    		}
    		
    } // end of sort()


} // end of class SelectionSort
