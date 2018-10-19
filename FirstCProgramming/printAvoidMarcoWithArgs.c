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
 * 8) The macros with arguments should be avoided as they cause problems sometimes. And Inline functions should be preferred as there is type checking parameter evaluation in inline functions. From C99 onward, inline functions are supported by C language also.
 * For example consider the following program. From first look the output seems to be 1, but it produces 36 as output.
 */
#define square(x) x*x
int main()
{
	int x = 36/square(6); // Expended as 36/6*6
	printf("%d", x);
	return 0;
}
// Output: 36
// end of main function (printf, %d)