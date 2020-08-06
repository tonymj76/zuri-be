const express = require('express');

const {
  login,
  logout
} = require('../controller/adminController');

const router = express.Router();

// Admin routes
router.post('/auth', login);
router.get('/logout', logout);
// router.post('/admin/create', newAdminValidationRules(), createAdmin);

module.exports = router;
