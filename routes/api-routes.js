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

  app.get("/api/outfit", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Outfit.findAll({
      include: [db.Clothing_item]
    }).then(function(dbOutfit) {
      // We have access to the outfit as an argument inside of the callback function
      res.json(dbOutfit);
    });
  });
  app.get("/api/outfit", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Outfit.findOne({
      where: {
        user_id: req.params.user_id
      },
      include: [db.Clothing_item]
    }).then(function(dbOutfit) {
      // We have access to the outfit as an argument inside of the callback function
      res.json(dbOutfit);
    });
  });
  // POST route for saving a new Outfits
  app.post("/api/outfit", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Outfit.create({
      user_id: req.body.user_id,
      top: req.body.top,
      bottom: req.body.bottom,
      shoes: req.body.shoes,
    }).then(function(dbOutfit) {
      // We have access to the new Outfits as an argument inside of the callback function
      res.json(dbOutfit);
    });
  });
  // DELETE route for deleting outfit. We can get the id of the Outfits to be deleted from
  // req.params.id
  app.delete("/api/outfit/:id", function(req, res) {
    // We just have to specify which Outfits we want to destroy with "where"
    db.Outfit.destroy({
      where: {
        useri_d: req.params.user_id
      },
      include:[db.Clothing_item]
    }).then(function(dbOutfit) {
      res.json(dbOutfit);
    });
  });
  // PUT route for updating outfit. We can get the updated Outfits data from req.body
  app.put("/api/outfit", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Outfit.update({
      top: req.body.top,
      bottom: req.body.bottom,
      shoes: req.body.shoes,
    }, {
      where: {
        user_id: req.params.user_id
      },
      include: [db.Clothing_item]
    }).then(function(dbOutfit) {
      res.json(dbOutfit);
    });
  });
};

