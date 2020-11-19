$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/tanumay123/Desktop/Cucumber/Workspace_photon/VTigerCucumberFramework/src/main/java/com/cucumberFramework/features/Organisation.feature");
formatter.feature({
  "line": 1,
  "name": "Organisation Creation",
  "description": "As a Test Engineer I want to test Organisation tab functionality.",
  "id": "organisation-creation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6267556100,
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
  "duration": 9257260500,
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
  "duration": 145742700,
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
  "duration": 162674000,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 5895424400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
