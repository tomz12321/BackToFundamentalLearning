package restaurant;

/**
 * Created by JS-Zheng Practice by Jyh-woei Yang on 2018/10/15
 */
public class 點豬排命令 extends 命令 {


	public 點豬排命令 (廚師 cook) {
		super(cook);
	}

	@Override
	public void execute() {
		cook.cookPork();
	}

	@Override
	public void unExecute(){
		cook.cancelPork();
	}
}