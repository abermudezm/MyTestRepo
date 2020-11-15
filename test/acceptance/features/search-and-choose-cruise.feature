Feature: Search and choose cruise
  As a user, I want to search and choose cruises 

  @scenario1
  Scenario: Scenario1
    Given I enter to the Carnival cruise page 
    When I search cruises to "The Bahamas" with duration of "6 - 9 Days"
    Then Results are displayed

