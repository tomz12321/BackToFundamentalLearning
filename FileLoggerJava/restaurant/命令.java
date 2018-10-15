package restaurant;

import java.io.Serializable;

/**
 * Created by JS-Zheng Practiced by Jyh-woei Yang on 2018/10/15
 */
public abstract class 命令 implements Cloneable, Serializable {

	protected 廚師 cook;

	public 命令(廚師 cook) {
		this.cook = cook;
	}

	public abstract void execute();

	public abstract void unExecute();

	@Override
	public Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}