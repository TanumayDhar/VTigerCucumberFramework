package com.cucumberFramework.helper;

import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WaitHelper {

	Logger logger=LoggerHelper.getLogger(WaitHelper.class);
	
	private WebDriver driver;
	
	public WebDriverWait wait;
	
	public WaitHelper(WebDriver driver)
	{
		this.driver=driver;


	}


	public void waitForElement(WebElement element, long timeOutInSeconds)
	{
		logger.info("Waiting for element to visible ....");
		wait=new WebDriverWait(driver, timeOutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
		logger.info("Element is visible ....");

	}
	
	public void setImplicitWait(long timeout, TimeUnit unit) {
		logger.info("Implicit Wait has been set to: " + timeout);
		driver.manage().timeouts().implicitlyWait(timeout, unit);
	}
}


