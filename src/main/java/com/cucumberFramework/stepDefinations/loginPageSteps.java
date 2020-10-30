package com.cucumberFramework.stepDefinations;

import org.apache.log4j.Logger;

import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.helper.constants;
import com.cucumberFramework.pageobjects.HomePage;
import com.cucumberFramework.pageobjects.loginPage;
import com.cucumberFramework.testBase.TestBase;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginPageSteps extends TestBase{


	loginPage loginpge=new loginPage(driver);
	WaitHelper waitHelper;


	@Given("^I am on the Login page URL \"([^\"]*)\"$")
	public void i_am_on_the_login_page_url_something(String strArg1) throws Throwable {

		driver.get(strArg1);
		waitHelper=new WaitHelper(driver);
		waitHelper.waitForElement(loginpge.userName, constants.getExplicitwait());
		System.out.println("helo");
	}

	@When("^I enter username as \"([^\"]*)\"$")
	public void i_enter_username_as_something(String strArg1) throws Throwable {
		loginpge.enterUsername(strArg1);
	}

	@Then("^I should see Log In Page$")
	public void i_should_see_log_in_page() throws Throwable {

		
		loginpge.userName.isDisplayed();

	}

	@And("^I enter password as \"([^\"]*)\"$")
	public void i_enter_password_as_something(String strArg1) throws Throwable {
		loginpge.enterPassword(strArg1);
	}

	@And("^click on login button$")
	public void click_on_login_button() throws Throwable {
		loginpge.clickLoginButton();
	}



}
