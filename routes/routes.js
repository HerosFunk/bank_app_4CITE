const express = require('express');
const router = express.Router();

const accountRoutes = require('./account.route');

const API_PREFIX = '/api/v1';

router.get(`${API_PREFIX}/health`, (req, res) => {
    res.json({ 
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: process.env.NPM_PACKAGE_VERSION || '1.0.0'
    });
});

router.use(`${API_PREFIX}/account`, accountRoutes);

module.exports = router;