package com.cucumberFramework.stepDefinations;

import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.helper.constants;
import com.cucumberFramework.pageobjects.HomePage;
import com.cucumberFramework.testBase.TestBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageSteps extends TestBase{


	HomePage homepage=new HomePage(driver);
	WaitHelper waithelper=new WaitHelper(driver);

	@Then("^I sould see application homepage$")
	public void i_sould_see_application_homepage() throws Throwable {

		homepage.getAdministrator().isDisplayed();

	}
	@And("^I sould see administrator text message on home Page$")
	public void i_sould_see_administrator_text_message_on_home_page() throws Throwable {

		homepage.getAdministrator().isDisplayed();
	}

	@When("^I click on leads link$")
	public void i_click_on_leads_link() throws Throwable {
		homepage.navigateToLeads();
	}

	@When("^I click on organisation link$")
	public void i_click_on_organisation_link() throws Throwable {

		waithelper.waitForElement(homepage.organizationsLink, constants.getExplicitwait());
		homepage.navigateToorganizationsLink();
	}


}
