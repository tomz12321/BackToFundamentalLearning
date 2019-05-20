//package com.tomz12321.service;
 
import java.util.ArrayList;
import java.util.List;
 
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
 
import com.tomz12321.domain.Person;
 
public class PersonService {
 
	private DBOpenHelper dbOpenHelper;
	
	public PersonService(Context context){
		this.dbOpenHelper = new DBOpenHelper(context);
	}
	
	//添加
	public void save(Person person){
		//如果要对数据进行更改，就调用此方法得到用于操作数据库的实例,该方法以读和写方式打开数据库
		SQLiteDatabase db = dbOpenHelper.getWritableDatabase();
		db.execSQL("insert into person(name, amount) values(?,?)", new Object[]{person.getName(), person.getAmount()});
	}
	
	//更新
	public void update(Person person){
		SQLiteDatabase db = dbOpenHelper.getWritableDatabase();
		db.execSQL("update person set name=? where personid=?", new Object[]{person.getName(), person.getId()});
	}
	
	//删除
	public void delete(Integer id){
		SQLiteDatabase db = dbOpenHelper.getWritableDatabase();
		db.execSQL("delete from person  where personid=?", new Object[]{id});
	}
	
	//查找
	public Person find(Integer id){
		//如果只对数据进行读取，建议使用此方法
		SQLiteDatabase db = dbOpenHelper.getReadableDatabase();
		Cursor cursor = db.rawQuery("select * from person where personid=?", new String[]{id.toString()});
		if(cursor.moveToNext()){
			int personid = cursor.getInt(cursor.getColumnIndex("personid"));
			String name = cursor.getString(cursor.getColumnIndex("name"));
			int amount = cursor.getInt(cursor.getColumnIndex("amount"));
			Person person = new Person(personid, name, amount);
			return person;
		}
		return null;
	}
	
	//分页查找
	public List<Person> getScrollData(Integer offset, Integer maxResult){
		List<Person> personList = new ArrayList<Person>();
		//如果只对数据进行读取，建议使用此方法
		SQLiteDatabase db = dbOpenHelper.getReadableDatabase();
		Cursor cursor = db.rawQuery("select * from person limit ?,?", new String[]{offset.toString(), maxResult.toString()});
		while(cursor.moveToNext()){
			int personid = cursor.getInt(cursor.getColumnIndex("personid"));
			String name = cursor.getString(cursor.getColumnIndex("name"));
			int amount = cursor.getInt(cursor.getColumnIndex("amount"));
			Person person = new Person(personid, name, amount);
			personList.add(person);
		}
		cursor.close();
		return personList;
	}
	
	public Cursor getCursorScrollData(Integer offset, Integer maxResult){
		SQLiteDatabase db = dbOpenHelper.getReadableDatabase();
		return db.rawQuery("select * from person limit ?,?", new String[]{offset.toString(), maxResult.toString()});
	}
	
	//获取总数
	public long getCount(){
		SQLiteDatabase db = dbOpenHelper.getReadableDatabase();
		Cursor cursor = db.rawQuery("select count(*) from person", null);
		cursor.moveToFirst();
		return cursor.getLong(0);
	}
	
	//事务操作
	public void payment(){
		SQLiteDatabase db = dbOpenHelper.getWritableDatabase();
		db.beginTransaction();
		try{
			db.execSQL("update person set amount=amount+50 where personid=?", new Object[]{1});
			db.execSQL("update person set amount=amount-50 where personid=?", new Object[]{2});
			db.setTransactionSuccessful();//设置事务标志为成功，当结束事务时就会提交事务
		}finally{
			db.endTransaction();
		}
	}
}