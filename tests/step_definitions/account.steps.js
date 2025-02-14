const { Given, When, Then } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../index');
const accountService = require('../../data_access_layer/account.service');

let accountDetails = {};
let response;
let createdAccountId;

Given('the account name {string}', function (accountName) {
    accountDetails.name = accountName;
    accountDetails.amount = 0;
});

When('the user submits the account creation request', async function () {
    response = await request(app)
        .post('/api/v1/account')
        .send(accountDetails);
    createdAccountId = response.body.id;
});

Then('a new account should be created with the provided details', function () {
    if (response.status !== 201) {
        throw new Error(`Expected status 201 but got ${response.status}`);
    }
    if (!response.body.id) {
        throw new Error('Expected account ID to be returned');
    }
});

Then('the account should be retrievable with the provided details', async function () {
    const account = await accountService.getAccountById(createdAccountId);
    if (!account) {
        throw new Error('Account not found');
    }
    if (account.name !== accountDetails.name) {
        throw new Error('Account details do not match');
    }
});
