// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  console.log("creating routes");


  // POST route for saving a new Clothing_item
  app.post("/api/clothing_items", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Clothing_item.create({
        user_id: req.body.user_id,
        type: req.body.type,
        img_url: req.body.img_url,
    }).then(function(dbClothing_item) {
      // We have access to the new Clothing_item as an argument inside of the callback function
      res.json(dbClothing_item);
    });
  });

  app.get("/api/clothing_item/:userid/:type", function(req, res) {
   
    db.Clothing_item.findAll({
      where: {
        user_id: req.params.userid,
        type: req.params.type
      }
    }).then(function(results) {
      res.json(results);
    });
  });
};
