import java.util.*;
import java.io.*;

/**
 * Compute breadth first search traversal on a graph.
 * 
 * @author jefcha
 */
public class BFS 
{   
    /** Class name. */
    private static final String progName = "BFS";
	
    /** 
     * Breadth first search traversal of input graph g from seed vertex s.
     * 
     * @param g Input graph.
     * @param s Seed vertex to start traversal from.
     * 
     * @returns ArrayList of vertices, stored in the order they were visited in 
     *      BFS traversal.
     */
    public static ArrayList<Integer> traverse(Graph g, int s) {
    	ArrayList<Integer> traversalOrder = new ArrayList<Integer>();
    	
	// IMPLEMENT ME
    	boolean[] marked = new boolean[g.vertNum()];
    	for (int i = 0; i < marked.length ; i++)
    		marked[i]=false;
    	//initialize queue
    	Queue<Integer> q = new ArrayDeque<Integer>();
    	marked[s] = true;
    	q.add(s);
    	
    	while(!q.isEmpty())
    	{
    		int v = q.remove(); //source vertise
    		traversalOrder.add(v);
    		for(int w: g.neighbours(v))
    		{
    			if (marked[w] == false)
    			{
        			marked[w] = true;
        			q.add(w);
    			}
    		}
    	}
    			
    	// Input: Graph G(V,E) , seed/starting vertex s.
    	// Output: Graph G with its vertices mark with consecutive integers in the order that they are traversed/visited
    	// g.neibours(v)
    	
    	/*	1. //variable that stores the visitation order
    	 *  2. order = 0;
    	 *  3. // mark all vertices unvisited
    	 *  4. for i = 0 to v do 
    	 *  5. Marked[i]
    	 *  ...
    	 *  
    	 */  
        
        return traversalOrder;
    } // end of traverse()
    
    
    /**
     * Print out usage messge and exits from program.
     */
    protected static void usage() {
    	System.err.println(BFS.progName + ": <input graph file> <starting vertex>");
    	System.exit(1);
    }

    
    /**
     * Perform BFS traversal for input graph.
     */
    public static void main(String[] args) {
    	if (args.length != 2) {
    		usage();
    	}
    	
    	try {
            // input graph
            InputStream in = new FileInputStream(args[0]);
            Graph g = new Graph(in);
        
            // seed vertex
            int s = Integer.parseInt(args[1]);
    		
            // perform BFS
            ArrayList<Integer> traversalOrder = BFS.traverse(g, s);

            // print out the traversal order of the BFS
            Iterator<Integer> it = traversalOrder.iterator();
            while (it.hasNext()) {
            	System.out.print(it.next() + " ");
            }
            
            System.out.println("");
    	} 
    	catch (FileNotFoundException e) {
            System.err.println(e.getMessage());
    	}
    } // end of main()


} // end of class BFS
