package com.cucumberFramework.pageobjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.helper.constants;


public class OrganisationPageVerification {
	WebDriver driver;
	WaitHelper waithelper=new WaitHelper(driver);
	private static Logger log = LoggerHelper.getLogger(LeadsVerificationPage.class);
	
	@FindBy(xpath="//*[@id=\"mouseArea_Organization Name\"]")
	WebElement organisationVerification;
	
	
	public OrganisationPageVerification(WebDriver driver)
	{
		this.driver=driver;
		
	}
	
	
	
	public WebElement getOrganisationVerification() {
		log.info("waiting to verify ...  ");
		//waithelper.waitForElement(organisationVerification, constants.getExplicitwait());
		return organisationVerification;
	}

}
