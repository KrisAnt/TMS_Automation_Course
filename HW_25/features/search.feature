
Feature: Search 
    Scenario Outline: As a user, I can search for movies by keywords
    Given I am on the search page
    When I type "друг" into search field
    When I click on Search button
    Then Page with search results is displayed
    Then "друг" is mentioned in search results


   