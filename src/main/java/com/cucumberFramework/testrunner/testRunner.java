package com.cucumberFramework.testrunner;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;


@CucumberOptions(features="C:\\Users\\tanumay123\\Desktop\\Cucumber\\Workspace_photon\\VTigerCucumberFramework\\src\\main\\java\\com\\cucumberFramework\\features\\Organisation.feature",
glue="com/cucumberFramework/stepDefinations", monochrome=true,plugin= {"pretty","html:target/cucumber-reports/cucumber-pretty", "json:target/cucumber-reports/cucumberTestReport.json",
"rerun:target/cucumber-reports/cucumberTestReport.txt"})
@RunWith(Cucumber.class)
public class testRunner {


	
}
