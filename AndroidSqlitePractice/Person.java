//package com.tomz12321.domain;

public class Person {
	private Integer id;
	private String name;
	private Integer amount;
 
	public Person(){}
	
	public Person(Integer id, String name, Integer amount) {
		this.id = id;
		this.name = name;
		this.amount = amount;
	}
 
	public Integer getAmount() {
		return amount;
	}
 
	public void setAmount(Integer amount) {
		this.amount = amount;
	}
 
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
 
	@Override
	public String toString() {
		return "Person [id=" + id + ",amount=" + amount + ", name=" + name
				+ "]";
	}
}