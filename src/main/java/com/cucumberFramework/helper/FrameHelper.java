package com.cucumberFramework.helper;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class FrameHelper {


	Logger log=LoggerHelper.getLogger(FrameHelper.class);
	private WebDriver driver;


	public FrameHelper(WebDriver driver)
	{
		this.driver=driver;


	}


	public void switchtoFrame(int frameIndex)
	{
		driver.switchTo().frame(frameIndex);
		log.info("Switched to frame "+frameIndex);


	}

	public void switchtoFrame(String frameName)
	{
		driver.switchTo().frame(frameName);
		log.info("Switched to frame "+frameName);

	}
	public void switchtoFrame(WebElement element)
	{
		driver.switchTo().frame(element);
		log.info("Switched to frame "+element.toString());

	}

	


























}
