Feature: list of films
    Scenario Outline: As a user, I can find all variants of films in film list
        Given I am on the main page
        When I click on films tab
        Then 24 film variants are displayed