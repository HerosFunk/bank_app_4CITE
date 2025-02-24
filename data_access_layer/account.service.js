const Account = require('./entities/Account');

exports.createAccount = async (name, amount) => {
    try {
        const newAccount = await Account.create({ name, amount });
        return newAccount.dataValues.id;
    } catch (error) {
        throw new Error('Error creating account');
    }
};

exports.getAccountById = async (accountId) => {
    try {
        const account = await Account.findByPk(accountId);

        return account ? account.get() : null;
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching account');
    }
};

exports.getAccountByName = async (name) => {
    try {
        const account = await Account.findOne({ where: { name } });
        return account ? account.get() : null;
    } catch (error) {
        console.log(error)
        throw new Error('Error fetching account by name');
    }
};

exports.deleteAllAccounts = async () => {
    try {
        await Account.destroy({ where: {}, truncate: true });
    } catch (error) {
        throw new Error('Error deleting all accounts');
    }
};

exports.updateAccount = async (account) => {
    try {
        await Account.update(account, { where: { id: account.id } });
    } catch (error) {
        throw new Error('Error updating account');
    }
};
