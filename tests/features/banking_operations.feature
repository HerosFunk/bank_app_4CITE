Feature: Banking operations between two accounts

    Scenario: A user wants to send money from Account A to Account B
        Given Account A with id "accountA" has 1000 units
        And Account B with id "accountB" has 500 units
        When the user sends 200 units from Account A to Account B
        Then Account A should have 800 units
        And Account B should have 700 units
