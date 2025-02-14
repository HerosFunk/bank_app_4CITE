const accountService = require('../data_access_layer/account.service');

exports.createAccount = async (req, res) => {
    try {
        const { name, amount } = req.body;
        const existingAccount = await accountService.getAccountByName(name);
        if (existingAccount) {
            return res.status(400).json({ error: 'Account name already exists' });
        }
        const accountId = await accountService.createAccount(name, amount);
        res.status(201).json({ id: accountId });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.sendToAccount = async (req, res) => {

};

exports.getAccountInfo = async (req, res) => {
    try {
        const accountId = req.params.id;
        const account = await accountService.getAccountById(accountId);
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};