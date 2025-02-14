Feature: Bank account management
    Scenario: A user wants to create an account
        Given the account name "Compte A"
        When the user submits the account creation request
        Then a new account should be created with the provided details
        Then the account should be retrievable with the provided details