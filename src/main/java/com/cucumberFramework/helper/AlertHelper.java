package com.cucumberFramework.helper;
import org.apache.log4j.Logger;
import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;


public class AlertHelper {

	private WebDriver driver;
	private Logger log=LoggerHelper.getLogger(AlertHelper.class);


	public AlertHelper(WebDriver driver)
	{
		this.driver=driver;

	}
	public Alert getAlert()
	{

		log.info(driver.switchTo().alert().getText());
		return driver.switchTo().alert();

	}

	public void acceptAlert()
	{
		getAlert().accept();
		log.info("Alert accepted ..");


	}
	public void dismissAlert()
	{

		getAlert().dismiss();
		log.info("Alert dismissed ...");
	}

	public boolean ifAlertisPresent()
	{

		try {

			driver.switchTo().alert();
			log.info("Alert is present ...");
			return true;

		}
		catch(NoAlertPresentException e)
		{
			log.info(e.getCause());
			return false;
		}
	}

	public void acceptIfAlertPresent()
	{

		if(ifAlertisPresent())
		{
			acceptAlert();
		}
		else {

			log.info("Alert not present ..");
		}

	}
	public void acceptifNoAlertPresent()
	{
		if(ifAlertisPresent())
		{
			dismissAlert();
		}
		else {

			log.info("Alert is not present..");
		}
	}
	public void promptAlert(String text)
	{
		if(ifAlertisPresent())
		{
			Alert alert=getAlert();
			alert.sendKeys(text);
			alert.accept();
			log.info("ALert text  "+text);

		}


	}
}
