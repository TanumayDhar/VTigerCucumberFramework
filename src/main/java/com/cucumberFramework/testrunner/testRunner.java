package com.cucumberFramework.testrunner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;



@CucumberOptions(features="C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\VTigerCucumberFramework\\src\\main\\java\\com\\cucumberFramework\\features",
glue="com/cucumberFramework/stepDefinations", monochrome=true,plugin= {"pretty","html:target/cucumber-reports/cucumber-pretty", "json:target/cucumber-reports/cucumberTestReport.json",
"rerun:target/cucumber-reports/cucumberTestReport.txt"})
@RunWith(Cucumber.class)
public class testRunner {


	private TestNGCucumberRunner testNGCucumberRunner;

	@BeforeClass(alwaysRun=true)
	public void setupClass()
	{

		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());	

	}

	@Test(groups="cucumber",description="Runs Cucumber features", dataProvider="features")
	public void feature(CucumberFeatureWrapper cucumberFeatureWrapper)
	{

		testNGCucumberRunner.runCucumber(cucumberFeatureWrapper.getCucumberFeature());

	}
	@DataProvider
	public Object[][] features()
	{

		return testNGCucumberRunner.provideFeatures();

	}
	@AfterClass(alwaysRun=true)
	public void tearDown()
	{

		testNGCucumberRunner.finish();


	}
}