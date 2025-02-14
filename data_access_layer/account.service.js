const Account = require('./entities/Account');

exports.createAccount = async (name, amount) => {
    try {
        const newAccount = await Account.create({name, amount});
        return newAccount.dataValues.id
    } catch (error) {
        throw new Error('Error creating account');
    }
};

exports.getAccountById = async (accountId) => {
    try {
        const account = await Account.findByPk(accountId);
        if (!account) {
            throw new Error('Account not found');
        }
        
        return account.get();
    } catch (error) {
        throw new Error('Error fetching account');
    }
};
