/* 1.字符的 Unicode 表示法 */

/* Javascript 允許採用 \uxxxx 形式表示一個字符，其中xxxx表示字符的 Unicode 碼點 */
"\u0061"
// "a"

/* 
 * 但是，這種表示法只限於碼點在 \u0000~\uFFFF 之間的字符。超出這個範圍的字符，
 * 必須用兩個雙字節的形式表示。 
 */


"\uD842\uDFB7"
// "𠮷"

"\u20BB7"
// " 7"

/* 
 * 上面代碼表示，如果直接在\u後面跟上超過 0xFFFF的數值（比如\u20BB7），
 * Javascript會理解成 \u20BB+7。由於\u20BB是一個不可打印字符，所以只會顯示一/
 * 個空格，後面跟著一個7。
 */

/* ES6 對這一點作出了改進，只要將碼點放入大括號，就能正確解讀該字符。 */

"\u{20BB7}"
// "𠮷"
"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} //123

'\u{1F680}' === '\uD83D\uDE80'// true

/* 
 * 上面代碼中，最後一個例子表明，大括號表示法與四字節的 UTF-16 編碼是等價的。
 * 有了這種表示法之後，Javascript 共有六種方法可以表示一個字符。
 */

'\z' === 'z' //true
'\172' === 'z' //true
'\x7A' === 'z' //true
'\u007A' === 'z' //true
'\u{7A}' === 'z' //true

/* 2.codePointAt() */

var s = "𠮷";

s.length //2
s.charAt(0) // ''
s.charAt(1) // ''
s.chatCodeAt(0) // 55362
s.chatCodeAt(1) // 57271

/* 
 * ES6 提供了 codePointAt 方法能夠正確處理 4 個字符儲存的字符，返回一個字符
 * 的碼點。
 */

let s = '𠮷a';
s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97

/* codePointAt方法返回的是碼點的十進制值，如果想要十六進制的值，可以使用toString方法轉換一下。 */

let s = '𠮷a';
s.codePointAt(0).toString(16) // "20bb7"
s.codePointAt(2).toString(16) // "61"

/*
 * 你可能注意到了，codePointAt方法的參數，仍然是不正確的。比如，上面代碼中，
 * 字符a在字符串s的正確位置序號應該是 1，但是必须向codePointAt方法傳入 2。
 * 解決這個問题的一個辦法是使用for...of循環，因爲它會正確識别 32 位的 UTF-16 
 * 字符。
 */

let s = '𠮷a';
for (let ch of s){
	console.log(ch.codePointAt(0).toString(16));
}
// 20bb7
// 61

/* codePointAt方法是測試一個字符由兩個字節還是由四個字節组成的最簡單方法。*/
function is32Bit(c){
	return c.codePointAt(0) > 0xFFFF;
}

is32Bit("𠮷") //true
is32Bit("a") // false

/* 3. String.fromCodePoint() */

/* ES5 提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能
 * 识别 32 位的 UTF-16 字符（Unicode 编号大于0xFFFF）。
 */
String.fromCharCode(0x20BB7)
// "ஷ"

/*
 * 上面代码中，String.fromCharCode不能识别大于0xFFFF的码点，所以0x20BB7就
 * 发生了溢出，最高位2被舍弃了，最后返回码点U+0BB7对应的字符，而不是码点
 * U+20BB7对应的字符。
 */


/* 
 * ES6 提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了
 * String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。
 */

String.fromCodePoint(0x20BB7)
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'
// true

/* 
 * 上面代码中，如果String.fromCodePoint方法有多个参数，则它们会被合并成一个
 * 字符串返回。
 */

/* 
 * 注意，fromCodePoint方法定义在String对象上，而codePointAt方法定义在字符
 * 串的实例对象上。
 */

/* 4. 字符串遍歷器接口 */

/* 
 * ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被
 * for...of循环遍历。
 */

for (let codePoint of 'foo'){
	console.log(codePoint)
}
// "f"
// "o"
// "o"

/* 
 * 除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for
 * 循环无法识别这样的码点。
 */

let text = String.fromCodePoint(0x20BB7);

for (let i = 0; i < text.length; i++){
	console.log(text[i]);
}
// " "
// " "

for (let i of text){
	console.log(i);
}
// "𠮷"

/* 
 * 上面代码中，字符串text只有一个字符，但是for循环会认为它包含两个字符（都不
 * 可打印），而for...of循环会正确识别出这一个字符。
 */
