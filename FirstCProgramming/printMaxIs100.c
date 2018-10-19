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
 * Practiced by Jyh-woei Yang (Tom) on 2018/10/19
 */

#include<stdio.h>
#define max 100
int main()
{
	printf("max is %d", max);
	return 0;
}
// Output: max is 100
// Note that the max inside "" is not replaced