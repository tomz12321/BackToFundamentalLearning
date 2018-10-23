
/**
 * Implementation for top down knapsack.
 * 
 * @param jefcha
 */
public class TopDownKnapsack extends KnapsackAlgor
{
	
	/**
	 * Top down knapsack.
	 * 
	 * @param ksProblem Knapsack instance.
	 */
	public TopDownKnapsack(Knapsack ksProblem) {
		super(ksProblem);
		
        // fill in rest of table
        for (int i = 1; i < mTable.length; i++) {
            for (int w = 1; w < mTable[i].length; w++) {
                mTable[i][w] = -1;
            }
        }

        // return bottom right value of table
        topDownKnapsackRecursive(ksProblem, ksProblem.itemNum()-1, ksProblem.weightCapacity());		
	} // end of TopDownKnapsack()	
	

    /**
     * This method is the main method to determine which entries in the table
     * we need to compute.
     * 
     * @param ksProblem Knapsack instance.
     * @param i Number of items to consider in sub-problem.
     * @param w Weight capacity to consider in sub-problem.
     * 
     * @return Total value for sub-problem with i items and w weight capacitiy.
     */
    protected int topDownKnapsackRecursive(Knapsack ksProblem, int i, int w)
    {
    	if (mTable[i][w] < 0) {
            int value;
    		if (w < ksProblem.getWeight(i)) {
                value = topDownKnapsackRecursive(ksProblem, i-1, w);
            }
    		else {
    			value = Math.max(topDownKnapsackRecursive(ksProblem, i-1, w) ,
    					ksProblem.getValue(i) + topDownKnapsackRecursive(ksProblem, 
    							i-1, w - ksProblem.getWeight(i))  );
    		}
    		mTable[i][w] = value;
    	}
    	return mTable[i][w];
    } // end of topDownKnapsackRecursive()

} // end of class TopDownKnapsack
