/**
 * Beginning with C programming:
 *
 * Lobb Number
 * In combinatorial mathematics, the Lobb number L(m, n) counts the number of ways that n + m open parentheses can be arranged to form the start of a valid sequence of balanced parentheses.
 * The Lobb number are parameterized by two non-negative integers m and n with n >= m >= 0. It can be obtained by:
 * 
 * Source: https://www.geeksforgeeks.org/lobb-number/
 * This code is contributed by Arnav Kr. Mandal.
 *
 * Practiced by Jyh-woei Yang (Tom) on 2018/10/24
 */

// Lobb Number is also used to count the number of ways in which n + m copies of the value +1 and n – m 
// copies of the value -1 may be arranged into a sequence such that all of the partial sums of the sequence 
// are non- negative.

// Examples:
// Input: n = 3, m = 2
// Output: 5

// Input: n = 5, m = 3
// Output: 35

import java.util.*;

class LobbNumbers {

	// Coefficient C(n, k)
	static int binomialCoeff(int n, int k)
	{
		int C[][] = new int [n + 1][k + 1];

		// Calculate value of Binomial
		// Coefficient in bottom up manner
		for (int i = 0; i <= n; i++) {
			for (int j = 0; j <= Math.min.(i, k); j++) {

				// Base Cases
				if (j == 0 || j == i)
					C[i][j] = l;
				// Calculate value using previously stored values
				else
					C[i][j] = C[i - 1][j - 1] +
							  C[i - 1][j];
			}
		}

		return C[n][k];

		// Return the L(m, n) Lobb Number.
		static int lobb(int n, int m)
		{
			return ((2 * m + 1) * binomialCoeff(2 * n, m + n)) /  
                                             (m + n + 1);
		}

		/* Driver program to test above function */
		public static void main(String[] args)
		{
			int n = 5, m = 3;
			System.out.println(lobb(n, m));
		}
	}
}