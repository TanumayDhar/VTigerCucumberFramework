$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("leads.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Leads"
    }
  ]
});
formatter.before({
  "duration": 5682478500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 1004371199,
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
  "duration": 57197100,
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
  "duration": 73812301,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1696617099,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 85337200,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_leads_link()"
});
formatter.result({
  "duration": 4948898500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 1215390100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageSteps.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 163317400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName",
      "offset": 20
    }
  ],
  "location": "LeadsPageSteps.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 80031300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_enter_last_name(String)"
});
formatter.result({
  "duration": 66272999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 73278001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Title(String)"
});
formatter.result({
  "duration": 62996800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 140744100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_select_Industry(String)"
});
formatter.result({
  "duration": 99553200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "LeadsPageSteps.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 72507800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 61179500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 72924701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Street(String)"
});
formatter.result({
  "duration": 90724901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 77383500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enter_Country(String)"
});
formatter.result({
  "duration": 55383400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Description(String)"
});
formatter.result({
  "duration": 62309199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Phone(String)"
});
formatter.result({
  "duration": 67320399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 65486499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageSteps.i_enter_Fax(String)"
});
formatter.result({
  "duration": 70113700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Email(String)"
});
formatter.result({
  "duration": 75112299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enetr_Website(String)"
});
formatter.result({
  "duration": 68877201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 113093800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 82221701,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 1965361500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 159491000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 168350600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58927}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 49c66b2c630a29c742c628bf7b554d29\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leads.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1223758601,
  "status": "passed"
});
formatter.uri("leadsWithParameter.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"\u003cannualRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "leads-creation;create-leads;",
  "rows": [
    {
      "cells": [
        "title",
        "firstName",
        "lastName",
        "companyName",
        "annualRevenue",
        "Country"
      ],
      "line": 42,
      "id": "leads-creation;create-leads;;1"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName1",
        "auto_lastName1",
        "companyName1",
        "1000",
        "US"
      ],
      "line": 43,
      "id": "leads-creation;create-leads;;2"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName2",
        "auto_lastName2",
        "companyName2",
        "2000",
        "US"
      ],
      "line": 44,
      "id": "leads-creation;create-leads;;3"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName3",
        "auto_lastName3",
        "companyName3",
        "3000",
        "US"
      ],
      "line": 45,
      "id": "leads-creation;create-leads;;4"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName3",
        "auto_lastName3",
        "companyName3",
        "3000",
        "US"
      ],
      "line": 46,
      "id": "leads-creation;create-leads;;5"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName3",
        "auto_lastName3",
        "companyName3",
        "200",
        "US"
      ],
      "line": 47,
      "id": "leads-creation;create-leads;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5286168899,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 759340500,
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
  "duration": 48892900,
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
  "duration": 77455900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1734940100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 63564600,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"1000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_leads_link()"
});
formatter.result({
  "duration": 3055466500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 1175151799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageSteps.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 175878700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName1",
      "offset": 20
    }
  ],
  "location": "LeadsPageSteps.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 116723601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName1",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_enter_last_name(String)"
});
formatter.result({
  "duration": 77805400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName1",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 68724200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Title(String)"
});
formatter.result({
  "duration": 76215700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 112655100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_select_Industry(String)"
});
formatter.result({
  "duration": 148940201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "LeadsPageSteps.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 115222500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 64644099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 91004699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Street(String)"
});
formatter.result({
  "duration": 76240501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 75241100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enter_Country(String)"
});
formatter.result({
  "duration": 95520901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Description(String)"
});
formatter.result({
  "duration": 92066099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Phone(String)"
});
formatter.result({
  "duration": 68588799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 69509500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageSteps.i_enter_Fax(String)"
});
formatter.result({
  "duration": 78926800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Email(String)"
});
formatter.result({
  "duration": 101439700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enetr_Website(String)"
});
formatter.result({
  "duration": 89940801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 101066100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 125968600,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 2142603000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 120471900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 138718999,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58970}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3c4ade45cfc25c967efac04c1476472e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1278140100,
  "status": "passed"
});
formatter.before({
  "duration": 5273705100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 772112301,
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
  "duration": 50904900,
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
  "duration": 90604400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1597965500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 75303100,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"2000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_leads_link()"
});
formatter.result({
  "duration": 2929481000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 1169136901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageSteps.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 185691000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName2",
      "offset": 20
    }
  ],
  "location": "LeadsPageSteps.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 90252900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName2",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_enter_last_name(String)"
});
formatter.result({
  "duration": 72333400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName2",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 70783299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Title(String)"
});
formatter.result({
  "duration": 70468999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 178497601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_select_Industry(String)"
});
formatter.result({
  "duration": 161926700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 24
    }
  ],
  "location": "LeadsPageSteps.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 108206100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 71010601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 70373000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Street(String)"
});
formatter.result({
  "duration": 75969300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 64119500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enter_Country(String)"
});
formatter.result({
  "duration": 66672199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Description(String)"
});
formatter.result({
  "duration": 73219600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Phone(String)"
});
formatter.result({
  "duration": 71576800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 66776899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageSteps.i_enter_Fax(String)"
});
formatter.result({
  "duration": 66346499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Email(String)"
});
formatter.result({
  "duration": 78764599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enetr_Website(String)"
});
formatter.result({
  "duration": 82122600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 102428901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 84189401,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 1984649400,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 143710600,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 141869300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58998}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ec99a04ba97a3c6391b6df957862c8bf\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1234893800,
  "status": "passed"
});
formatter.before({
  "duration": 5351951800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 793010701,
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
  "duration": 73116500,
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
  "duration": 74690200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1641180300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 68049800,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"3000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_leads_link()"
});
formatter.result({
  "duration": 3008004200,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 1221064601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageSteps.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 158219700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName3",
      "offset": 20
    }
  ],
  "location": "LeadsPageSteps.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 92043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName3",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_enter_last_name(String)"
});
formatter.result({
  "duration": 72837101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName3",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 70103999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Title(String)"
});
formatter.result({
  "duration": 69259699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 96850800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_select_Industry(String)"
});
formatter.result({
  "duration": 126806500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 24
    }
  ],
  "location": "LeadsPageSteps.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 71707599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 60616200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 72819800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Street(String)"
});
formatter.result({
  "duration": 68486200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 64562300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enter_Country(String)"
});
formatter.result({
  "duration": 68128100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Description(String)"
});
formatter.result({
  "duration": 68915200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Phone(String)"
});
formatter.result({
  "duration": 65620200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 63135300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageSteps.i_enter_Fax(String)"
});
formatter.result({
  "duration": 65704999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Email(String)"
});
formatter.result({
  "duration": 68513601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enetr_Website(String)"
});
formatter.result({
  "duration": 65462701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 73087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 51068501,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 1739527700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 113633400,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 125716999,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59025}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7b1130b46f8816e0bfac25768d063bc9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1208609400,
  "status": "passed"
});
formatter.before({
  "duration": 5292031800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 774772599,
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
  "duration": 48220400,
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
  "duration": 63978800,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1650467501,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 62470199,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"3000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_leads_link()"
});
formatter.result({
  "duration": 2820881300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 1185952499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageSteps.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 125774000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName3",
      "offset": 20
    }
  ],
  "location": "LeadsPageSteps.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 75997701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName3",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_enter_last_name(String)"
});
formatter.result({
  "duration": 78907200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName3",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 70432500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Title(String)"
});
formatter.result({
  "duration": 106915199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 138393700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_select_Industry(String)"
});
formatter.result({
  "duration": 111191301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 24
    }
  ],
  "location": "LeadsPageSteps.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 69284600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 62296601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 81736000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Street(String)"
});
formatter.result({
  "duration": 79205901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 65811001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enter_Country(String)"
});
formatter.result({
  "duration": 59333801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Description(String)"
});
formatter.result({
  "duration": 63379100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Phone(String)"
});
formatter.result({
  "duration": 61568699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 69157700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageSteps.i_enter_Fax(String)"
});
formatter.result({
  "duration": 70769500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Email(String)"
});
formatter.result({
  "duration": 71454900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enetr_Website(String)"
});
formatter.result({
  "duration": 71466200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 117766300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 56031499,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 1819312600,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 106906500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 119441500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59052}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8becd7c5592289846dcf217cfe21f1c9\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1248472800,
  "status": "passed"
});
formatter.before({
  "duration": 5283417900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
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
  "duration": 759482300,
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
  "duration": 53567400,
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
  "duration": 69644899,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1505086500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 62775300,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.i_click_on_leads_link()"
});
formatter.result({
  "duration": 3036066400,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 1233812099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageSteps.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 139940899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName3",
      "offset": 20
    }
  ],
  "location": "LeadsPageSteps.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 121896600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName3",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_enter_last_name(String)"
});
formatter.result({
  "duration": 77376401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName3",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 73475800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Title(String)"
});
formatter.result({
  "duration": 69265500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 123256700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageSteps.i_select_Industry(String)"
});
formatter.result({
  "duration": 93578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "LeadsPageSteps.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 85899100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 79888099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageSteps.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 103810000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Street(String)"
});
formatter.result({
  "duration": 76295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 60145500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enter_Country(String)"
});
formatter.result({
  "duration": 71367200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageSteps.i_enter_Description(String)"
});
formatter.result({
  "duration": 89295500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Phone(String)"
});
formatter.result({
  "duration": 66215600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageSteps.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 80203900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageSteps.i_enter_Fax(String)"
});
formatter.result({
  "duration": 62699999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageSteps.i_enter_Email(String)"
});
formatter.result({
  "duration": 82763801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageSteps.i_enetr_Website(String)"
});
formatter.result({
  "duration": 69452100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 122475600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageSteps.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 83718900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 1908615699,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 87815600,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 109079900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59099}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6a9fa793b4d77d56085655b928df28b7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1235977700,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In",
  "description": "As an employee of the company\r\nI want to login to application with my credentails\r\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 5281145400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
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
  "duration": 812055000,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 29529200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
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
  "duration": 61147100,
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
  "duration": 71105101,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1588543199,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 72449300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 43445101,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1322248800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 29,
      "id": "sign-in;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 30,
      "id": "sign-in;sign-in-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 31,
      "id": "sign-in;sign-in-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5247032000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
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
  "duration": 745477500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 29874500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
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
  "duration": 52844300,
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
  "duration": 59618801,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1588903500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 58026201,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 53424401,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1155893500,
  "status": "passed"
});
formatter.before({
  "duration": 5225688000,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
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
  "duration": 798342700,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 43570200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
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
  "duration": 63013701,
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
  "duration": 56420701,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1616758600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 67392700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 42264300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1193188200,
  "status": "passed"
});
formatter.before({
  "duration": 5268002800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
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
  "duration": 800293800,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 28937500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
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
  "duration": 54798799,
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
  "duration": 76027500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 1570975100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 60435900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 44270900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1225445699,
  "status": "passed"
});
});