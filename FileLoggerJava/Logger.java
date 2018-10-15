

/**
 * 4. Command Pattern
 * Refer from https://github.com/JS-Zheng/blog/
 */
public interface Logger {

	void writeFile(String pathName, Object object);

	Object readFile(String pathName);
}