//Unlike C, in C++, both of the above programs fails in compilation. In C++, both fun() and fun(void) are same.
//So the difference is, in C, int main() can be called with any number of arguments, but int main(void) can only be called without any argument. Although it doesn’t make any difference most of the times, using “int main(void)” is a recommended practice in C.

#include <stdio.h>
int main()
{
	static int i = 5;
	if(--i){
		printf("%d", i);
		main(10);
	}
}

//Output 5 to 0