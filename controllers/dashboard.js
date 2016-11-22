/**
 * GET /dashboard
*/
exports.dashboardGet = function(req, res) {
//  if (req.user) {
//    return res.redirect('/dashboard');
//  }
  res.render('dashboard', {
    title: 'Dashboard'
  });
};
