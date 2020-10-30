package com.cucumberFramework.verification.beans;

public class LeadsData {

	private static String firstName;
	private static String lastName;
	private static String companyName;
	private static String streetAddress;
	private static String email;



	public static String getFirstName() {
		return firstName;
	}
	public static void setFirstName(String firstName) {
		LeadsData.firstName = firstName;
	}
	public static String getLastName() {
		return lastName;
	}
	public static void setLastName(String lastName) {
		LeadsData.lastName = lastName;
	}
	public static String getCompanyName() {
		return companyName;
	}
	public static void setCompanyName(String companyName) {
		LeadsData.companyName = companyName;
	}
	public static String getStreetAddress() {
		return streetAddress;
	}
	public static void setStreetAddress(String streetAddress) {
		LeadsData.streetAddress = streetAddress;
	}
	public static String getEmail() {
		return email;
	}
	public static void setEmail(String email) {
		LeadsData.email = email;
	}


}
