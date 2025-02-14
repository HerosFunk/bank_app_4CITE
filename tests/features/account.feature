Feature: Bank account management
    Scenario: A user wants to create an account
        Given the account name "Compte A"
        When the user submits the account creation request
        Then a new account should be created with the provided details
        Then the account should be retrievable with the provided details

    Scenario: A user tries to create an account with an existing name
        Given the account name "Compte A"
        And an account with the name "Compte A" already exists
        When the user submits the account creation request
        Then the account creation should fail with an error message "Account name already exists"

    Scenario: A user tries to create an account with an empty name
        Given the account name ""
        When the user submits the account creation request
        Then the account creation should fail with an error message "Account name cannot be empty"