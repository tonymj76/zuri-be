const express = require('express');

const { login, logout, addAdmin } = require('../controller/adminController');
const {
  topAnalytics,
  internMentorTrackStats
} = require('../controller/analytics');

const router = express.Router();

// Admin routes
router.post('/auth', login);
router.get('/logout', logout);
router.post('/superadmin/create/admin', addAdmin);

router.get('/analytics/toplevel', topAnalytics);
// router.get("/analytics/lowerlevel/intern-mentor-status")
router.get(
  '/analytics/lowerlevel/intern-mentor-tracks',
  internMentorTrackStats
);
module.exports = router;
