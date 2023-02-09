
Feature: Chance
    Scenario Outline: As a user, I can find a random movie
        Given I am on the chance page
        When I open genre dropdown
        When I click on checkbox
        When I click on random film button
        Then Random movie is displayed