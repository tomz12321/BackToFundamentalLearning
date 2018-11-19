/*
 * countBattleships in Python
 * In Python programming language, 
 * We use DFS to traverse the board, and we mark and explore every single 'X' spot.
 * Counting at the same time.
 *
 * Source: http://massivealgorithms.blogspot.com/2016/10/leetcode-419-battleships-in-board.html
 * Practice by Jyh-woei Yang (Tom) on 2018/11/20
 */

def countBattleships(self, board):
	"""
	:type board: List[List[str]]
	:rtype: int
	"""
	vs = set()
	h = len(board)
	w = len(board[0]) if h else 0

	def dfs(x, y):
		for dx, dy in zip((1, 0, -1, 0), (0, 1, 0 ,-1)):
			nx, ny = x + dx, y + dy
			if 0 <= nx < h and 0 <= ny < w:
				if (nx, ny) not in vs and board[nx][ny] == 'X':
					vs.add((nx, ny))
					dfs(nx, ny)

	ans = 0
	for x in range(h):
		for y in range(w):
			if (x, y) not in vs and board[x][y] == 'X':
				ans += 1
				vs.add((x, y))
				dfs(x, y)
	return ans
//end of function countBattleships()