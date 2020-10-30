package com.cucumberFramework.pageobjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.helper.constants;


public class LeadsVerificationPage {

	WebDriver driver;
	private WaitHelper waitHelper;
	private static Logger log = LoggerHelper.getLogger(LeadsVerificationPage.class);


	public LeadsVerificationPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		waitHelper=new WaitHelper(driver);


	}


	@FindBy(xpath="//*[@id='mouseArea_First Name']")
	WebElement firstName;
	//@FindBy(xpath="//*[@id='mouseArea_Last Name']") //correct xpath
	@FindBy(xpath="//*[@id='mouseArea_Last Name1']")// for failing the scenario		
	WebElement lastName;

	@FindBy(xpath="//*[@id='mouseArea_Company']")
	WebElement companyAddress;

	@FindBy(xpath="//*[@id='mouseArea_Street']")
	WebElement streetAddress;

	@FindBy(xpath="//*[@id='mouseArea_Email']")
	WebElement email;
	
	@FindBy(xpath="//td[@class='showPanelBg']/div/table/tbody/tr/td/span[1]")
	WebElement leadsCreationHeadersMsg;


	



	public void setLeadsCreationHeadersMsg(WebElement leadsCreationHeadersMsg) {
		this.leadsCreationHeadersMsg = leadsCreationHeadersMsg;
	}



	public WebElement getFirstName() {
		waitHelper.waitForElement(firstName, constants.getExplicitwait());
		return firstName;
	}



	public WebElement getLastName() {
		return lastName;
	}



	public WebElement getCompanyAddress() {
		return companyAddress;
	}



	public WebElement getStreetAddress() {
		return streetAddress;
	}



	public WebElement getEmail() {
		return email;
	}

	public WebElement getLeadsCreationHeadersMsg() {
		
		waitHelper.waitForElement(leadsCreationHeadersMsg, constants.getExplicitwait());
		return leadsCreationHeadersMsg;
	}






}
