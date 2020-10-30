package com.cucumberFramework.pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.cucumberFramework.helper.WaitHelper;

public class loginPage {

	private WebDriver driver;

	@FindBy(xpath="//*[@id=\"form\"]/div/div[2]/input")
	public WebElement userName;

	@FindBy(xpath="//*[@id=\"form\"]/div/div[4]/input")
	WebElement passWord;

	@FindBy(xpath="//*[@id=\"submitButton\"]")
	WebElement loginButton;

	WaitHelper loginpage;

	public loginPage(WebDriver driver)
	{

		this.driver=driver;
		PageFactory.initElements(driver, this);
		

	}


	public void enterUsername(String uNmae)
	{
		userName.sendKeys(uNmae);

	}
	public void enterPassword(String passWrd)
	{
		passWord.sendKeys(passWrd);

	}
	public void clickLoginButton()
	{
		loginButton.click();

	}
}



