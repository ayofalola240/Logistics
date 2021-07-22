const express = require('express')
const accountController = require('./../controller/accountController')

const router = express.Router()

router
    .route('/')
    .get(accountController.getAllAccounts)
    .get(accountController.createAccount);
router
    .route('/:id')
    .get(accountController.getAccount)
    .patch(accountController.updateAccount)
    .delete(accountController.deleteAccount);

module.exports = router;