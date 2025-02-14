const express = require('express');
const router = express.Router();

const { sendToAccount, createAccount, getAccountInfo  } = require('../controllers/account.controller');

router.get('/:id', getAccountInfo);
router.post('/', createAccount);
router.post('/send', sendToAccount);

module.exports = router;