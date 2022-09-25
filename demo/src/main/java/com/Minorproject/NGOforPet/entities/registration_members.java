package com.Minorproject.NGOforPet.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class registration_members {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private long phno;
	private int age;
	private String name;
	private String city;
	private String emailid;
	private String occupation;
	public registration_members(int id, long phno, int age, String name, String address, String emailid,
			String occupation) {
		super();
		this.id = id;
		this.phno = phno;
		this.age = age;
		this.name = name;
		this.city = address;
		this.emailid = emailid;
		this.occupation = occupation;
	}
	public registration_members() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public long getPhno() {
		return phno;
	}
	public void setPhno(long phno) {
		this.phno = phno;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getEmailid() {
		return emailid;
	}
	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	@Override
	public String toString() {
		return "registration_members [id=" + id + ", phno=" + phno + ", age=" + age + ", name=" + name + ", address="
				+ city + ", emailid=" + emailid + ", occupation=" + occupation + "]";
	}
	
	
}
