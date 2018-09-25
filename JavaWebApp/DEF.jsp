<%
	//就是request.getAttribute() 傳回的一定是Object 型態
	//必須要自己向下轉型
	//像這樣
	// String a = (String)request.getAttribute("str_a");
	// String b = (String)request.getAttribute("str_b");
	String a = (String)request.getAttribute("str_a");
%>
<html>
<body>
至於 Java 與 Servlet 的關係 <br/>
要完整的說那將會是長篇大論 <br/>
簡單的說 <br/>
Java 是一種程式語言 <br/>
而不管是Servlet, JSP, Applet 等等都是Java 在WEB 技術上的一種應用 <br/>
至於其中詳細的學問 <br/>
建議你去買幾本像是<a href="http://www.gotop.com.tw/waweb2004/home/home.aspx?pg=HM010X&bn=ACL020500">JAVA 2全方位學習</a>和<a href="http://www.gotop.com.tw/waweb2004/home/home.aspx?pg=HM010X&bn=ACL016200">
JSP 2.0技術手冊</a>這類的書來看看，相信你很快會搞清楚這些來龍去脈的。<br/>
</body>
</html>