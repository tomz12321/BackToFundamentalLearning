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
class Eulerian{
	// Return eulerian number A(n, m)
	public static int eulerian(int n, int m)
	{
		if (m >= n || n == 0)
			return 0;
		if (m == 0)
			return 1;

		return (n - m) * eulerian(n -1, m);
	}

	/* This is a driver code for above algorithm */
	public static void main(String[] args)
	{
		int n = 3, m = 1;
		System.out.print( eulerian(n, m) );
	}
}