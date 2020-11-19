package com.cucumberFramework.testrunner;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.api.CucumberOptions;


@CucumberOptions(features="C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\VTigerCucumberFramework\\src\\main\\java\\com\\cucumberFramework\\features\\Organisation.feature",
glue="com/cucumberFramework/stepDefinations", monochrome=true,plugin= {"pretty","html:target/cucumber-reports/cucumber-pretty", "json:target/cucumber-reports/cucumberTestReport.json",
"rerun:target/cucumber-reports/cucumberTestReport.txt"})
@RunWith(Cucumber.class)
public class testRunner {

	private TestNGCucumberRunner testNGCucumberRunner;
	   
	@BeforeClass(alwaysRun = true)
	public void setUpClass() {
		testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
	}

	@Test(groups = "cucumber", description = "Runs cucmber Features", dataProvider = "features")
	public void feature(CucumberFeatureWrapper cucumberFeature) {
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}

	@DataProvider
	public Object[][] features() {
		return testNGCucumberRunner.provideFeatures();
	}

	@AfterClass(alwaysRun = true)
	public void testDownClass() {
		testNGCucumberRunner.finish();
	}
	
}
