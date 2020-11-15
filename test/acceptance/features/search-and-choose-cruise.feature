Feature: Search and choose cruise
  As a user, I want to search and choose cruises 

  @scenario1
  Scenario: Scenario1
    Given I enter to the Carnival cruise page 
    When I search cruises to "The Bahamas" with duration of "6 - 9 Days"
    Then Results are displayed
    When I choose one sail to learn more about the trip
    Then The Itinerary page is displayed
    And The "BOOK NOW" button is displayed

