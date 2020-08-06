const express = require('express');

const {
  login,
  logout,
  getAdmin,
  getAllAdmin,
  addAdmin,
  deleteAdmin,
  searchMentorsWithFilter
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

router.get('/analytics/toplevel', topAnalytics);

router.get(
  '/analytics/lowerlevel/intern-mentor-application-status',
  internMentorApplicationStatusStatistics
);
router.get(
  '/analytics/lowerlevel/intern-mentor-tracks',
  internMentorTrackStats
);
router.get('/search/mentors/:filter/:term', searchMentorsWithFilter);
router.get('/admin/:id', getAdmin);
router.get('/superadmin/all/admins', getAllAdmin);

module.exports = router;
