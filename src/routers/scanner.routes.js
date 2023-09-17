const { Router } = require('express');

const router = Router();

const {
    renderScannerCacao
} = require('../controllers/scanner.controller')

router.get('/scanner-caco', renderScannerCacao)

module.exports =  router