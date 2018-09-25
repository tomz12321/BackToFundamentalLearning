//Question

//比如說JAVA有個變數值﹝String a = "abc";﹞

// 要怎麼把這個變數傳給JSP網頁呢??
// 讓JSP能夠接收到這個值

// 這樣看你的那個含有變數值﹝String a = "abc";﹞的Java 是什麼樣的程式(POJO? Servlet?)
// 如果是Servlet 的話方法很多
// 基本上放在request 裡然後forward 給JSP 是最常見的做法
// 例如:
// ABC.java (Servlet)

public void doPost(HttpServletRequest req, HttpServletResponse res){
	String a = "abc";
	req.setAttribute("str_a", a);
	request.getRequestDispatcher("DEF.jsp").forward(req, res);
}
