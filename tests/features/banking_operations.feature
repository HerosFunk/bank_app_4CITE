Feature: Banking operations between two accounts

    Scenario: A user wants to send money from Account A to Account B
        Given Account A with id "accountA" has 1000 units
        And Account B with id "accountB" has 500 units
        When the user sends 200 units from Account A to Account B
        Then Account A should have 800 units
        And Account B should have 700 units

    Scenario: A user tries to send more money than available from Account A to Account B
        Given Account A with id "accountA" has 1000 units
        And Account B with id "accountB" has 500 units
        When the user sends 1200 units from Account A to Account B
        Then the transfer should fail with an error message "Insufficient funds"
        And Account A should still have 1000 units
        And Account B should still have 500 units
