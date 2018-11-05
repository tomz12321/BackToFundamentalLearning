/*
 * Escape Sequences in C
 * In C programming language, there are 256 numbers of characters in character set. 
 * The entire character set is divided into 2 parts i.e. the ASCII characters set 
 * and the extended ASCII characters set. But apart from that, some other characters
 *  are also there which are not the part of any characters set, known as ESCAPE characters.
 *
 * Source: https://www.geeksforgeeks.org/escape-sequences-c/
 * Practice by Jyh-woei Yang (Tom) om 2018/11/05
 */

// List of Escape Sequences

// \a    Alarm or Beep   
// \b    Backspace
// \f    Form Feed
// \n    New Line
// \r    Carriage Return
// \t    Tab (Horizontal)
// \v    Vertical Tab
// \\    Backslash
// \'    Single Quote
// \"    Double Quote
// \?    Question Mark
// \ooo  octal number
// \xhh  hexadecimal number
// \0    Null

// C program to illustrate 
// \a escape sequence 
#include <stdio.h> 
int main(void) 
{ 
	printf("My mobile number "
		"is 7\a8\a7\a3\a9\a2\a3\a4\a0\a8\a"); 
	return (0); 
} 

//Output: My moblie number is 7873923408