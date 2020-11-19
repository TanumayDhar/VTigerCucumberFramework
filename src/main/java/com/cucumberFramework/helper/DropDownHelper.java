package com.cucumberFramework.helper;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class DropDownHelper {
	
	Logger log= LoggerHelper.getLogger(DropDownHelper.class);
	
	private WebDriver driver;
	
	
	public DropDownHelper(WebDriver driver)
	{
		this.driver=driver;
		
		
	}
	
	public void selectUsingValue(WebElement element , String value)
	{
		Select select=new Select(element);
		log.info("Selected using value"+value);
		select.selectByValue(value);
	
	}
	public void selectUsingIndex(WebElement element , int value)
	{
		Select select=new Select(element);
		log.info("Selected using Index value"+value);
		select.selectByIndex(value);
	
	}
	
	public void selectUsingText(WebElement element , String text)
	{
		Select select=new Select(element);
		log.info("Selected using text"+text);
		select.selectByValue(text);
	
	}
	public void deSelectUsingValue(WebElement element, String value){
		Select select = new Select(element);
		log.info("deSelectUsingValue and value is: "+value);
		select.deselectByValue(value);
	}
	
	public void deSelectUsingIndex(WebElement element, int index){
		Select select = new Select(element);
		log.info("deSelectUsingIndex and index is: "+index);
		select.deselectByIndex(index);
	}
	
	public void deSelectUsingVisibleText(WebElement element, String visibleText){
		Select select = new Select(element);
		log.info("deselectByVisibleText and visibleText is: "+visibleText);
		select.deselectByVisibleText(visibleText);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
