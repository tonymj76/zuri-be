const express = require('express');

const { login, logout, getAdmin, getAllAdmin } = require('../controller/adminController');
const {
  topAnalytics,
  internMentorTrackStats,
  internMentorApplicationStatusStatistics
} = require('../controller/analytics');

const router = express.Router();

// Admin routes
router.post('/auth', login);
router.get('/logout', logout);
// router.post('/admin/create', newAdminValidationRules(), createAdmin);

router.get('/analytics/toplevel', topAnalytics);

router.get(
  '/analytics/lowerlevel/intern-mentor-application-status',
  internMentorApplicationStatusStatistics
);
router.get(
  '/analytics/lowerlevel/intern-mentor-tracks',
  internMentorTrackStats
);
router.get('/admin/:id', getAdmin)
router.get('/admin', getAllAdmin)

module.exports = router;
