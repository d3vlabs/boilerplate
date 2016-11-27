var express = require('express');
var Product = require('../models/product');

/**
 * GET /
 */

exports.index = function(req, res) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs) {
        var productChunks = [];
        var chunkSize = 3;

        for (var i=0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize))
        }

        res.render('home', {
          title: 'Home', products: productChunks, successMsg: successMsg, noMessages: !successMsg 
        });
  });
};
