/**
 * Beginning with C programming:
 *
 * 1) Finding a Compiler:
 *  Before we start C programming, we need to have a compiler to compile and run our programs. There are certain online compilers like https://ide.geeksforgeeks.org/, http://ideone.com/ or http://codepad.org/ that can be used to start C without installing a compiler.
 *
 * Windows: There are many compilers available freely for compilation of C programs like Code Blocks  and Dev-CPP.   We strongly recommend Code Blocks.
 *
 * Linux: For Linux, gcc comes bundled with the linux,  Code Blocks can also be used with Linux.
 * 
 * Source: https://www.geeksforgeeks.org/interesting-facts-preprocessors-c/
 * Practiced by Jyh-woei Yang (Tom) on 2018/10/20
 *
 * 7) The macros can be written in multiple lines using ‘\’. The last line doesn’t need to have ‘\’.
 */
#include<stdio.h>
#define PRINT(i, limit) while (i < limit) \
{ \
	printf("GeeksQuiz "); \
	i++; \
}
// end of marco PRINT(i, limit)

int main()
{
	int i = 0;
	PRINT(i, 3);
	return 0;
}
// Output: GeeksQuiz GeeksQuiz GeeksQuiz
// end of main function()