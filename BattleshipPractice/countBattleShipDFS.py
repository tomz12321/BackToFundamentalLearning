/*
 * countBattleships in Python
 * 
 * Basic idea: If any 'X' has more than one neighbors is 'X' then these connected 'X' cannot form a valid Battleship.
 *
 * In Python programming language, 
 * We use DFS to traverse the board, and we mark and explore every single 'X' spot.
 * Counting at the same time.
 *
 * Source: http://massivealgorithms.blogspot.com/2016/10/leetcode-419-battleships-in-board.html
 * Practice by Jyh-woei Yang (Tom) on 2018/11/20
 */

public int countBattleships(char[][] board) {
        int M = board.length;
        int N = board[0].length;
        boolean[][] marked = new boolean[M][N];
        int cnt = 0;
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < N; j++) {
                if (board[i][j] == 'X' && !marked[i][j] && dfs(board, i, j, marked)) cnt++; 
            }
        }
        return cnt;
    }
    
    public boolean dfs(char[][] board, int r, int c, boolean[][] marked) {
        marked[r][c] = true;
        int[] direct = {1, 0, -1, 0, 1};
        int cnt = 0;
        boolean res = true;
        for (int i = 0; i < 4; i++) {
            int newR = r + direct[i];
            int newC = c + direct[i + 1];
            if (newR >= 0 && newR < board.length && newC >= 0 && newC < board[0].length && !marked[newR][newC] && board[newR][newC] == 'X') {
                cnt++;
                if (!dfs(board, newR, newC, marked)) res = false;
            }
        }
        return cnt > 1 || res;
    }