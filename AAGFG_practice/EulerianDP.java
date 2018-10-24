/**
 * Beginning with AA in Java:
 *
 * In combinatorics, the Eulerian Number A(n, m), is the number of permutations of the numbers 1 to n in which exactly m elements are greater than previous element.
 * For example, there are 4 permutations of the number 1 to 3 in which exactly 1 element is greater than the previous elements.nd n with n >= m >= 0. It can be obtained by:
 * 
 * Source: https://www.geeksforgeeks.org/eulerian-number/
 * This code is contributed by rishabh_jain.
 *
 * Practiced by Jyh-woei Yang (Tom) on 2018/10/24
 */

// In combinatorics, the Eulerian Number A(n, m), is the number of permutations of the numbers 1 to n in 
// which exactly m elements are greater than previous element.

// For example, there are 4 permutations of the number 1 to 3 in which exactly 1 element is greater than the 
// previous elements.

// Permutation / Instance  / Count
// 1 2 3	   / 1,2 & 2,3 / 2
// 1 3 2	   / 1, 3	   / 1
// 2 1 3	   / 1, 3	   / 1
// 2 3 1	   / 2, 3	   / 1
// 3 1 2	   / 1, 2 	   / 1
// 3 2 1	   / 	       / 0

// Examples:
// Input: n = 3, m = 1
// Output: 4
// Please see above diagram (There
// are 4 permutations where 1 no. is
// greater.

// Input: n = 4, m = 1
// Output: 11

// Example:
// Suppose, n = 3 and m = 1.
// Therefore,
// A(3, 1)
// = (3 – 1) * A(2, 0) + (1 + 1) * A(2, 1)
// = 2 * A(2, 0) + 2 * A(2, 1)
// = 2 * 1 + 2 * ( (2 – 1) * A(1, 0) + (1 + 1) * A(1, 1))
// = 2 + 2 * (1 * 1 + 2 * ((1 – 1) * A(0, 0) + (1 + 1) * A(0, 1))
// = 2 + 2 * (1 + 2 * (0 * 1 + 2 * 0)
// = 2 + 2 * (1 + 2 * 0)
// = 2 + 2 * 1
// = 2 + 2
// = 4
// We can verify this with example shown above.

// Below is the implementation of finding A(n, m):

import java.util.*;
class EulerianDP{
	// Return eulerian number A(n, m)
	public static int eulerian(int n, int m)
	{
		int [][] dp = new int[i+1][m+1];

		// For each row from 1 to n
		for (int i = 1; i <= n; i ++)
		{

			// For each column from 0 to m
			for (int j = 0; j <= m; j++)
			{

				// If i is greater than j
				if(i > j) {

					// If j is 0, then make
					// that state as 1.
					if (j == 0)
						dp[i][j] = 1;

					// basic recurrence relation.
					else
						dp[i][j] = ((i - j) * dp[i - 1][j - 1]) + ((j + 1) * dp[i - 1][j]); 
				}
			}
		}

		return dp[n][m];
	}

	/* This is a driver code for above algorithm */
	public static void main(String[] args)
	{
		int n = 3, m = 1;
		System.out.print( eulerian(n, m) );
	}
}