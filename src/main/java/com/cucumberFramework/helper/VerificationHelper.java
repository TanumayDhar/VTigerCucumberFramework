package com.cucumberFramework.helper;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class VerificationHelper {


	private WebDriver driver;

	private Logger log= LoggerHelper.getLogger(VerificationHelper.class);


	public VerificationHelper(WebDriver driver)
	{
		this.driver =driver;

	}

	public boolean elementIsDisplayed(WebElement element)
	{

		try {

			element.isDisplayed();
			log.info("Element is displayed ...");
			return true;

		}catch(Exception e)
		{
			log.error("Element not displayed  "+e.getCause());
			return false;
		}
	}
	public boolean elementIsNotDisplayed(WebElement element)
	{
		try {

			element.isDisplayed();
			log.info("Element is displayed"+element.getText());
			return false;


		}catch(Exception e)
		{
			log.info("Element is displayed  ");
			return true;
		}

	}

	public String getTitle(String title)
	{

		log.info("Title is  "+driver.getTitle());
		return driver.getTitle();
	}


}
