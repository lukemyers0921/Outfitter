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

  // GET route for getting all of the clothing_item
  app.get("/api/clothing_item", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Clothing_item.findAll({}).then(function(dbClothing_item) {
      // We have access to the clothing_item as an argument inside of the callback function
      res.json(dbClothing_item);
    });
  });

  // POST route for saving a new Clothing_item
  app.post("/api/clothing_item", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Clothing_item.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbClothing_item) {
      // We have access to the new Clothing_item as an argument inside of the callback function
      res.json(dbClothing_item);
    });
  });

  // DELETE route for deleting clothing_item. We can get the id of the Clothing_item to be deleted from
  // req.params.id
  app.delete("/api/clothing_item/:id", function(req, res) {
    // We just have to specify which Clothing_item we want to destroy with "where"
    db.Clothing_item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbClothing_item) {
      res.json(dbClothing_item);
    });

  });

  // PUT route for updating clothing_item. We can get the updated Clothing_item data from req.body
  app.put("/api/clothing_item", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Clothing_item.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbClothing_item) {
      res.json(dbClothing_item);
    });
  });

  app.get("/api/outfit", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Outfits.findAll({}).then(function(dbOutfits) {
      // We have access to the outfit as an argument inside of the callback function
      res.json(dbOutfits);
    });
  });

  // POST route for saving a new Outfits
  app.post("/api/outfit", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Outfits.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbOutfits) {
      // We have access to the new Outfits as an argument inside of the callback function
      res.json(dbOutfits);
    });
  });

  // DELETE route for deleting outfit. We can get the id of the Outfits to be deleted from
  // req.params.id
  app.delete("/api/outfit/:id", function(req, res) {
    // We just have to specify which Outfits we want to destroy with "where"
    db.Outfits.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbOutfits) {
      res.json(dbOutfits);
    });

  });

  // PUT route for updating outfit. We can get the updated Outfits data from req.body
  app.put("/api/outfit", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Outfits.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbOutfits) {
      res.json(dbOutfits);
    });
  });
};
