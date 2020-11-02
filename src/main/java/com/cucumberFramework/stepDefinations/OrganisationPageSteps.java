package com.cucumberFramework.stepDefinations;
import org.apache.log4j.Logger;
import org.testng.Assert;

import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.pageobjects.OrganisationPage;
import com.cucumberFramework.pageobjects.OrganisationPageVerification;
import com.cucumberFramework.testBase.TestBase;
import com.cucumberFramework.verification.beans.OrganisationData;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


public class OrganisationPageSteps extends TestBase  {
	
	
	OrganisationPage orgaPage= new OrganisationPage(driver);
	Logger log= LoggerHelper.getLogger(OrganisationPageSteps.class);
	OrganisationPageVerification organisationPageVerification=new OrganisationPageVerification(driver);
	
	
    @Then("^I should able to see new organisation success message$")
    public void i_should_able_to_see_new_organisation_success_message() throws Throwable {
    	
    	
    	Assert.assertTrue(organisationPageVerification.getOrganisationVerification().getText().contains(OrganisationData.getOrganisationName()));
        
    }

    @And("^I click on organisation plus button$")
    public void i_click_on_organisation_plus_button() throws Throwable {
    	orgaPage.clickonOrganisationButtn();
  
    }

    @And("^I enter organisation Name as \"([^\"]*)\"$")
    public void i_enter_organisation_name_as_something(String strArg1) throws Throwable {
    	
    	orgaPage.CreationorganisationName(strArg1);
    }

 

    @And("^I enter Fax as \"([^\"]*)\"$")
    public void i_enter_fax_as_something(String strArg1) throws Throwable {
    	orgaPage.Creationoffax(strArg1);
    }

    @And("^I enter Email as \"([^\"]*)\"$")
    public void i_enter_email_as_something(String strArg1) throws Throwable {
    	orgaPage.CreationofEmailId(strArg1);
    }

    @And("^enter phone as \"([^\"]*)\"$")
    public void enter_phone_as_something(String strArg1) throws Throwable {
    	orgaPage.phoneNumber(strArg1);
    }

    @And("^enter ShippingCity as \"([^\"]*)\"$")
    public void enter_shippingcity_as_something(String strArg1) throws Throwable {
    	orgaPage.CreationofShippingCity(strArg1);
    }

    @And("^I click Save button$")
    public void i_click_save_button() throws Throwable {
    	orgaPage.clickonSaveButton();
    }


}
