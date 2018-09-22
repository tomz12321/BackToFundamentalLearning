/**
 * 陣列 可說是最簡單、也最重要的資料結構，
 * 它可用來表示方程式、矩陣…，
 * 也時常做為其他資結的構成基礎 (e.g., 堆疊、佇列、完整二元樹)。
 *
 * @author Jyh-woei Yang (Tom)
 */
import java.io.*;


public class TwoDArray {

	private int[][] a = new int[3][4];
	//int[][] yearlySales = new int[5][4];
	public TwoDArray(){
		// intialise instance variables
		a = new int[][]{{3,3,0},{9,5,2,7}};
	}

	// int[][] yearlySales =
 //            new int[][]{{0, 1, 2, 3},
 //                            {4, 5, 6, 7},
 //                            {8, 9, 10, 11}};

	public static void main(String[] args){
		
		TwoDArray anArray = new TwoDArray();
		System.out.println("anArray.a[0][0] = " + anArray.a[0][0] + "");
		System.out.println("anArray.a[0][1] = " + anArray.a[0][1] + "");
		System.out.println("anArray.a[0][2] = " + anArray.a[0][2] + "");
		System.out.println("anArray.a[1][0] = " + anArray.a[1][0] + "");
		System.out.println("anArray.a[1][1] = " + anArray.a[1][1] + "");
		System.out.println("anArray.a[1][2] = " + anArray.a[1][2] + "");
		System.out.println("anArray.a[1][3] = " + anArray.a[1][3] + "");
		int[][] yearlySales = {{0, 1, 2, 3},
                {4, 5, 6, 7},
                {8, 9, 10, 11}};
        for (int i = 0; i < yearlySales.length; i++){
            for (int j = 0; j < yearlySales[i].length; j++){
                System.out.print(yearlySales[i][j] + " ");
            }
            System.out.println();
        }
	}
}

// 透過索引:
// a[0][0] 可取得 3， a[0][1] 可取得 3， a[0][2] 可取得 0，
// a[0][3] 將拋出 陣列索引值超出範圍例外 (Array Index Out Of Bounds Exception)。