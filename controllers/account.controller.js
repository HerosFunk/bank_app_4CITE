const accountBusiness = require('../business/account.business');

exports.createAccount = async (req, res) => {
    try {
        const { name, amount } = req.body;
        const accountId = await accountBusiness.createAccount(name, amount);
        res.status(201).json({ id: accountId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.sendToAccount = async (req, res) => {

};

exports.getAccountInfo = async (req, res) => {
    try {
        const accountId = req.params.id;
        const account = await accountBusiness.getAccountById(accountId);
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};