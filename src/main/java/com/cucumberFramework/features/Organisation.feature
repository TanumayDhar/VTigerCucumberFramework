Feature: Organisation Creation
  As a Test Engineer I want to test Organisation tab functionality.

  Background: User should be on Home page
    Given I am on the Login page URL "http://localhost:8888/index.php?"
    When I enter username as "admin"
    And I enter password as "password"
    And click on login button
    Then I sould see application homepage

  Scenario: 
    When I click on organisation link
    And I click on organisation plus button
    And I enter organisation Name as "IT"
    And I enter Fax as "1234"
    And I enter Email as "test@gmail.com"
    And enter phone as "9579088624"
    And enter ShippingCity as "LA"
    And I click Save button
    Then I should able to see new organisation success message
