public class TwoDimArray2{
	public static void main(String[] args){
		int[][] yearlySales = {{0,1,2,3},
			{4,5,6,7},
			{8,9,10,11}

		};
		for( int[] row : yearlySales) {
			for (int element : yearlySales) {
				System.out.print(element + " ");
			}
			System.out.println();
		}
	}
}
