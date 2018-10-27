import java.util.*;


/**
 * Binary search tree implementation.
 *
 * @author jefcha
 */
public class BST
{
	public static final int EMPTY_TREE = -1;

        /** Root node of the tree. */
	protected Node mRoot;


	public BST() {
		mRoot = null;
	} // end BST()s



	/**
     * Add key to tree.
     *
     * @param key Key to insert into BST.
     */
	public void insert(int key) {
		mRoot = insert(mRoot, key);
	} // end of insert()


    /**
     * Recursive method to add key to tree.
     *
     * @param root Root node of tree to add 'key'.
     * @param key Key to add to tree.
     * @return Update root node.
     */
	protected Node insert(Node root, int key) {
		// check if root is empty
		if (root == null) {
			root = new Node(key);
		}
		else if (key < root.mKey) {
			root.mLeftChild = insert(root.mLeftChild, key);
		}
		else if (key > root.mKey) {
			root.mRightChild = insert(root.mRightChild, key);
		}
		else {
			// duplicate value, we do not insert into tree
		}


		return root;
	} // end of insert()



	/**
     * Add key to tree.
     *
     * @param key key to search for.
	 * @return True if key is in the BST, otherwise false.
     */
	public boolean search(int key) {
		// IMPLEMENT ME

		// This is a placeholder -- REPLACE
		return false;
	}




	/**
     * Inorder traversal of tree.
     */
	public void inorder() {
		inorder(mRoot);
		System.out.println("");
	} // end of inorder()


    /**
     * Inorder traversal of tree.
     *
     * @param root Root node of tree.
     */
	protected void inorder(Node root) {
		if (root == null) {
			return;
		}

		inorder(root.mLeftChild);
		// In general, might be better to use a function object here, but for this lab, we just print to stdout
		System.out.print(root.mKey + " ");
		inorder(root.mRightChild);
	} // end of inorder()



    /**
     * Preorder traversal of tree.
     */
	public void preorder() {
		preorder(mRoot);
		System.out.println("");
	} // end of preorder


    /**
     * Preorder traversal of tree.
     *
     * @param root Root node of the tree.
     */
	protected void preorder(Node root) {
		if (root == null) {
			return;
		}

		// In general, might be better to use a function object here, but for this lab, we just print to stdout
		System.out.print(root.mKey + " ");
		preorder(root.mLeftChild);
		preorder(root.mRightChild);
	} // end of preorder


    /**
     * Postorder traversal of tree.
     */
	public void postorder() {
		postorder(mRoot);
		System.out.println("");
	} // end of postorder


    /**
     * Postorder traversal of tree.
     *
     * @param root Root node of the tree.
     */
	protected void postorder(Node root) {
		if (root == null) {
			return;
		}

		postorder(root.mLeftChild);
		postorder(root.mRightChild);
		// In general, might be better to use a function object here, but for this lab, we just print to stdout
		System.out.print(root.mKey + " ");
	} // end of postorder()





    /**
     * Print out tree in ascii text.
     */
    public void asciiPrint() {
        AsciiPrinter.printNode(mRoot);
    } // end of printAscii()


    /**
     * Find minimum key in tree.
     *
     * @return Minimum key in tree.
     */
	public int min() {
		// IMPLEMENT ME;

		// This is a placeholder -- REPLACE
		return -1;
	} // end of min()


	/**
	 * Find and return the node of the tree with root node 'root'.
	 *
	 * @param root Root node of tree.
	 *
	 * @return Node that contains the smallest element in the tree.
	 */
	protected Node min(Node root) {
		// IMPLEMENT ME

		// This is a placeholder -- REPLACE
		return null;
	} // end of min()



    /**
     * Find maximum key in tree.
     *
     * @return Maximum key in tree.
     */
	public int max() {
		// IMPLEMENT ME;

		// This is a placeholder -- REPLACE
		return -1;
	} // end of max()




    /**
     * Compute the height of the tree.
     *
     * @return Height of tree.
     */
	public int height() {
		// IMPLEMENT ME;

		// This is a placeholder -- REPLACE
		return -1;
	} // end of height()


} // end of class BST



/**
 * Inner class implementation of a node.
 *
 * @author jefcha
 */
class Node
{
        /** For this lab, we only store ints, but in general we can store any object/type that is Comparable. */
        public int mKey;
        /** Reference to left child. */
        public Node mLeftChild;
        /** Reference to right child. */
        public Node mRightChild;


        /**
         * Constructor.
         *
         * @param key Key to store in node.
         */
        public Node(int key) {
                mKey = key;
                mLeftChild = null;
                mRightChild = null;
        }


        /**
         *
         * @return Key stored in node.
         */
        public int key() {
            return mKey;
        } // end of getKey()


        /**
         *
         * @return Reference to left child of node.
         */
        public Node leftChild() {
            return mLeftChild;
        } // end of leftChild()


        /**
         *
         * @return Reference to right child of node.
         */
        public Node rightChild() {
            return mRightChild;
        } // end of rightChild()

} // end of class Node
