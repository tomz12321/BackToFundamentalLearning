// 必須要先對Java的Web Application有概念
// 才能繼續研究下去
// 一個Java的Web Application裡面會包含Servlet, JSP, web.xml(web應用程式描述檔), 程式庫(*.jar)等等檔案，以特定的目錄結構放置
// 上面例子中的.java檔是servlet的程式碼
// 通常會先編譯成.class的二進位檔案
// 然後會放在YourWebApp/WEB-INF/classes/{package(如果有的話) path}/ABC.class
// 然後在YourWebApp/WEB-INF/web.xml檔中設定該servlet的相關資訊
// 就可以使用了(當然YourWebApp要deploy在符合標準的Container上，例如Tomcat)
// 要學習完整的知識，建議你可以去買servlet/JSP相關的書來看

//ABC.java (Servlet)

public void doPost(HttpServletRequest req, HttpServletResponse res) {
	String a = "abc";
	String b = "def";
	req.setAttribute("str_a", a);
	req.setAttribute("str_b", b);
	request.getRequestDispatcher("DEF.jsp").forward(req, res);
}
