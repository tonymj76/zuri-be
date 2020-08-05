const express = require('express');

const {
  homePage,
  login,
  logout,
  createAdmin,
  newAdminValidationRules
} = require('../controller/adminController');

const router = express.Router();

// Admin routes
router.get('/', homePage);
router.post('/auth', login);
router.get('/logout', logout);
router.post('/admin/create', newAdminValidationRules(), createAdmin);

module.exports = router;
