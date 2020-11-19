package com.cucumberFramework.helper;

import java.util.Set;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

public class WindowHelper {

	Logger log= LoggerHelper.getLogger(WindowHelper.class);

	private WebDriver driver;


	public WindowHelper(WebDriver driver)
	{
		this.driver=driver;


	}
	/**
	 * This method will switch to parent window
	 */
	public void switchtoParentFrame()
	{

		driver.switchTo().defaultContent();
		log.info("Switched to parent window");
	}


	/**
	 * This method will switch to child window based on index
	 * @param index
	 */


	public void switchtoWindow(int index)
	{

		Set<String> windows = driver.getWindowHandles();
		int i=1;
		for(String window: windows)
		{
			if(i==index)
			{
				log.info("switched to "+window);
				driver.switchTo().window(window);
			}
			else
			{
				i++;
			}
		}



	}

	/**
	 * This method will do browser back navigation
	 */
	public void navigateBack(){
		log.info("navigating back");
		driver.navigate().back();
	}

	/**
	 * This method will do browser forward navigation
	 */
	public void navigateForward(){
		log.info("navigating forward");
		driver.navigate().forward();
	}




























}
