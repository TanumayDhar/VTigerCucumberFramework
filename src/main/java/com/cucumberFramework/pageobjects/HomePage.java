package com.cucumberFramework.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.helper.constants;

import bsh.org.objectweb.asm.Constants;

public class HomePage {

	private WebDriver driver;
	
	WaitHelper waithelper;
	//verify logged in to home page
	@FindBy(xpath = "//span[contains(text(),' Administrator')]")
	public WebElement administrator;

	//add all leads page web objects


	
	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Leads']")
	WebElement leadsLink;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Organizations']")
	WebElement organizationsLink;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Contacts']")
	WebElement contactsLink;

	@FindBy(xpath = "//table[@class='hdrTabBg']/tbody/tr//td/a[text()='Opportunities']")
	WebElement opportunitiesLInk;

	@FindBy(xpath = "//img[@alt='Create Lead...']")
	WebElement leadsButton;




	public HomePage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		waithelper = new WaitHelper(driver);


	}


	public void navigateToLeads()
	{
		leadsLink.click();



	}
	public void navigateToorganizationsLink()
	{



	}
	public void navigateTocontactsLink()
	{


	}

	public void navigateopportunitiesLInk()
	{

	}
	public void navigateToleadsButton()
	{

	}
	
	public WebElement getAdministrator() {
		waithelper.waitForElement(administrator, constants.getExplicitwait());
		
		return administrator;
	}

}







