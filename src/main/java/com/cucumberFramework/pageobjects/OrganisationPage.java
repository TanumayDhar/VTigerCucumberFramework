package com.cucumberFramework.pageobjects;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import com.cucumberFramework.helper.LoggerHelper;
import com.cucumberFramework.helper.WaitHelper;
import com.cucumberFramework.helper.constants;


public class OrganisationPage {


	WebDriver driver;

	WaitHelper waithelper =new WaitHelper(driver);
	Logger log=LoggerHelper.getLogger(OrganisationPage.class);

	@FindBy(xpath="//img[@title='Create Organization...']")
	WebElement clickOnOrganisationPlusButton;

	@FindBy(xpath="//input[@name='accountname']")
	WebElement organisationName;

	@FindBy(xpath="//input[@id='email1']")
	WebElement EmailId;

	

	@FindBy(xpath="//input[@id='phone']")
	WebElement phone;

	@FindBy(id="fax")
	WebElement Fax;

	@FindBy(id="ship_city")
	WebElement ShippingCity;

	@FindBy(xpath="//input[@title='Save [Alt+S]']")
	WebElement ClickOnSave;
	
	public OrganisationPage(WebDriver driver)
	{
		this.driver=driver;
		PageFactory.initElements(driver, this);
		waithelper=new WaitHelper(driver);
	}

	
	public void clickonOrganisationButtn()
	{
		waithelper.waitForElement(clickOnOrganisationPlusButton, constants.getExplicitwait());
		log.info("waiting for click on organisation plus button .....");
		clickOnOrganisationPlusButton.click();

	}


	public void CreationorganisationName(String orgaName)
	{
		log.info("Organisation name creation .... ");
		organisationName.clear();
		organisationName.sendKeys(orgaName);

	}

	public void CreationofEmailId(String email)
	{
		log.info("tickerName name creation .... ");
		EmailId.sendKeys(email);


	}
	
	public void CreationofShippingCity(String fax)
	{
		log.info("fax name creation .... ");
		Fax.sendKeys(fax);

	}

	public void Creationoffax(String shippingCity)
	{
		log.info("fax name creation .... ");
		ShippingCity.sendKeys(shippingCity);

	}
	public void phoneNumber(String pnum)
	{

		phone.sendKeys(pnum);
	}

	public void clickonSaveButton()
	{
		ClickOnSave.click();
	}

}
