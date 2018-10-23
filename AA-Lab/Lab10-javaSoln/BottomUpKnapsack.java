
/**
 * Implementation for bottom up knapsack.
 * 
 * @param jefcha
 */
public class BottomUpKnapsack extends KnapsackAlgor
{
	
	/**
	 * Bottom up knapsack.
	 * 
	 * @param ksProblem Knapsack instance.
	 */
	public BottomUpKnapsack(Knapsack ksProblem) {
		super(ksProblem);
				
		// use bottom up approach to fill in all of the table
        for (int i = 1; i < mTable.length; i++) {
            for (int w = 0 ; w < mTable[i].length; w++) {
                if (w - ksProblem.getWeight(i) >= 0 ) {
                    mTable[i][w] = Math.max(mTable[i-1][w],
                        (ksProblem.getValue(i) + mTable[i-1][w - ksProblem.getWeight(i)]) );
                } else {
                    mTable[i][w] = mTable[i-1][w];
                }
            }
        }
	} // end of BottomUpKnapsack()
	

} // end of class BottomUPKnapsack
