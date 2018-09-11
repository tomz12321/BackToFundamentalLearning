//1.字符的 Unicode 表示法

//Javascript 允許採用 \uxxxx 形式表示一個字符，其中xxxx表示字符的 Unicode 碼點
"\u0061"
// "a"

//但是，這種表示法只限於碼點在 \u0000~\uFFFF 之間的字符。超出這個範圍的字符，
//必須用兩個雙字節的形式表示。

"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"

//上面代碼表示，如果直接在\u後面跟上超過 0xFFFF的數值（比如\u20BB7），
//Javascript會理解成 \u20BB+7。由於\u20BB是一個不可打印字符，所以只會顯示一/
//個空格，後面跟著一個7。

//ES6 對這一點作出了改進，只要將碼點放入大括號，就能正確解讀該字符。

"\u{20BB7}"
// "𠮷"
"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} //123

'\u{1F680}' === '\uD83D\uDE80'// true

//上面代碼中，最後一個例子表明，大括號表示法與四字節的 UTF-16 編碼是等價的。
//有了這種表示法之後，Javascript 共有六種方法可以表示一個字符。

'\z' === 'z' //true
'\172' === 'z' //true
'\x7A' === 'z' //true
'\u007A' === 'z' //true
'\u{7A}' === 'z' //true

//2.codePointAt()

var s = "𠮷";

s.length //2
s.charAt(0) // ''
s.charAt(1) // ''
s.chatCodeAt(0) // 55362
s.chatCodeAt(1) // 57271

//ES6 提供了 codePointAt 方法能夠正確處理 4 個字符儲存的字符，返回一個字符
//的碼點。

let s = '𠮷a';
s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97

//codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下。

let s = '𠮷a';
s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"

//你可能注意到了，codePointAt方法的参数，仍然是不正确的。比如，上面代码中
//，字符a在字符串s的正确位置序号应该是 1，但是必须向codePointAt方法传入 2。
//解决这个问题的一个办法是使用for...of循环，因为它会正确识别 32 位的 UTF-16 
//字符。

let s = '𠮷a';
for (let ch of s){
	console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61

//codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。
function is32Bit(c){
	return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷") //true
is32Bit("a") // false


