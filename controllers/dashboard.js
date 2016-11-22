/**
 * GET /dashboard
*/
var CEQuestion = require('../models/CEQuestion');

exports.dashboardGet = function(req, res) {
//  if (req.user) {
//    return res.redirect('/dashboard');
//  }
  CEQuestion.find(function(err, docs) {
    var cequestionChunks = [];
    var chunkSize = 3;
    for (var i=0; i < docs.length; i += chunkSize){
      cequestionChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('dashboard', {title: 'Dashboard', cequestions: docs });
  });
};
