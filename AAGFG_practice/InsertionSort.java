/**
 * Beginning with AA Insertion Sort
 * 
 * Source: https://www.geeksforgeeks.org/insertion-sort/
 * 
 * This code is contributed by Rajat Mishra
 * Practiced by Jyh-woei Yang (Tom) on 2018/10/30
 */

// Output: 5 6 11 12 13

class InsertionSort
{
	void sort(int arr[]){
		/* Function to sort array using insertion sort */
		int n = arr.length;
		for (int i = 1; i < n; ++i)
		{
			int key = arr[i];
			int j = i - 1;

			/* Move elements of arr[0..i-1], that are 
               greater than key, to one position ahead 
               of their current position */
            while (j >= 0 && arr[j] > key)
            {
            	arr[j + 1] = arr[j];
            	j = j - 1;
            }
            arr[j+1] = key;
		}
	}

	/* A utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver method
	public static void main(String args[])
	{
		int arr[] = {12, 11, 13, 5, 6};

		InsertionSort ob = new InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
} //end of function()