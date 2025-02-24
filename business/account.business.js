const accountService = require('../data_access_layer/account.service');

exports.createAccount = async (name, amount) => {
    if (!name) {
        throw new Error('Account name cannot be empty');
    }
    const existingAccount = await accountService.getAccountByName(name);
    if (existingAccount) {
        throw new Error('Account name already exists');
    }
    return await accountService.createAccount(name, amount);
};

exports.getAccountById = async (accountId) => {
    return await accountService.getAccountById(accountId);
};

exports.sendToAccount = async (fromAccountId, toAccountId, amount) => {
    const fromAccount = await accountService.getAccountById(fromAccountId);
    const toAccount = await accountService.getAccountById(toAccountId);

    if (fromAccount.amount < amount) {
        throw new Error('Insufficient funds');
    }

    fromAccount.amount -= amount;
    toAccount.amount += amount;

    await accountService.updateAccount(fromAccount);
    await accountService.updateAccount(toAccount);
};
