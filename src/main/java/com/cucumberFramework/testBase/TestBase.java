package com.cucumberFramework.testBase;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import com.cucumberFramework.enums.browsers;
import com.cucumberFramework.helper.ResourceHelper;


public class TestBase {

	public static WebDriver driver;

	public WebDriver selectBrowser(String browser)
	{
		if(browser.equals(browsers.CHROME.name()))
				{
			System.setProperty("webdriver.chrome.driver", ResourceHelper.getResourcePath("\\src\\main\\resources\\drivers\\chromedriver.exe"));
			driver=new ChromeDriver();
			driver.manage().window().maximize();
			driver.navigate().refresh(); //refresh the page
			
			
			
				}else if
				(browser.equals(browsers.FIREFOX.name()))
				{
					System.setProperty("webdriver.gecko.driver", "C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\VTigerCucumberFramework\\src\\main\\resources\\drivers\\geckodriver.exe");
					driver=new FirefoxDriver();
				}
		
		return driver;
	}
}
