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
  "duration": 7531345100,
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
  "duration": 2300819300,
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
  "duration": 133478000,
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
  "duration": 167524300,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4781647800,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 197297400,
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
  "duration": 10884967600,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 10261179400,
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
  "duration": 334603000,
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
  "duration": 151882300,
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
  "duration": 151585000,
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
  "duration": 174945100,
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
  "duration": 127594400,
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
  "duration": 239444000,
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
  "duration": 225127300,
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
  "duration": 163959700,
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
  "duration": 126460100,
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
  "duration": 137792100,
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
  "duration": 144139000,
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
  "duration": 132478400,
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
  "duration": 116347500,
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
  "duration": 157644700,
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
  "duration": 169772700,
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
  "duration": 124463300,
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
  "duration": 139112900,
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
  "duration": 149599600,
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
  "duration": 117875600,
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
  "duration": 251390000,
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
  "duration": 161398300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 12359940100,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 271809100,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 224116700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61555}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 89ad7450a707f8ac68a358d4f3ae90a3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leads.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1677679400,
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
  "duration": 5413822100,
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
  "duration": 1447729700,
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
  "duration": 143109900,
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
  "duration": 155099300,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4191540500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 140317300,
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
  "duration": 8201809400,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 2986009300,
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
  "duration": 327789600,
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
  "duration": 133607000,
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
  "duration": 146889300,
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
  "duration": 130184300,
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
  "duration": 156938000,
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
  "duration": 211547500,
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
  "duration": 230358100,
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
  "duration": 128867400,
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
  "duration": 106903900,
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
  "duration": 141125100,
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
  "duration": 135512800,
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
  "duration": 119307800,
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
  "duration": 153184400,
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
  "duration": 126433100,
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
  "duration": 127913900,
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
  "duration": 148246400,
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
  "duration": 149504000,
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
  "duration": 154056800,
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
  "duration": 159025700,
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
  "duration": 273225500,
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
  "duration": 177125100,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 5106567200,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 261733500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 146597100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61612}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 68295f80d78ec097bc5861d292da2f3e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1568145300,
  "status": "passed"
});
formatter.before({
  "duration": 5463707800,
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
  "duration": 1430026500,
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
  "duration": 94244200,
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
  "duration": 149057700,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4420321000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 129647100,
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
  "duration": 7783300300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3325638000,
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
  "duration": 348132400,
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
  "duration": 194104000,
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
  "duration": 144022200,
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
  "duration": 176009700,
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
  "duration": 140383900,
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
  "duration": 220340600,
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
  "duration": 242985100,
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
  "duration": 145308900,
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
  "duration": 124079000,
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
  "duration": 163643400,
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
  "duration": 203824700,
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
  "duration": 147333300,
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
  "duration": 125375400,
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
  "duration": 142984000,
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
  "duration": 146936200,
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
  "duration": 139705700,
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
  "duration": 128374600,
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
  "duration": 145027900,
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
  "duration": 130225000,
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
  "duration": 238754100,
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
  "duration": 173260300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 4731616000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 224077200,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 127335400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61643}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c8781207f626676a322602750c93c317\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1698742600,
  "status": "passed"
});
formatter.before({
  "duration": 5464213800,
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
  "duration": 1429160100,
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
  "duration": 112426000,
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
  "duration": 152241200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4499862400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 141047900,
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
  "duration": 7352952300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3054305700,
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
  "duration": 313261900,
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
  "duration": 175053100,
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
  "duration": 120839900,
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
  "duration": 151039100,
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
  "duration": 190353400,
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
  "duration": 215987600,
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
  "duration": 218798600,
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
  "duration": 140507000,
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
  "duration": 118677100,
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
  "duration": 164941300,
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
  "duration": 120330300,
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
  "duration": 115053800,
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
  "duration": 114677100,
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
  "duration": 143126800,
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
  "duration": 130179300,
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
  "duration": 135420100,
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
  "duration": 150750600,
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
  "duration": 153257100,
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
  "duration": 128734800,
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
  "duration": 238365100,
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
  "duration": 168231600,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 4834262200,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 248649000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 158819800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61692}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a28586782f0a63f973e31c37bab45d3e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1487562700,
  "status": "passed"
});
formatter.before({
  "duration": 5413667100,
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
  "duration": 1459485700,
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
  "duration": 96111000,
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
  "duration": 162771900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4584181700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 147109600,
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
  "duration": 7502534400,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3023193300,
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
  "duration": 301928100,
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
  "duration": 149932400,
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
  "duration": 160370700,
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
  "duration": 153305400,
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
  "duration": 159703300,
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
  "duration": 187954300,
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
  "duration": 217417500,
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
  "duration": 122195000,
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
  "duration": 114010400,
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
  "duration": 169505500,
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
  "duration": 157863800,
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
  "duration": 151257800,
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
  "duration": 114643600,
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
  "duration": 114285800,
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
  "duration": 132500800,
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
  "duration": 122005400,
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
  "duration": 123964700,
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
  "duration": 152347000,
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
  "duration": 113380300,
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
  "duration": 211298600,
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
  "duration": 181585200,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 4911269400,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 276496900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 155722400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61723}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cf259b014772806da138a826cb196baf\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1597368000,
  "status": "passed"
});
formatter.before({
  "duration": 5377707700,
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
  "duration": 1456122900,
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
  "duration": 91928200,
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
  "duration": 137334200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4413904600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 130344800,
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
  "duration": 7745939700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3308461100,
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
  "duration": 305486100,
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
  "duration": 172240400,
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
  "duration": 162679100,
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
  "duration": 137810100,
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
  "duration": 139299400,
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
  "duration": 194581600,
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
  "duration": 230764800,
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
  "duration": 127530500,
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
  "duration": 127065500,
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
  "duration": 137638000,
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
  "duration": 145071300,
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
  "duration": 131903700,
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
  "duration": 139340700,
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
  "duration": 119052900,
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
  "duration": 111624400,
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
  "duration": 101990000,
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
  "duration": 144844700,
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
  "duration": 180874100,
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
  "duration": 124699800,
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
  "duration": 241428500,
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
  "duration": 169604500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_click_on_Save_button()"
});
formatter.result({
  "duration": 5118972800,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 237566300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageSteps.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 154324900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027mouseArea_Last Name1\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.111)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QTN1F52\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.111, chrome: {chromedriverVersion: 85.0.4183.87 (cd6713ebf92fa..., userDataDir: C:\\Users\\TANUMA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61769}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d37c37f7d93008952531588c0c0f80cb\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027mouseArea_Last Name1\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.getText(Unknown Source)\r\n\tat com.cucumberFramework.stepDefinations.LeadsPageSteps.i_should_verify_leads_information(LeadsPageSteps.java:161)\r\n\tat ✽.And I should verify leads information(leadsWithParameter.feature:39)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1494492200,
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
  "duration": 5389328300,
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
  "duration": 1390765900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 79406200,
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
  "duration": 96166700,
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
  "duration": 165231600,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4267428300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 125019300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 105824800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1466773300,
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
  "duration": 5435486200,
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
  "duration": 1355711900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 69251500,
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
  "duration": 98677100,
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
  "duration": 143172800,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4680541900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 135870000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 104073500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 1411583600,
  "status": "passed"
});
formatter.before({
  "duration": 5364353900,
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
  "duration": 1398807100,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 57822300,
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
  "duration": 95879900,
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
  "duration": 132726800,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4148093200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 134927100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 116500400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1450771900,
  "status": "passed"
});
formatter.before({
  "duration": 5394180900,
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
  "duration": 1444432400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.i_should_see_log_in_page()"
});
formatter.result({
  "duration": 54272600,
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
  "duration": 85305900,
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
  "duration": 133187400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_login_button()"
});
formatter.result({
  "duration": 4407427000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 128394300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.i_sould_see_administrator_text_message_on_home_page()"
});
formatter.result({
  "duration": 100496700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 1505711400,
  "status": "passed"
});
});