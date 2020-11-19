$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tanumay123/Desktop/Work/Cucumber/Workspace_photon/VTigerCucumberFramework/src/main/java/com/cucumberFramework/features/Organisation.feature");
formatter.feature({
  "line": 1,
  "name": "Organisation Creation",
  "description": "As a Test Engineer I want to test Organisation tab functionality.",
  "id": "organisation-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7160063300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageSteps.i_am_on_the_login_page_url_something(String)"
});
formatter.result({
  "duration": 6780718800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageSteps.i_enter_username_as_something(String)"
});
formatter.result({
  "duration": 115980100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageSteps.i_enter_password_as_something(String)"
});
formatter.result({
  "duration": 137598100,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 11218781500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 184587000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "",
  "id": "organisation-creation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on organisation link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on organisation plus button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter organisation Name as \"IT\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter Fax as \"1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Email as \"test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter phone as \"9579088624\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "enter ShippingCity as \"LA\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click Save button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should able to see new organisation success message",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_organisation_link()"
});
formatter.result({
  "duration": 13075129000,
  "status": "passed"
});
formatter.match({
  "location": "OrganisationPageSteps.i_click_on_organisation_plus_button()"
});
formatter.result({
  "duration": 10743626900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT",
      "offset": 30
    }
  ],
  "location": "OrganisationPageSteps.i_enter_organisation_name_as_something(String)"
});
formatter.result({
  "duration": 233292700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 16
    }
  ],
  "location": "OrganisationPageSteps.i_enter_fax_as_something(String)"
});
formatter.result({
  "duration": 149746500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 18
    }
  ],
  "location": "OrganisationPageSteps.i_enter_email_as_something(String)"
});
formatter.result({
  "duration": 159347300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9579088624",
      "offset": 16
    }
  ],
  "location": "OrganisationPageSteps.enter_phone_as_something(String)"
});
formatter.result({
  "duration": 128212700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "LA",
      "offset": 23
    }
  ],
  "location": "OrganisationPageSteps.enter_shippingcity_as_something(String)"
});
formatter.result({
  "duration": 145097900,
  "status": "passed"
});
formatter.match({
  "location": "OrganisationPageSteps.i_click_save_button()"
});
formatter.result({
  "duration": 127209700,
  "status": "passed"
});
formatter.match({
  "location": "OrganisationPageSteps.i_should_able_to_see_new_organisation_success_message()"
});
formatter.result({
  "duration": 1883500,
  "error_message": "java.lang.NullPointerException\r\n\tat com.cucumberFramework.stepDefinations.OrganisationPageSteps.i_should_able_to_see_new_organisation_success_message(OrganisationPageSteps.java:27)\r\n\tat ✽.Then I should able to see new organisation success message(C:/Users/tanumay123/Desktop/Work/Cucumber/Workspace_photon/VTigerCucumberFramework/src/main/java/com/cucumberFramework/features/Organisation.feature:20)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1953936900,
  "status": "passed"
});
});