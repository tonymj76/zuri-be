const express = require("express");

const { login, logout } = require("../controller/adminController");
const { topAnalytics } = require("../controller/analytics");

const router = express.Router();

// Admin routes
router.post("/auth", login);
router.get("/logout", logout);
// router.post('/admin/create', newAdminValidationRules(), createAdmin);

router.get("/analytics/toplevel", topAnalytics);
module.exports = router;
