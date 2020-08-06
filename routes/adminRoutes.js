const express = require('express');

const {
  login,
  logout,
  addAdmin,
  deleteAdmin,
  getAllAdmins
} = require('../controller/adminController');
const {
  topAnalytics,
  internMentorTrackStats,
  internMentorApplicationStatusStatistics
} = require('../controller/analytics');

const router = express.Router();

// Admin routes
router.post('/auth', login);
router.get('/logout', logout);
router.post('/superadmin/create/admin', addAdmin);
router.delete('/superadmin/delete/:adminId', deleteAdmin);
router.get('/superadmin/all/admins', getAllAdmins);

router.get('/analytics/toplevel', topAnalytics);
// router.get("/analytics/lowerlevel/intern-mentor-status")
router.get(
  '/analytics/lowerlevel/intern-mentor-application-status',
  internMentorApplicationStatusStatistics
);
router.get(
  '/analytics/lowerlevel/intern-mentor-tracks',
  internMentorTrackStats
);
module.exports = router;
