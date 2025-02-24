const { Given, When, Then, Before } = require('@cucumber/cucumber');
const request = require('supertest');
const app = require('../../index');
const accountService = require('../../data_access_layer/account.service');

// Clean up test data before each scenario
Before(async function () {
    await accountService.deleteAllAccounts();
});

let response;
let accountAId;
let accountBId;

Given('Account A with id {string} has {int} units', async function (accountId, amount) {
    accountAId = await accountService.createAccount(accountId, amount);
});

Given('Account B with id {string} has {int} units', async function (accountId, amount) {
    accountBId = await accountService.createAccount(accountId, amount);
});

When('the user sends {int} units from Account A to Account B', async function (amount) {
    response = await request(app)
        .post('/api/v1/account/send')
        .send({ fromAccountId: accountAId, toAccountId: accountBId, amount });
});

Then('Account A should have {int} units', async function (expectedAmount) {
    const account = await accountService.getAccountById(accountAId);
    if (account.amount !== expectedAmount) {
        throw new Error(`Expected Account A to have ${expectedAmount} units but got ${account.amount}`);
    }
});

Then('Account B should have {int} units', async function (expectedAmount) {
    const account = await accountService.getAccountById(accountBId);
    if (account.amount !== expectedAmount) {
        throw new Error(`Expected Account B to have ${expectedAmount} units but got ${account.amount}`);
    }
});
